import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App