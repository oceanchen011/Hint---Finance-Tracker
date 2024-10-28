import React, { useState } from 'react'
import Validation from './LoginValidation'
import './LoginSignup.css'
import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

const LoginSignup = () => {


    const [action, setAction] = useState("Sign Up")
    const [userName, setUserName] = useState('oceanchen')
    const [email, setEmail] = useState('oceanchen999@gmail.com')
    const [password, setPassword] = useState('Testing123$')

    const [values, setValues] = useState({
        name: 'oceanchen', 
        email: 'oceanchen999@gmail.com',
        password: 'Testing123$'
    })

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value // Use event.target.value directly
        }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        setErrors(Validation(values)); 
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:3001/', values)
            .then(res => console.log(res))
            .catch(err => console.log(err)); 
        }
    }


    return (
        <div className='container'>
            <div className='header'>
                <div className="text"> {action} </div>
                <div className="underline"></div>
            </div>
            <div className="submit-container">
                <button className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up </button>
                <button className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login </button>
            </div>
            <div className="inputs">
                <div className="input">
                    <CgProfile className='profile-img'/>
                    <input type="text" placeholder='Username' onChange={handleInput} value={userName}/>
                </div>
                {action==="Login"?<div></div>: <div className="input">
                    <MdOutlineEmail className='profile-img'/>
                    <input type="text" placeholder='Email' onChange={handleInput} value={email}/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>}
                <div className="input">
                    <FaLock className='profile-img'/>
                    <input type="text" placeholder='Password' onChange={handleInput} value={password}/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <a className='forgot-password' href='/'> Forgot Password </a>
            </div>
            <button className="submit-form" onClick={handleSubmit}> {action} </button>
        </div>
    )
}

export default LoginSignup