import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [points, setPoints] = useState([])
  const [cities, setCities] = useState([])

  const selectRef = useRef();
  useEffect(() => {
    axios.get('/getCoordinates')
      .then(response => {
        const { data } = response
        setCities(data)
      })
  }, [])

  const addPoint = () => {
    const value = selectRef.current.value;
    const city = cities.find(e => e.nameCity === value)
    setPoints((prev) => ([ ...prev, city]))
  }

  return (
    <div className="container">
      <select ref={selectRef} className='selectCity'>
        {cities.map(elem => (<option value={elem.cityId}>{elem.nameCity}</option>))}
      </select>
      <input className='plusCity' type='button' value="+" onClick={addPoint}></input>
      <input className='minusCity' type='button' value="-"></input>
      {points.map(point => <div>{point.nameCity}</div>)}
      <div className='way'>
       
      </div>
    </div>

  );
}
//Біля кожного міста зробити кнопку ремува
// Зробити міста не повторюванні

export default App;
