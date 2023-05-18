import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('/getCoordinates')
      .then(response => {
        const {data} = response
        setCities(data)
      })
  }, [])

  return (
      <div className="container">
        <select className='selectCity'>
          {cities.map(elem => (<option value={elem.cityId}>{elem.nameCity}</option>))}
        </select>
        <input className='plusCity' type='button' value="+"></input>
        <input className='minusCity' type='button' value="-"></input>
        <div className='way'>

        </div>
      </div>
      
  );
}

export default App;
