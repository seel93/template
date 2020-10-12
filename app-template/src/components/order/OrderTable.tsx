import React, {useEffect, useState} from 'react';
import {CustomerOrder} from "../../models/CustomerOrder";
import CustomerOrderService from "../../services/CustomerOrderService";
import {message, Popconfirm, Space, Table} from "antd";
import {Customer} from "../../models/Customer";
import CustomerService from "../../services/CustomerService";
import {useMetaContext} from "../../context/MetaContext";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";


const OrderTable = () => {
    const [orders, setOrders] = useState<CustomerOrder []>([]);
    const [customers, setCustomers] = useState<Customer []>([]);
    const {orderTypes} = useMetaContext();

    useEffect(() => {
        CustomerOrderService.fetchOrders().then(setOrders);
        CustomerService.fetchAllCustomers().then(setCustomers);
    }, [])

    const confirm = (id: number) =>
        CustomerOrderService.deleteOrder(id)
            .then(message.success('Deleted order'));



    const orderColumns = [
        {title: 'Id', dataIndex: 'id'},
        {
            title: 'Customer',
            dataIndex: 'customerId',
            render: (record: number) =>
                customers.filter((customer) =>
                    customer.id === record).map((customer) =>
                    customer.lastName)
        },
        {
            title: 'Type',
            dataIndex: 'orderTypeId',
            render: (record: number) => orderTypes.filter((type) =>
                type.id === record).map((type) =>
                type.label)
        },
        {title: 'Address moving to', dataIndex: 'addressMovingTo'},
        {title: 'Address moving from', dataIndex: 'addressMovingFrom'},
        {title: 'Completion date', dataIndex: 'completionDate'},
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (record: number) => <>
                <EditOutlined/>
                <br/>
                <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={() => console.log(record)}
                    okText="Yes"
                    cancelText="No"
                >
                <DeleteOutlined/>
                </Popconfirm>,
            </>
        }
    ]

    return <>
        <h1> Current orders</h1>
        <Table columns={orderColumns} dataSource={orders}/>
    </>

}

export default OrderTable;
