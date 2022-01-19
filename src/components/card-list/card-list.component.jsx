import React, { Component } from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';
export const CardList = (props) => { 
    return <div className='card-list'> {
        props.dogs.map(dog => 
            <Card key={dog.id} dog={dog}></Card>
            )
    }</div> ;
}