import React,{useState,useEffect} from 'react'


function About() {

const [count,setCount] = useState(0)


useEffect(()=> {
    setTimeout (()=> {
        setCount(count + 1)
    },1000)
},[count])

    return (
        <div>
           
            <p style = {{color:"orange",fontSize:"60px"}}>
                {count}
            </p>
        </div>
    )
}

export default About
