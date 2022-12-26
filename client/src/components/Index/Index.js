import React, {useState, useEffect} from "react";
import axios from "axios";
// import { Route, Routes, Link, Navigate } from "react-router-dom";
import CardPackage from "./CardPackage/CardPackage.js"

/* eslint-disable react-hooks/exhaustive-deps */
const Index = (props) => {
  const [packages, setPackages] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3002/packages')
    .then(res => {
      let pack = res.data.map(item =>{
        return (<CardPackage key={item.id} detail ={item}/>)
      })
      setPackages(pack)
    })
  }, [])
 
  return (
  <div>
    <h1>Package List</h1>
    <div>{packages}</div>
  </div> )
};

export default Index;
