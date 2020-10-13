import React from "react";
import {Menu} from "antd";
import {UserOutlined, HomeOutlined, ShoppingCartOutlined, MailOutlined} from '@ant-design/icons';
import { Link} from "react-router-dom";

const NavBar = () => {
    return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <HomeOutlined />
            <span>Home</span>
            <Link to={'/home'}/>
        </Menu.Item>
        <Menu.Item key="2">
            <UserOutlined />
            <span>Customer</span>
            <Link to={'/customer'}/>
        </Menu.Item>
        <Menu.Item key="3">
            <ShoppingCartOutlined />
            <span>Order</span>
            <Link to={'/order'}/>
        </Menu.Item>
        <Menu.Item key="4">
            <MailOutlined />
            <span>Address</span>
            <Link to={'/address'}/>
        </Menu.Item>
    </Menu>
};

export default NavBar;
