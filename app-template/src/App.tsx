import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import {Layout} from "antd";
import Service from "./services/Service";
import NavBar from "./components/NavBar";

import {LogoutOutlined} from '@ant-design/icons';
import Home from "./pages/Home";

const App = () => {
    const {Header, Content, Footer, Sider} = Layout;
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        Service.healthCheck();
    }, []);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
                <h1 style={{color: "white"}}>App </h1>
                <NavBar/>
            </Sider>
            <Layout className="site-layout">
                <Content className={"content"}>
                    <Router>
                        <Switch>
                            <Route path="/">
                                <Home/>
                            </Route>
                            <Route path="/*">
                                <Redirect to={'/'}/>
                            </Route>
                        </Switch>
                    </Router>
                </Content>
                <Footer style={{textAlign: 'center'}}>Created by: Øystein Seel 2020</Footer>
            </Layout>
        </Layout>
    );
};

export default App;















