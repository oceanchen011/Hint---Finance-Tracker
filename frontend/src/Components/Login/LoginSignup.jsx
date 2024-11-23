import React, { useState } from 'react'
import Validation from './LoginValidation'
import './LoginSignup.css'
import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {


    const [action, setAction] = useState("Sign Up")
    const [userName, setUserName] = useState('oceanchen')
    const [email, setEmail] = useState('oceanchen999@gmail.com')
    const [password, setPassword] = useState('Testing123$')
    const [statusMessage, setStatusMessage] = useState("");
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate(); 

    const [values, setValues] = useState({
        name: 'oceanchen', 
        email: 'oceanchen999@gmail.com',
        password: 'Testing123$'
    })

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value 
        }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === "")) {
            axios.post('http://localhost:3300/api', values)
                .then(res => {
                    setStatusMessage("Data successfully sent to the backend!");
                    console.log("Response:", res);
                })
                .catch(err => {
                    setStatusMessage("Failed to send data to the backend.");
                    console.error("Error:", err);
                    navigate('/HomeScreen');
                });
        } else {
            setStatusMessage("Please correct the errors before submitting.");
            console.log("Validation Errors:", validationErrors);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text"> {action} </div>
                <div className="underline"></div>
            </div>
            <div className="submit-container">
                <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}> Sign Up </button>
                <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}> Login </button>
            </div>
            <form onSubmit={handleSubmit} className="inputs">
                <div className="input">
                    <CgProfile className='profile-img' />
                    <input
                        type="text"
                        name="name"
                        placeholder='Username'
                        onChange={handleInput}
                        value={values.name}
                    />
                </div>
                {action === "Login" ? null : (
                    <div className="input">
                        <MdOutlineEmail className='profile-img' />
                        <input
                            type="text"
                            name="email"
                            placeholder='Email'
                            onChange={handleInput}
                            value={values.email}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                )}
                <div className="input">
                    <FaLock className='profile-img' />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={handleInput}
                        value={values.password}
                    />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <a className='forgot-password' href='/HomeScreen'> Forgot Password </a>
                <button type="submit" className="submit-form"> {action} </button>
            </form>

            {/* Display the status message */}
            {statusMessage && <div className='status-message'>{statusMessage}</div>}
        </div>
    )
}

export default LoginSignup