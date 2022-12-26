import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function Packages() {
  const [packages, setPackages] = useState([]);
    const { id } = useParams();
    const url = ("http://localhost:3002/packages/" + id)
    
    // fetch api
    async function getPackages() {
      axios.get(url)
        .then (res => {setPackages(res.data)})
      
        .catch (err => console.log(err))
    }
    useEffect (()=> {
      getPackages();
    },[])
    
    console.log(useParams());

  return (
    <div>
      <h1>{packages.name}</h1>
      
    </div>
  )
}

export default Packages