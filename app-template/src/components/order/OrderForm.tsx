import React, {useEffect, useState} from 'react';
import {Form, Input, Select} from "antd";
import {Customer} from "../../models/Customer";
import CustomerService from "../../services/CustomerService";

const OrderForm = () => {
    const [form] = Form.useForm();
    const [customers, setCustomers] = useState<Customer []>([]);


    useEffect(() => {
        CustomerService.fetchAllCustomers().then(setCustomers);
    },[])


    const handleSubmit = (values: any) => console.log(values);

    const {Option} = Select;

    return <>
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item label={'Customer'}>
                <Select>
                    {customers.map((customer) =>
                        <Select.Option value={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>

        </Form>
        </>



}

export default OrderForm;
