import React from 'react'
import Activities from './Activities.js';
import '../styles/stylesComments.css'
import Likes from './Likes.js';
import { connect } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions.js';
import { NavLink } from "react-router-dom"

class Itinerary extends React.Component {
    state = {
        Itinerary: {},
        viewMore: false,
        commentary: []
    }
    async componentDidMount() {
        console.log(this.props.itinerary)
    }

    render() {
        const changeViewMore = () => {
            this.setState({ viewMore: !this.state.viewMore })
        }

        const readCommentary = (e) => {
            const commentary = e.target.value
            this.setState({
                commentary
            })
        }

        const sendCommentary = (e) => {
            var commentaryId = e.target.id
            var commentary = this.state.commentary
            this.props.putCommentary(commentaryId, commentary, this.props.newToken)
        }

        const deleteCommentary = (e) => {
            this.props.deleteCommentary()
            alert('eliminar comentario')
        }

        const modifyCommentary = (e) => {
            alert('modificar comentario')
            this.props.modifyCommentary()
        }

        return (

            <>
                <div className=" d-flex justify-content-center">
                    <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                        <div className=" d-flex px-4 py-2">
                            <div className="col-4">
                                <div style={{ backgroundImage: `url(${this.props.itinerary.profilePic})`, backgroundSize: 'cover', width: '12vw', height: '26vh', borderRadius: '100px', backgroundPosition: '0 15%' }}></div>

                            </div>
                            <div className=" d-flex flex-column col-8">
                                <h5 className="text-center display-4 w-100">{this.props.itinerary.title}</h5>
                                <div className="d-flex pl-2 ">
                                    {this.props.itinerary &&
                                        < Likes itinerary={this.props.itinerary} />
                                    }
                                    <div className="card-text pr-3">
                                        {
                                            this.props.itinerary.price === 1 ? <p className='colorPrice'><span className="text-bold">$</span>$$$$</p> :
                                                this.props.itinerary.price === 2 ? <p className='colorPrice'><span className="text-bold">$$</span>$$$</p> :
                                                    this.props.itinerary.price === 3 ? <p className='colorPrice'><span className="text-bold">$$$</span>$$</p> :
                                                        this.props.itinerary.price === 4 ? <p className='colorPrice'><span className="text-bold">$$$$</span>$</p> :
                                                            this.props.itinerary.price === 5 ? <p className='colorPrice'><span className="text-bold">$$$$$</span></p> :
                                                                this.props.itinerary.price
                                        }
                                    </div>
                                    <p className="card-text pr-3 ">{this.props.itinerary.duration} hours</p>
                                </div>

                                <div className=" d-flex ">{this.props.itinerary.hashtag.map((hashtag) => (
                                    <p className="card-text pr-3">#{hashtag}</p>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.state.viewMore && <Activities id={this.props.itinerary._id} />}
                        </div>

                        {this.state.viewMore &&
                            <>
                                <h3 className="ml-5 pl-5">Comments</h3>
                                <div className="container mx-auto col-10 border mb-5" id="containerComments">

                                    <div className="row mx-auto">
                                        <div className="col-md-12">
                                            <div className="post-content col-12">
                                                <div className="post-container col-12">
                                                    <div className="post-detail">
                                                        <div className="line-divider"></div>
                                                        <div style={{ minHeight: '250px', maxHeight: '350px' }}>

                                                            {this.props.itinerary.comments.map((commentary) => (<div className="post-comment">
                                                                <div className="post-comment align-items ">
                                                                    <img src={commentary.userPic} alt="" className="profile-photo-sm" />
                                                                    <div className="eliminarYmodificar ">
                                                                        <p className="pt-2">{commentary.content}</p>
                                                                        <div className="d-inline ml-5 pl-5">
                                                                            <img src={require(`../images/pencil.png`)} style={{ width: '1.2vw' }} className="mr-2" onClick={modifyCommentary}></img>
                                                                            <img src={require(`../images/borrar.png`)} style={{ width: '1.2vw' }} className="mr-2" onClick={deleteCommentary}></img>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>))}


                                                        </div>
                                                        {this.props.newToken && <div className="post-comment">
                                                            <NavLink to="/account" className="profile-link"><img src={this.props.newPic} alt="" className="profile-photo-sm" /></NavLink>
                                                            <input type="text" className="form-control" placeholder="Post a comment" onChange={readCommentary} id={this.props.itinerary._id} />
                                                            <label className="sendComments" onClick={sendCommentary} >
                                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id={this.props.itinerary._id} >
                                                                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" id={this.props.itinerary._id} />
                                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" id={this.props.itinerary._id} />
                                                                </svg>
                                                            </label>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>}
                        <button onClick={changeViewMore} className="text-light font-weight-bold bg-info text-center align-middle col-12" style={{ minHeight: '30px', border: 'none' }}>{this.state.viewMore ? 'View Less Activities' : 'View Activities'}</button>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newUser: state.user.username,
        newPic: state.user.urlPic,
        newToken: state.user.token
    }
}

const mapDispatchToProps = {
    likeItinerary: itineraryActions.likeItinerary,
    dislikeItinerary: itineraryActions.dislikeItinerary,
    putCommentary: itineraryActions.putCommentary,
    modifyCommentary: itineraryActions.modifyCommentary,
    deleteCommentary: itineraryActions.deleteCommentary
}


export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)