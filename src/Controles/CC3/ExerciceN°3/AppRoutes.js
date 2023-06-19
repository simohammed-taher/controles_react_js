import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './Accueil';
import ListUsers from './ListUsers';
import UserParId from './UserParId';
import NavBar from "./NavBar";

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={'/'} element={<Accueil />} />
                    <Route path={'/ListUsers'} element={<ListUsers />} />
                    <Route path={'/UserParId/:id'} element={<UserParId />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
