import React, {useEffect, useState} from 'react';
import {Address} from "../../models/Address";
import AddressService from "../../services/AddressService";
import {Modal, Popconfirm, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import AddressForm from "./AddressForm";

const AddressTable = () => {
    const [addresses, setAddresses] = useState<Address []>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<Address>();

    useEffect(() => {
        AddressService.getAddresses().then(setAddresses);
    }, [])

    const addressColumns = [
        {title: 'Street', dataIndex: 'street'},
        {title: 'Zip', dataIndex: 'zip'},
        {title: 'City', dataIndex: 'city'},
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (record: number, index: Address) =>
                <>
                    <EditOutlined onClick={() => {
                        setVisible(!visible)
                        setSelectedAddress(index);
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
    ];

    return <>
        <Table columns={addressColumns} dataSource={addresses}/>
        <Modal
            title="Basic Modal"
            visible={visible}
            onCancel={() => setVisible(!visible)}
        >
            <AddressForm initialValues={selectedAddress}/>
        </Modal>
    </>
}

export default AddressTable;
