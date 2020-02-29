import React from "react";
import {Menu} from "antd";
import {PieChartOutlined,} from '@ant-design/icons';

const NavBar = () => {
    return <Menu defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <PieChartOutlined />
            <span><a href={'/'}>Home</a></span>
        </Menu.Item>
    </Menu>
};

export default NavBar;
