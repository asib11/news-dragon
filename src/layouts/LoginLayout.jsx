// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavigationBar from '../pages/Home/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;