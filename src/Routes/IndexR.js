import React from 'react'
import { Route, Routes } from "react-router-dom"
import Main from '../Components/Main'
import Dashboard from '../Components/Dashboard'

export default function IndexR() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Dashboard' element={<Dashboard />} />
            </Routes>
        </>
    )
}

