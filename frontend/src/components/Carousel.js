import React from "react"

class Carousel extends React.Component {
    state = {
        ciudades: ["paris", "roma", "barcelona", "dubai"],
        ciudades2: ["bangkok", "london", "singapore", "miami"],
        ciudades3: ["milan", "tokyo", "amsterdam", "moscow"],
    }
    render() {
        return (
            <>
                <section className="container mt-5 mb-5">
                    <h3>Top Mytineraries</h3>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                                <div className="row ">
                                    {this.state.ciudades.map((ciudad) => (
                                        <div className="col-6 col-md-3">
                                            <div className="thumb-wrapper">
                                                <div className="img-box">
                                                    <img src={require(`../images/${ciudad}.jpg`)} className="img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content" style={{ backgroundColor: 'rgba(66, 166, 248)' }}>
                                                    <h4 className="text-capitalize text-center pb-1 text-light">{ciudad}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row ">
                                    {this.state.ciudades2.map((ciudad) => (
                                        <div className="col-6 col-md-3">
                                            <div className="thumb-wrapper">
                                                <div className="img-box">
                                                    <img src={require(`../images/${ciudad}.jpg`)} className="img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content" style={{ backgroundColor: 'rgba(66, 166, 248)' }}>
                                                    <h4 className="text-capitalize text-center pb-1 text-light">{ciudad}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row ">
                                    {this.state.ciudades3.map((ciudad) => (
                                        <div className="col-6 col-md-3">
                                            <div className="thumb-wrapper">
                                                <div className="img-box">
                                                    <img src={require(`../images/${ciudad}.jpg`)} className="img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content" style={{ backgroundColor: 'rgba(66, 166, 248)' }}>
                                                    <h4 className="text-capitalize text-center pb-1 text-light">{ciudad}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </>
        )
    }
}

export default Carousel