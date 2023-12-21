import './ps.css';
import { useState, useEffect } from 'react';


function Pc() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data))
      
  }, []);

console.log(message);
  return (
    <div className='pc'>
      <p>{JSON.stringify(message)}</p>
      <ul>
        <li>used memory: {JSON.stringify((message['usedmem'] / 1000).toFixed(1) as number)} GB</li>
      </ul>
    </div>
  );
}

export default Pc;
