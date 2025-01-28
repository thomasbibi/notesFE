import { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/user/login', formData);
            localStorage.setItem('token', response.data.data.token);
            setMessage(response.data.message);
            navigate('/');
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Login;
