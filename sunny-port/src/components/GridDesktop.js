import {gridDesktop}  from "../data/grid"
import {useState} from 'react'

import React from 'react'

const GridDesktop = () => {

    // eslint-disable-next-line no-unused-vars
    const [cards,setCards] = useState (gridDesktop)
    return (
        <>
        <section>
        {cards.map(({id,image})=>(

            <article key= {id}>
            <img src={image} alt=""/>

            
            
            
            </article>


        ))}
        
        </section>
            
        </>
    )
}

export default GridDesktop
