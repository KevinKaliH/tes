import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Home from '../pages/Home'
import ContainerJob, { Create, Edit, Home as HomeJob } from '../pages/Job'

export default function Approutes() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/job' element={<ContainerJob />}>
                    <Route index element={<HomeJob/>} />
                    <Route path='create' element={<Create/>} />
                    <Route path='edit' element={<Edit/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
