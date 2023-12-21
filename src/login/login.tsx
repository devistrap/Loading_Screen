import React from 'react'
import { useState } from 'react';
import './login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let options = {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
        console.log(options)
     fetch('http://localhost:5000/login', options )
    .then(response => response.json())
    .then(data => setMessage(data))
    .then(message => {
        if(message['username'] === username && message['password'] === password){
            console.log('ok')
        }
        else{
            console.log('not ok')
        }
    })
    
        
    
    
    
    
    
    }
    


    return (
        <div className='login_main'>
            <form onSubmit={handleSubmit}>
                <div className='form_body'>
                    <label>
                        Username:
                        <br />
                        <input type="text" name="name" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <br /><br />
                    <label>
                        Password:
                        <br/>
                        <input type="text" name="name" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <br /><br />
                    <input type="submit" className='submit' value="Submit" />
                </div>
                <p>{JSON.stringify(message)}</p>
            </form>
        </div>
    );
};

export default Login;
