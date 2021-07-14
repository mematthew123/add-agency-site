import {gridMobile}  from "../data/grid"
import {useState} from 'react'

import React from 'react'

const GridMobile = () => {

    // eslint-disable-next-line no-unused-vars
    const [cards,setCards] = useState (gridMobile)
    return (
        <>
        <section ClassName="py-20">
        {cards.map(({id,image})=>(

            <article key= {id}>
            <img src={image} alt=""/>

            
            
            
            </article>


        ))}
        
        </section>
            
        </>
    )
}

export default GridMobile