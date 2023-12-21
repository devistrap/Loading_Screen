import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";
import './nav.css'


function Nav() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [message, setMessage] = useState('');

  function login() {
   fetch('http://localhost:5000/fetchAll')
      .then(response => response.json())
      .then(data => setMessage(data))
      console.log(message);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='nav'>
        <p className='welcome'>Welcome on my website, it's currently {currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds()} </p>
        <Link to={`/login`}><p onClick={login} className='login'>Log in</p></Link>
      </div>
    </>
  )
}

export default Nav

