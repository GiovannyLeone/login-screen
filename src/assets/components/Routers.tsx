import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../../pages/LoginPage';



export interface AppRoutersPageProps { }

const AppRoutersPage: React.FunctionComponent<AppRoutersPageProps> = props => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Create' element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}
export default AppRoutersPage