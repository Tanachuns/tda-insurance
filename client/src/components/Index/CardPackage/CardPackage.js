import React, { useState } from "react"
// import axios from "axios"
import {Link} from "react-router-dom";
import './CardPackage.css'
import { StyledBox, CardHeader, CardBody, StyledImage } from "../../StylesPages/CardPackage"




const CardPackage = props => {
    return (                
        <StyledBox>
            <CardHeader>
                <StyledImage src={props.detail.picture}/>
            </CardHeader>
            
                <Link to={`/packages/${props.detail.id}`}>
                
                    <h2>{props.detail.name}</h2>
                    <h2>{props.detail.cost}</h2>
                    <p>{props.detail.descript}</p>
    
                </Link>
           
            
        </StyledBox>
    )    
}

export default CardPackage