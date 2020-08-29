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
                                <h5 className="card-title">Experiencias</h5>
                                <p className="card-text">Unique activities hosted by locals</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top img-fluid" src={travel2} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">Adventures</h5>
                                <p className="card-text">Hosted trips with lodging, meals and activities included</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top img-fluid" src={travel3} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">Restaurants</h5>
                                <p className="card-text">Popular spots to eat and drink</p>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default Cards