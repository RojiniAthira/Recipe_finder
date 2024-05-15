import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically handle the login logic.
    // For simplicity, I'm just checking if the username and password are non-empty.
    if (password === confirmPassword) {
        try {
            axios.post("http://localhost:3001/auth/register", { username, password });
            alert("Registration Completed!Now Login");
          } catch (err) {
            console.error(err);
          }
        navigate('/');
    }
  };
  
    return (
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                <FaLock className='icon'/>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}