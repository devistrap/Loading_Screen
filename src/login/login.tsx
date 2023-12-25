import React from 'react'
import { useState } from 'react';
import './login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(true);


    const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
    
       
     fetch('http://localhost:5000/login', options )
    .then(response => response.json())
    .then(data => {setMessage(data)})
    .catch(err => console.log(err))
    console.log(message[0])
    if(message[0] == undefined){
        console.log('login is incorrect')
        toggleVisibility()
}
else if(message[0] != undefined){
        console.log('login is correct')
        toggleVisibility()
        
    }
    
    
    
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
                    {isVisible != true && <p className='error'>your password or email is incorrect</p>}
                </div>
                <p>{JSON.stringify(message)}</p>
            </form>
        </div>
    );
};

export default Login;
