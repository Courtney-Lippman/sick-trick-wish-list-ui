import React, { Component } from 'react'
import './Trick.css'

const Trick = ({ stance, name, obstacle, tutorial}) => {
    return (
        <div className='trick'>
            <p>{stance} {name}</p>
            <p>obstacle: {obstacle}</p>
            <p>Link to tutorial:</p>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default Trick