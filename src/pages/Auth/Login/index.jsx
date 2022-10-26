import React from 'react'
import { useState } from 'react';
import ButtonAtom from '../../../components/common/ButtonAtom';
import InputAtom from '../../../components/common/InputAtom';
import './styles.css'
const Login = () => {
    const [userName,setUserName] =useState("");
    const [password,setPassword] =useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login-wrapper'>
            <div className="login-content">
                <h1>Welcome</h1>
                <p>Please Login to your account</p>
                <form onSubmit={handleSubmit}>
                    <InputAtom
                        required
                        label='User Name'
                        placeholder='Amit Singh'
                        id='userName'
                        name='username'
                        handleInput={(e)=>setUserName(e.target.value)}
                        value={userName}
                        type='text'
                    />
                    <InputAtom
                        required
                        label='Password'
                        placeholder='xxxxx'
                        id='password'
                        name='username'
                        handleInput={(e)=>setPassword(e.target.value)}
                        value={password}
                        type='password'
                    />
                    <ButtonAtom label='login' type='s' handleClick={(e)=>console.log(e)}/>
                </form>
            </div>
        </div>
    )
}

export default Login
