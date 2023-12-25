import React from 'react';
import { useState } from 'react';
import './register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <form>
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
                
            </form>
        </div>
    );
};

export default Register;
