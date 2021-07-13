import {useState} from "react"
import{testimonials} from "../data/Testimonials"


const Testimonials = () => {

    // eslint-disable-next-line no-unused-vars
    const [ people,setPeople,] = useState(testimonials)
    return (
        <>
            

        <section>
        <h2 className="testimonials-header text-3xl uppercase tracking tracking-widest text-center">Client Testimonials</h2>
        <div>
        {people.map(({id, name,desc,title,image})=>(


            <article key={id}>
            <img src={image} alt={name} />
            <p>{desc}</p>
            <h4>{name}</h4>
            <small>{title}</small>
            
            
            </article>
        ))}

        </div>
        
        </section>
        </>
    )
}

export default Testimonials
