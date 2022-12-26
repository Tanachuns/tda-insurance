import React, { useState } from "react"
// import axios from "axios"
import {Link} from "react-router-dom";
import './CardPackage.css'

const CardPackage = props => {

    const [packageData, setPackageData] = useState({})


    return (
        <Link to={`/packages/${props.detail.id}`}>
        <fieldset>
            <h2>Package :{props.detail.name}</h2>
            <h2>Cost :{props.detail.cost}</h2>
        </fieldset>
        </Link>
    )
}

export default CardPackage