import React from 'react'
import Pdata from './Pdata'
import ProjectCard from './ProjectCard'
import { useState } from 'react'

const Projects = () => {
  const [data, setdata] = useState(Pdata)
    return (
        < >
          this is projects page  
          <div className="row">

          {data.map((elemant,index)=>{
            console.log(elemant)
            return <ProjectCard  key={index} {...elemant}/>
          })}
          </div> 
        </>
    )
}

export default Projects
