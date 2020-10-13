import React from 'react';
import AddressForm from "../components/Address/AddressForm";
import AddressTable from "../components/Address/AddressTable";
import {Col, Row} from "antd";
import '../App.css';

const AddressPage = () => {
    return <>
        <h1>Addresses</h1>
        <Row>
            <Col span={12} className={'content'}>
                <AddressTable/>
            </Col>
            <Col span={12} className={'content'}>
                <AddressForm/>
            </Col>
        </Row>
    </>
};

export default AddressPage;
