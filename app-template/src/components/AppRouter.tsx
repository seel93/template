import React from 'react';
import {Route, RouteProps} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
}

const AppRouter = ({children, ...rest}: PrivateRouteProps) => {
        return <Route {...rest} render={() => children}/>;
};
export default AppRouter;
