import '../styles/register.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            console.log(name, email, password);
            const response = await axios.post('http://localhost:5000/register', { name, email, password });
            console.log(response);
            setIsLoading(false);
            navigate('/plans')
        } catch (error) {
            setIsLoading(false);
            setErrorMessage('Registration failed');
        }
    };

    return (
        <div className="signup-box">
            <h1>Create Account</h1>
            <form onSubmit={ handleRegistration }>
                <label>Name</label>
                <input
                    type="text"
                    placeholder=""
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    required
                />

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
                    { isLoading ? 'Signing Up...' : 'Sign Up' }
                </button>
            </form>
            { errorMessage && <p className="error-message">{ errorMessage }</p> }
            <p className="para-2">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

