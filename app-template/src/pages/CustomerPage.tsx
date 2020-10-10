import React, {useEffect, useState} from "react";
import CustomerForm from "../components/Customer/CustomerForm";
import {Customer} from "../models/Customer";
import CustomerService from "../services/CustomerService";
import {Row, Col, Table} from "antd";
import {DeleteOutlined} from "@ant-design/icons";


const CustomerPage = () => {

    const [customers, setCustomers] = useState<Customer []>([]);

    const deleteCustomer = (id: number) =>
        CustomerService.deleteCustomer(id);


    useEffect(() => {
        CustomerService.fetchAllCustomers().then(setCustomers)
    }, []);

    const customerColumns = [
        {title: 'First name', dataIndex: 'firstName'},
        {title: 'Last name', dataIndex: 'lastName'},
        {title: 'Email', dataIndex: 'email'},
        {title: 'Phone number', dataIndex: 'phoneNumber'},
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (record: any) => <DeleteOutlined onClick={() => deleteCustomer(record)}/>
        }
    ]

    return <>
        <h1> Customers</h1>
        <Row>
            <Col>
                <CustomerForm/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table columns={customerColumns} dataSource={customers}/>
            </Col>
        </Row>
    </>
};

export default CustomerPage;
