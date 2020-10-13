import React from "react"
import {Button, Form, Input, InputNumber, message} from "antd";
import CustomerService from "../../services/CustomerService";
import {Customer} from "../../models/Customer";

interface CustomerFormProps {
    initialValues?: Customer;
}

const CustomerForm = (props: CustomerFormProps) => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) =>
        CustomerService.createCustomer(values)
            .then(() => message.success('Customer created'))
            .catch(() => message.error('Failed to create customer'));

    return <>
        <Form form={form} onFinish={handleSubmit} layout='vertical'
        initialValues={props.initialValues && {
            firstName: props.initialValues.firstName,
            lastName: props.initialValues.lastName,
            email: props.initialValues.email,
            phoneNumber: props.initialValues.phoneNumber
        }}
        >
            <Form.Item name="firstName" rules={[{required: true}]} label='First name'>
                <Input/>
            </Form.Item>
            <Form.Item name="lastName" rules={[{required: true}]} label='Last name'>
                <Input/>
            </Form.Item>
            <Form.Item name="email" rules={[{required: true}]} label='Email'>
                <Input type={'email'}/>
            </Form.Item>
            <Form.Item name="phoneNumber" rules={[{required: true}]} label='Phone'>
                <InputNumber/>
            </Form.Item>
            <Button htmlType={'submit'} type='primary'>Submit</Button>
        </Form>
    </>
};

export default CustomerForm;
