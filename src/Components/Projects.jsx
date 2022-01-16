import React from 'react'
import Pdata from './Pdata'
import ProjectCard from './ProjectCard'
import { useState } from 'react'

const Projects = () => {
  const [data, setdata] = useState(Pdata)
    return (
        < >
          <div className="container-fluid my-0" id='projectPage' style={{backgroundColor:'blue'}}>
          <div className="row my-0">

          {data.map((elemant,index)=>{
            console.log(elemant)
            return (
              <div className="col-md-3 p-md-3">
              <ProjectCard  key={index} {...elemant}/>
              </div>
            )
          })}
          </div> 
          </div>
        </>
    )
}

export default Projects
