import React from "react";
import {Menu} from "antd";
import {PieChartOutlined, SearchOutlined} from '@ant-design/icons';
import { Link} from "react-router-dom";

const NavBar = () => {
    return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <PieChartOutlined/>
            <span>Home</span>
            <Link to={'/home'}/>
        </Menu.Item>
        <Menu.Item key="2">
            <SearchOutlined/>
            <span>About</span>
            <Link to={'/about'}/>
        </Menu.Item>
    </Menu>
};

export default NavBar;
