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
                <section class="container mt-5 mb-5">
                    <h3>Top Mytineraries</h3>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active ">
                                <div class="row ">
                                    {this.state.ciudades.map((ciudad) => (
                                        <div class="col-6 col-md-3">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src={require(`../images/${ciudad}.jpg`)} class="img-fluid" alt="" />
                                                </div>
                                                <div class="thumb-content" style={{ backgroundColor: 'rgba(66, 166, 248)' }}>
                                                    <h4 class="text-capitalize text-center pb-1 text-light">{ciudad}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div class="row ">
                                    {this.state.ciudades2.map((ciudad) => (
                                        <div class="col-6 col-md-3">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src={require(`../images/${ciudad}.jpg`)} class="img-fluid" alt="" />
                                                </div>
                                                <div class="thumb-content" style={{ backgroundColor: 'rgba(66, 166, 248)' }}>
                                                    <h4 class="text-capitalize text-center pb-1 text-light">{ciudad}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row ">
                                    {this.state.ciudades3.map((ciudad) => (
                                        <div class="col-6 col-md-3">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src={require(`../images/${ciudad}.jpg`)} class="img-fluid" alt="" />
                                                </div>
                                                <div class="thumb-content" style={{ backgroundColor: 'rgba(66, 166, 248)' }}>
                                                    <h4 class="text-capitalize text-center pb-1 text-light">{ciudad}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </>
        )
    }
}

export default Carousel