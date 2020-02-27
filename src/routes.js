import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './components/public/Home';
import MainPrivate from './components/private/MainPrivate'
import PageNotFound from './components/PageNotFound'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<MainPrivate page='dashboard' />} />
            <Route path="/profile" element={<MainPrivate page='profile' />} />
            <Route path="/product" element={<MainPrivate page='produto' />} />
            <Route path="/sales" element={<MainPrivate page='venda' />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
};
