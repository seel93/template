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

    const fetchAddresses = () => AddressService.getAddresses().then(setAddresses);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const deleteAddress = (id: number) =>
        AddressService.deleteAddress(id).then(fetchAddresses);

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
                        title="Are you sure delete this address?"
                        onConfirm={() => deleteAddress(record)}
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
            title={`Edit address for id: ${selectedAddress?.id}`}
            visible={visible}
            onCancel={() => setVisible(!visible)}
            onOk={() => setVisible(!visible)}
        >
            <AddressForm initialValues={selectedAddress} onChange={() => fetchAddresses()} />
        </Modal>
    </>
}

export default AddressTable;
