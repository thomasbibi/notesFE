import { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/user/sign-up', formData);
            setMessage(response.data.message);
            navigate("/dashboard");
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Signup;
