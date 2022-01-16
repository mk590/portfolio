import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div class="card" style={{width: '18rem',backgroundColor:'green'}}>
                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div class="card-body">
                    <h5 class="card-title">{props.Title}</h5>
                    <p class="card-text">{props.Description}</p>
                    <a href={props.Link} target='_blank' class="btn btn-primary">Go to project</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
