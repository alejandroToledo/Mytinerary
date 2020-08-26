import React from 'react'
import { NavLink } from 'react-router-dom'

const Capitales = (props) => {
    return (
        <>

            <li className="d-flex justify-content-center col-12 col-sm-6 col-xl-4 mb-2" key={props.ciudad.name}>
                <div className="card" >
                    <div className="card-img-top img-fluid" style={{ backgroundImage: `url(${props.ciudad.image})`, backgroundSize: 'cover', width: '70vw', height: '30vh', backgroundPosition: 'center' }} >
                    </div>
                    <NavLink to={`/itineraries/${props.ciudad._id}`}>
                        <div className="">
                            <h5 className="card-title">{props.ciudad.name}</h5>
                        </div>
                    </NavLink>
                </div>
            </li>

        </>
    )
}

export default Capitales