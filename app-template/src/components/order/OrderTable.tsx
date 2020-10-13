import React, {useEffect, useState} from 'react';
import {CustomerOrder} from "../../models/CustomerOrder";
import CustomerOrderService from "../../services/CustomerOrderService";
import {message, Modal, Popconfirm, Table} from "antd";
import {Customer} from "../../models/Customer";
import CustomerService from "../../services/CustomerService";
import {useMetaContext} from "../../context/MetaContext";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Address} from "../../models/Address";
import AddressService from "../../services/AddressService";
import OrderForm from "./OrderForm";


const OrderTable = () => {
    const {orderTypes} = useMetaContext();
    const [orders, setOrders] = useState<CustomerOrder []>([]);
    const [customers, setCustomers] = useState<Customer []>([]);
    const [addresses, setAddresses] = useState<Address []>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedCustomerOrder, setSelectedCustomerOrder] = useState<CustomerOrder>();

    useEffect(() => {
        CustomerOrderService.fetchOrders().then(setOrders);
        CustomerService.fetchAllCustomers().then(setCustomers);
        AddressService.getAddresses().then(setAddresses);
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
        {
            title: 'Address moving to',
            dataIndex: 'addressMovingTo',
            render: (record: number) =>
                addresses.filter((address) =>
                    address.id === record).map((address) =>
                    `Street: ${address.street}, City: ${address.city}`
                )
        },
        {
            title: 'Address moving from',
            dataIndex: 'addressMovingFrom',
            render: (record: number) =>
                addresses.filter((address) =>
                    address.id === record).map((address) =>
                    `Street: ${address.street}, City: ${address.city}`
                )
        },
        {
            title: 'Completion date',
            dataIndex: 'completionDate',
            sorter: (a: any, b: any) => a.completionDate < b.completionDate
                ? -1 : (a.completionDate > b.completionDate ? 1 : 0)
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (record: number, index: CustomerOrder) => <>
                <EditOutlined onClick={() => {
                    setVisible(!visible)
                    setSelectedCustomerOrder(index);
                }}/>
                <br/>
                <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={() => console.log(record)}
                    okText="Yes"
                    cancelText="No"
                >
                    <DeleteOutlined/>
                </Popconfirm>
            </>
        }
    ]

    return <>
        <h1> Current orders</h1>
        <Table columns={orderColumns} dataSource={orders}/>
        <Modal
            title={`Edit for order: ${selectedCustomerOrder?.id}`}
            visible={visible}
            onCancel={() => setVisible(!visible)}
        >
            <OrderForm initialValues={selectedCustomerOrder}/>
        </Modal>
    </>

}

export default OrderTable;
