import {graphicMobile} from "../data/Graphic"
import {useState} from "react"

import React from 'react'

const GraphicMobile = () => {
    // eslint-disable-next-line no-unused-vars
    const[cards,setCards] = useState(graphicMobile)
    return (
        <>

        <section>
        {cards.map(({id, image,title,text})=>(


        <article key = {id} className="relative">
        <img src= {image} alt={title}/>
        <div className="absolute bottom-5 left-0 text-center">
        <h3  className="text-xl mb-5">{title} </h3>
        <p>{text}</p>

        </div>

        
        
        </article>
        
        ))}
        
        
        
        </section>
            
        </>
    )
}

export default GraphicMobile

