import './App.css';
import React, {useEffect, useState} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {Breadcrumb, Layout} from "antd";
import Service from "./services/Service";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import AppRouter from "./components/AppRouter";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import CustomerPage from "./pages/CustomerPage";
import OrderPage from "./pages/OrderPage";

const App = () => {

    const {Header, Sider, Content, Footer} = Layout;
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        Service.healthCheck();
    }, []);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={toggle}>
                <h3>
                    <span>App</span>
                </h3>
                <NavBar/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 2}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <AppRouter exact path={'/'} component={Home}/>
                        <AppRouter exact path={'/about'} component={About}/>
                        <AppRouter exact path={'/customer'} component={CustomerPage}/>
                        <AppRouter exact path={'/order'} component={OrderPage}/>
                        <AppRouter path={'/*'}>
                            <Redirect to={'/'}/>
                        </AppRouter>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;

/*
        <Layout style={{minHeight: '100vh'}}>
                <Footer style={{textAlign: 'center'}}>Created by: Øystein Seel 2020</Footer>
<Content className={"content"}>
</Content>
*/














