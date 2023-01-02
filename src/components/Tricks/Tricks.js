import React from 'react'
import './Tricks.css'
import Trick from '../Trick/Trick'

const Tricks = ({ existingTricks }) => {
    const eachTrick = existingTricks.map(trick => {
        return (
            <Trick
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
                key={trick.id}
                id={trick.id}
            />
        )
    })
    
    return(
        <section className='tricks-container'>
            {eachTrick}
        </section>
    )
}



export default Tricks