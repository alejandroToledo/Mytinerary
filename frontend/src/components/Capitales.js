import React from 'react'

const Capitales = (props) => {
    return (
        <>
            <li className="d-flex justify-content-center">
                <div className="card w-25 mb-2" style={{}}>
                    <div className="card-img-top img-fluid" style={{ backgroundImage: `url(${props.pais.flag})`, backgroundSize: 'cover', width: '40vw', height: '20vh', backgroundPosition: 'center' }} >
                    </div>
                    <div className="pt-2">
                        <h5 className="card-title">{props.pais.name}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Capitales