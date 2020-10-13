import React, { Component,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Login({username,setUsername}){
      
    const [password,setPassword]=useState('');
    function handleUserNameChange(e){
        setUsername(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    return(
        <section>
            <label >
                UserName:
             <input
             value={ username}
             onChange={handleUserNameChange}
             />
             </label>
            
            < label >
            Password:
             <input
             value={password}
             onChange={handlePasswordChange}
             />
             </ label>
             <Link to="/Welcome">Login</Link>
            
        </section>
    );

}

  