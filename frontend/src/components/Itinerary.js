import React from 'react'
import Activities from './Activities.js';
import '../styles/stylesComments.css'
import { connect } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions.js';
import { NavLink } from "react-router-dom"
import swal from 'sweetalert';
import userActions from '../redux/actions/userActions.js';

class Itinerary extends React.Component {
    state = {
        Itinerary: {},
        viewMore: false,
        commentary: '',
        flag: false,
        checked: false,
        modify: false,
        idComentario: ''
    }
    async componentDidMount() {
    }

    render() {
        const changeViewMore = () => {
            this.setState({ viewMore: !this.state.viewMore })
        }
        const likeOrDislikeItinerary = (e) => {
            var id = e.target.id
            var check = e.target
            if (check.checked === true) {
                this.props.likeItinerary(id, this.props.newToken)
                this.props.itinerary.rating = this.props.itinerary.rating + 1
            } else {
                this.props.dislikeItinerary(id, this.props.newToken)
                this.props.itinerary.rating = this.props.itinerary.rating - 1
            }
            this.setState({
                flag: !this.state.flag
            })
        }
        const readCommentary = (e) => {
            const commentary = e.target.value
            const idComentario = e.target.id
            this.setState({
                commentary,
                idComentario
            })
        }

        const sendCommentary = async (e) => {
            let commentId = 0;
            if (this.props.itinerary.comments.length !== 0) {
                this.props.itinerary.comments.map(comment => {
                    if (comment.idComment > commentId) commentId = comment.idComment
                })
            }
            var commentary = this.state.commentary
            if (commentary === '') {
                swal("You can't send empty comments", "", "error");
            }
            await this.props.putCommentary(this.props.itinerary._id, commentary, this.props.newToken, commentId + 1)
        }

        const deleteCommentary = async (e) => {
            console.log(e.target.id)
            const id = e.target.id
            await this.props.deleteCommentary(id, this.props.itinerary._id)
        }

        const modifyCommentary = async () => {
            await this.props.modifyCommentary(this.state.idComentario, this.state.commentary, this.props.itinerary._id)
        }
        const openCommentaryEdit = (e) => {
            this.setState({
                modify: !this.state.modify
            })

        }

        return (
            <>
                <div className=" d-flex justify-content-center">
                    <div className=" bs-example mt-5 col-12 col-sm-10 card pl-0 pr-0">
                        <div className=" d-flex px-4 py-2">
                            <div className="col-4">
                                <div style={{ backgroundImage: `url(${this.props.itinerary.profilePic})`, backgroundSize: 'cover', width: '12vw', height: '26vh', borderRadius: '100px', backgroundPosition: '0 15%' }} className="userItinerary"></div>

                            </div>
                            <div className="d-flex flex-column col-8">
                                <h5 className="text-center titulo w-100">{this.props.itinerary.title}</h5>
                                <div className="d-flex pl-2 ">
                                    {this.props.newToken && <input type="checkbox" className={`checkbox mr-3 like ${this.props.itinerary._id}`} id={`${this.props.itinerary._id}`} onChange={likeOrDislikeItinerary} checked={this.props.favItineraries.includes(this.props.itinerary._id)} />}

                                    <label htmlFor={`${this.props.itinerary._id}`} className="mr-3 like">
                                        <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                                                <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" />
                                                <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                                                <g id="grp7" opacity="0" transform="translate(7 6)">
                                                    <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                                    <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                                                </g>

                                                <g id="grp6" opacity="0" transform="translate(0 28)">
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                                                </g>

                                                <g id="grp3" opacity="0" transform="translate(52 28)">
                                                    <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                                    <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                                                </g>

                                                <g id="grp2" opacity="0" transform="translate(44 6)">
                                                    <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                                                </g>

                                                <g id="grp5" opacity="0" transform="translate(14 50)">
                                                    <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                                                </g>

                                                <g id="grp4" opacity="0" transform="translate(35 50)">
                                                    <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                                    <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                                                </g>

                                                <g id="grp1" opacity="0" transform="translate(24)">
                                                    <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                                    <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                                                </g>
                                            </g>
                                        </svg>
                                        {this.props.itinerary.rating} </label>
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
                                                        <div style={{ minHeight: '250px' }}>

                                                            {this.props.itinerary.comments.map((commentary) => (<div className="post-comment">
                                                                <div className="post-comment align-items ">
                                                                    <img src={commentary.userPic} alt="" className="profile-photo-sm" />
                                                                    <div className="eliminarYmodificar ">
                                                                        {!this.state.modify && <p className="pt-2">{commentary.content}</p>}

                                                                        {this.state.modify && commentary.userPic === this.props.newPic ? <><input placeholder={commentary.content} onChange={readCommentary} id={commentary.idComment}></input><label className="sendComments" onClick={modifyCommentary}  >
                                                                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id={this.props.itinerary._id} >
                                                                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" id={this.props.itinerary._id} />
                                                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" id={this.props.itinerary._id} />
                                                                            </svg>
                                                                        </label> </> : ''}
                                                                        {commentary.userPic === this.props.newPic && <div className="d-inline ml-5 pl-5 pt-2">
                                                                            <label className="mr-3 color" onClick={openCommentaryEdit} htmlFor={commentary.idComment}>Modify </label>
                                                                            <label className="mr-3 color" onClick={deleteCommentary} id={commentary.idComment}>Delete </label>
                                                                        </div>}

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
        newToken: state.user.token,
        favItineraries: state.user.favItineraries
    }
}

const mapDispatchToProps = {
    likeItinerary: userActions.likeItinerary,
    dislikeItinerary: userActions.dislikeItinerary,
    putCommentary: itineraryActions.putCommentary,
    modifyCommentary: itineraryActions.modifyCommentary,
    deleteCommentary: itineraryActions.deleteCommentary
}


export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)