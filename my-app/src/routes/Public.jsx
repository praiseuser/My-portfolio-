import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Public/HomePage';
import HomeLayout from '../layouts/HomeLayout';


const PublicRoute = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomeLayout>
                        <HomePage />
                    </HomeLayout>
                }
            />
        </Routes>
    );
};

export default PublicRoute;
