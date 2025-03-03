import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState([]);

  const fetchApi = async() => {
const response = await axios.get("http://localhost:8080/api");
setDogs(response.data.dogs);
console.log(response.data.dogs);
  };

  useEffect(( ) => {
  fetchApi();
  }, []);

  return (
      <div className='div1'>
        {dogs.map((dog, index) => (
          <ul className='ul1' key={index}>
            <p className='p1'>{dog}</p>
          </ul>
        ))}
      </div>
  )
}

export default App
