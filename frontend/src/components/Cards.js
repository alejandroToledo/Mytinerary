import React from "react"
import travel1 from "../images/travel1.jpg"
import travel2 from "../images/travel2.jpg"
import travel3 from "../images/travel3.jpg"
import { NavLink } from "react-router-dom"


class Cards extends React.Component {

    render() {
        return (
            <>
                <section className="container d-flex mt-5 ml-auto justify-content-center">
                    <div className="card" style={{ width: '15rem' }}>
                        <NavLink to="/cities" className="card-body d-flex" id="botonCities">
                            <div>
                                <h5 className="card-title">Start Browsing</h5>
                                <p className="card-text">Explore all the cities</p>
                            </div>
                            <NavLink to="/cities" className="d-flex align-items-center ml-auto mr-auto"><svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </NavLink>
                        </NavLink>
                    </div>
                </section>
                <section className="container mt-5 mb-5">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top img-fluid" src={travel1} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">Visit new places</h5>
                                <p className="card-text">Curabitur id lacus tempus, blandit odio tempus, viverra nibh. Sed semper enim ante, ut auctor orci gravida feugiat. Nunc eget mi nulla. Phasellus mauris augue.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top img-fluid" src={travel2} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">Have new experiences</h5>
                                <p className="card-text">Etiam pretium mattis neque in viverra. Donec metus eros, eleifend sit amet vehicula ut, rhoncus a tortor. Sed arcu quam, varius et ornare at, consequat.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top img-fluid" src={travel3} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">Meet new people</h5>
                                <p className="card-text">Vestibulum consequat tempor cursus. Integer tincidunt, lorem ut faucibus interdum, elit ex rhoncus nulla, in sollicitudin metus enim id diam. Proin lacus lacus, maximus ut.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Cards