import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Добавляем useNavigate
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Инициализируем navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        
        // Здесь будет логика авторизации
        // После успешной авторизации переходим на профиль:
        navigate('/profile');
    };

    return (
        <div className='login-page'>
            <div className='login-card'>
                <h1 className='login-logo'>Rewards & Review</h1>
                <p className='login-subtitle'>Welcome back! Please enter your details.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            id='email'
                            className='login-input' 
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            id='password'
                            className='login-input' 
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-actions'>
                        <label className='remember-me'>
                            <input type='checkbox' /> 
                            Remember me
                        </label>
                        <a href='/forgot-password' className='forgot-password'>Forgot password?</a>
                    </div>

                    <button type='submit' className='login-btn'>Sign in</button>
                </form>

                <p className='signup-link'>
                    Don't have an account? <a href='/signup'>Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;