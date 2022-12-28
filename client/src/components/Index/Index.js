import React, {useState, useEffect} from "react";
import axios from "axios";
// import { Route, Routes, Link, Navigate } from "react-router-dom";
import CardPackage from "./CardPackage/CardPackage.js";
import { Flexarea } from "../StylesPages/CardPackage";
import { Container } from "../StylesPages/PagesLayout";

/* eslint-disable react-hooks/exhaustive-deps */
const Index = (props) => {
  const [packages, setPackages] = useState([])
  const [filterPack, setFilterPack] = useState([])
  
  
  useEffect(() => {
    axios.get('http://localhost:3002/packages')
    .then(res => {
      let pack = res.data.map(item =>{
        return (<CardPackage key={[item.id,item.level]}  detail ={item}/>)
      })
      setPackages(pack)
      setFilterPack(pack)
    })
  }, [])

  const handleClick =(e) =>{
    e.preventDefault();
    if(e.target.filter.value === 'All'){
      setFilterPack(packages)
    }else{
      const tier = e.target.filter.value
      const filterList = []
      packages.forEach(item =>{
        if(item.key[item.key.length -1] == tier){
          filterList.push(item)
        }
      })
      setFilterPack(filterList)
       }
  }

 
  return (
  <Container>
    <h1>Car Insurance Packages</h1>
    <form onSubmit={handleClick} >
      <select name="filter">
        <option value={null}>All</option>
      <option value={1}>tier 1</option>
      <option value={2}>tier 2</option>
      <option value={3}>tier 3</option>
      </select>
      <input type='submit' value='select'/>
    </form>
      <Flexarea>
        {filterPack}
      </Flexarea>
  </Container> )
};

export default Index;
