import React from 'react'
import transformMobile from "../images/mobile/image-transform.jpg"
import transformDesktop from "../images/desktop/image-transform.jpg"

function Transform() {
    return (
    <>
    

    <section>
    
    <div>
    <picture>
    
    <source media="(min-width: 768px)" srcSet= {transformDesktop} />
<img src= {transformMobile} alt=""/>

    </picture>
    </div>

    <div>
    
    <h2>Transform your brand</h2>
    <p>  We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.</p>
    <button className= "btn-trasnform">Learn More</button>
    
    </div>


    </section>
            
        


    </>
    )
}

export default Transform
