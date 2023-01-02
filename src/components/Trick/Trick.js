import React, { Component } from 'react'
import './Trick.css'

const Card = ({ stance, name, obstacle, tutorial}) => {
    return (
        <div className='card'>
            <p>{stance} {name}</p>
            <p>obstacle: {obstacle}</p>
            <p>Link to tutorial:</p>
            <p>{tutorial}</p>
        </div>
    )
}

export default Card