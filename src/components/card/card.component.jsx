import React from "react";
import './card.styles.css';


export const Card =(props)=>(
     
    <div className='card-container'> 
    <img src={`https://robohash.org/${props.dog.id}?set=set4&size=180x180`} alt="dog" />
        <h2>{props.dog.id}</h2>
         <h1>{props.dog.name}</h1>
         <h1>{props.dog.email}</h1>

    </div>
)