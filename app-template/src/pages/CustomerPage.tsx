import React from "react";
import CustomerForm from "../components/Customer/CustomerForm";
import {Row, Col} from "antd";
import CustomerTable from "../components/Customer/CustomerTable";
import '../App.css';

const CustomerPage = () => {
    return <>
        <h1> Customers</h1>
        <Row>
            <Col span={12} className={'content'}>
                <CustomerTable />
            </Col>
            <Col span={12} className={'content'}>
                <CustomerForm/>
            </Col>
        </Row>
    </>
};

export default CustomerPage;
