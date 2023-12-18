import React from 'react'
import Navbar from './header/navbar'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'
export default function PageLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>

    )
}