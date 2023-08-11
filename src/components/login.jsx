import '../styles/register.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const token = response.data.token;

            localStorage.setItem('token', token);
            setIsLoading(false);
            navigate('/plans')
        } catch (error) {
            setIsLoading(false);
            setErrorMessage('Invalid credentials');
        }
    };

    return (
        <div className="signup-box">
            <h1>Login to your Account</h1>
            <form onSubmit={ handleLogin }>
                <label>Email</label>
                <input
                    type="email"
                    placeholder=""
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder=""
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    required
                />

                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        checked={ rememberMe }
                        onChange={ (e) => setRememberMe(e.target.checked) }
                    />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" disabled={ isLoading }>
                    { isLoading ? 'Logging In...' : 'Login' }
                </button>
            </form>
            { errorMessage && <p className="error-message">{ errorMessage }</p> }
            <p className="para-2">
                New to MyApp? <Link to="/">Sign Up</Link>
            </p>
        </div>
    );
};
