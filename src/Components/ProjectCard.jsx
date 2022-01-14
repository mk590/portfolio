import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div class="card" style={{width: '18rem'}}>
                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div class="card-body">
                    <h5 class="card-title">{props.Title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={props.Link} target='_blank' class="btn btn-primary">Go to project</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
