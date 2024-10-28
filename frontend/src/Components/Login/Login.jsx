import React, { useState } from 'react'
import { Validation } from '../Login/LoginValidation'
import './Login.css'
import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";

const Login = () => {


    const [action, setAction] = useState("Sign Up")
    const [email, setEmail] = useState('')

    const [values, setValues] = useState({
        name: '', 
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        setErrors(Validation(values)); 
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
                    <input type="text" placeholder='Username'/>
                </div>
                {action==="Login"?<div></div>: <div className="input">
                    <MdOutlineEmail className='profile-img'/>
                    <input type="text" placeholder='Email'/>
                </div>}
                <div className="input">
                    <FaLock className='profile-img'/>
                    <input type="text" placeholder='Password'/>
                </div>
                <a className='forgot-password'> Forgot Password </a>
            </div>
            <button className="submit-form" onClick={handleSubmit}> {action} </button>
        </div>
    )
}

export default Login