import React from 'react';
import {Form, Input} from "antd";
import {SaveOutlined} from "@ant-design/icons";


interface AddressComponentProps  {
    value?: number,
    onChange?: Function
}

const AddressComponent = (props: AddressComponentProps) => {
    const [form] = Form.useForm();

    return <>
        <Form form={form}>
            <Form.Item label={'Street'} name={'street'}>
                <Input/>
            </Form.Item>
            <Form.Item label={'Zip'} name={'zip'}>
                <Input/>
            </Form.Item>
            <Form.Item label={'City'} name={'city'}>
                <Input/>
            </Form.Item>
            <Form.Item>
                <a> add address <SaveOutlined /> </a>
            </Form.Item>
        </Form>
        </>

}

export default AddressComponent
