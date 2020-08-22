import React from 'react'

const Capitales = (props) => {
    return (
        <>
            <li className="d-flex justify-content-center col-4">
                <div className="card" >
                    <div className="card-img-top img-fluid" style={{ backgroundImage: `url(${props.ciudad.image})`, backgroundSize: 'cover', width: '30vw', height: '30vh', backgroundPosition: 'center' }} >
                    </div>
                    <div className="">
                        <h5 className="card-title">{props.ciudad.name}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Capitales