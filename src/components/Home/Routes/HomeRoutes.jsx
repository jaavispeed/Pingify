import { Navbar } from '../../Navbar/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Home.jsx'
import SendEmails from '../../SendEmails/SendEmails.jsx'


const HomeRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="emails" element={<SendEmails />} />


                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>

        </>
    )
}

export default HomeRoutes