import {graphicDesktop} from "../data/Graphic"


import {useState} from "react"

import React from 'react'

const GraphicDesktop = () => {
    // eslint-disable-next-line no-unused-vars
    const[cards,setCards] = useState(graphicDesktop)
    return (
        <>

        <section className= "graphic md:flex items-center justify-center">
        {cards.map(({id, image,title,text})=>(


        <article key = {id} className="relative">
        <img src= {image} alt={title}/>
        <div className="absolute bottom-5 left-0 text-center">
        <h3 className="text-xl mb-5">{title} </h3>
        <p>{text}</p>

        </div>

        
        
        </article>
        
        ))}
        
        
        
        </section>
            
        </>
    )
}

export default GraphicDesktop

