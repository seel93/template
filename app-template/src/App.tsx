import './App.css';
import React, {useState} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {Layout} from "antd";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AppRouter from "./components/AppRouter";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import CustomerPage from "./pages/CustomerPage";
import OrderPage from "./pages/OrderPage";
import {MetaProvider} from "./context/MetaContext";
import AddressPage from "./pages/AddressPage";

const App = () => {

    const {Header, Sider, Content} = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={toggle}>
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
                    <MetaProvider>
                        <Switch>
                            <AppRouter exact path={'/'} component={Home}/>
                            <AppRouter exact path={'/customer'} component={CustomerPage}/>
                            <AppRouter exact path={'/order'} component={OrderPage}/>
                            <AppRouter exact path={'/address'} component={AddressPage}/>
                            <AppRouter path={'/*'}>
                                <Redirect to={'/'}/>
                            </AppRouter>
                        </Switch>
                    </MetaProvider>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
