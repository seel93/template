import React, {useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, Select} from "antd";
import {Customer} from "../../models/Customer";
import CustomerService from "../../services/CustomerService";
import {useMetaContext} from "../../context/MetaContext";
import AddressComponent from "../common/AddressComponent";
import {SaveOutlined} from "@ant-design/icons";

const OrderForm = () => {
    const [form] = Form.useForm();
    const [customers, setCustomers] = useState<Customer []>([]);
    const [existingAddress, setExistingAddress] = useState<boolean>(true);
    const {orderTypes} = useMetaContext();

    useEffect(() => {
        CustomerService.fetchAllCustomers().then(setCustomers);
    }, [])

    const handleSubmit = (values: any) => console.log(values);
    return <>
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item label={'Customer'} rules={[{required: true}]} name={'customer'}>
                <Select>
                    {customers.map((customer) =>
                        <Select.Option value={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </Select.Option>
                    )}
                </Select>

            </Form.Item>
            <Form.Item label={'Type'} rules={[{required: true}]} name={'orderType'}>
                <Select>
                    {orderTypes.map((order) =>
                        <Select.Option value={order.id}>
                            {order.label}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item label={'Address moving from'} rules={[{required: true}]} name={'addressMovingFrom'}>
                <AddressComponent existingAddress={existingAddress}/>
                <Button type={'link'} onClick={() => setExistingAddress(!existingAddress)}> create new <SaveOutlined/>
                </Button>
            </Form.Item>
            <Form.Item label={'Address moving to'} rules={[{required: true}]} name={'addressMovingTo'}>
                <AddressComponent existingAddress={existingAddress}/>

                {existingAddress &&
                <Button type={'link'} onClick={() => setExistingAddress(!existingAddress)}> create new <SaveOutlined/>
                </Button>
                }
            </Form.Item>

            <Form.Item label={'Date of completion'} rules={[{required: true}]} name={'completionDate'}>
                <DatePicker/>
            </Form.Item>

            <Form.Item label={'Comment'} rules={[{required: true}]}>
                <Input/>
            </Form.Item>

            <Form.Item>
                <Button type={'primary'} htmlType={'submit'}>Submit</Button>
            </Form.Item>

        </Form>
    </>


}

export default OrderForm;
