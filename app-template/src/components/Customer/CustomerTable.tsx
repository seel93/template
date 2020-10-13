import React, {useEffect, useState} from 'react';
import {Customer} from "../../models/Customer";
import CustomerService from "../../services/CustomerService";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Modal, Table} from "antd";
import AddressForm from "../Address/AddressForm";
import {Address} from "../../models/Address";
import CustomerForm from "./CustomerForm";


const CustomerTable = () => {

    const [customers, setCustomers] = useState<Customer []>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

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
            render: (record: any, index: Customer) => <>
                <EditOutlined onClick={() => {
                    setVisible(!visible)
                    setSelectedCustomer(index);
                }}/>
                <br/>
                <DeleteOutlined onClick={() => deleteCustomer(record)}/>
            </>
        }
    ]

    return <>
        <Table columns={customerColumns} dataSource={customers}/>
        <Modal
            title={`Edit customer: ${selectedCustomer?.firstName} ${selectedCustomer?.lastName}`}
            visible={visible}
            onCancel={() => setVisible(!visible)}
        >
            <CustomerForm initialValues={selectedCustomer}/>
        </Modal>
    </>
}

export default CustomerTable;
