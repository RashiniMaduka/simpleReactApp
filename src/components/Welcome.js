import React, {Component,useEffect, useState } from 'react';
export default function Welcome(){
    const [username,setUserName]=useState('')
    useEffect(() => {
         
    });
return(
    <section>
        <h1>Welcome {username}</h1>
    
    </section>
);
}
 