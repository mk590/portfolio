import React from 'react'
import Scard from './Scard'
import Sdata from './Sdata'
import { useState } from 'react'

const Skills = () => {
    const [data, setdata] = useState(Sdata)
    return (
        <>
            this is skills page
           
{data.map((elemant,index)=>{
    return <Scard key={index} {...elemant} />
})}
        </>
    )
}

export default Skills
