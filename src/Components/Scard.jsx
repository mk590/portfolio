import React from 'react'

const Scard = (props) => {
    return (
        <>
             <div className="card text-center">
                <div className="card-header">
                  Advanced
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Scard
