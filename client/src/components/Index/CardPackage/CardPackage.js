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
            <CardBody>
                <Link to={`/packages/${props.detail.id}`}>
                
                    <h2>Package :{props.detail.name}</h2>
                    <h2>Cost :{props.detail.cost}</h2>
    
                </Link>
            </CardBody>
            
        </StyledBox>
    )    
}

export default CardPackage