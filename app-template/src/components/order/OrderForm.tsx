import React, {useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, message, Select} from "antd";
import {Customer} from "../../models/Customer";
import CustomerService from "../../services/CustomerService";
import {useMetaContext} from "../../context/MetaContext";
import AddressComponent from "../Address/AddressComponent";
import {CustomerOrder} from "../../models/CustomerOrder";
import CustomerOrderService from "../../services/CustomerOrderService";

interface OrderFormProps {
    initialValues?: CustomerOrder
}

const OrderForm = (props: OrderFormProps) => {
    const [form] = Form.useForm();
    const [customers, setCustomers] = useState<Customer []>([]);
    const {orderTypes} = useMetaContext();

    useEffect(() => {
        CustomerService.fetchAllCustomers().then(setCustomers);
    }, [])

    const handleSubmit = (order: CustomerOrder) => {
        return props.initialValues ? CustomerOrderService.updateOrder(props.initialValues.id ? props.initialValues.id : 0, order) :
            CustomerOrderService.createOrder(order)
            .then(res => message.success(`Order created with id: ${res.data}`))
            .catch(() => message.error('Failed to create order'))
    }

    return <>
        <Form form={form} onFinish={handleSubmit} layout='vertical'
        initialValues={props.initialValues && {
            customerId: props.initialValues.customerId,
            orderTypeId: props.initialValues.orderTypeId,
            addressMovingFrom: props.initialValues.addressMovingFrom,
            addressMovingTo: props.initialValues.addressMovingTo,
            //completionDate: props.initialValues.completionDate,
            comment: props.initialValues.comment
        }}>
            <Form.Item label={'Customer'} rules={[{required: true}]} name={'customerId'}>
                <Select>
                    {customers.map((customer) =>
                        <Select.Option value={customer.id ? customer.id : 0}>
                            {customer.firstName} {customer.lastName}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item label={'Type'} rules={[{required: true}]} name={'orderTypeId'}>
                <Select>
                    {orderTypes.map((order) =>
                        <Select.Option value={order.id}>
                            {order.label}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item label={'Address moving from'} rules={[{required: true}]} name={'addressMovingFrom'}>
                <AddressComponent/>
            </Form.Item>
            <Form.Item label={'Address moving to'} rules={[{required: true}]} name={'addressMovingTo'}>
                <AddressComponent/>
            </Form.Item>
            <Form.Item label={'Date of completion'} rules={[{required: true}]} name={'completionDate'}>
                <DatePicker/>
            </Form.Item>
            <Form.Item label={'Comment'} rules={[{required: true}]} name={'comment'}>
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType={'submit'}>Submit</Button>
            </Form.Item>
        </Form>
    </>
}

export default OrderForm;
