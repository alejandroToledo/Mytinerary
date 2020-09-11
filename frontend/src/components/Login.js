import React, { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import swal from 'sweetalert';
import { GoogleLogin } from 'react-google-login'


const Login = (props) => {

    const [user, setUser] = useState({
        username: '', password: ''
    })
    const readInfo = e => {
        const name = e.target.id
        const value = e.target.value
        setUser({
            ...user,
            [name]: value
        })
    }
    const sendInfo = async e => {
        e.preventDefault()
        if (user.username === '' || user.password === '') {
            alert('completar todos los campos')
        } else {
            console.log(user)
            props.logUser(user)
            swal("Thanks for sign up!", "Enjoy the best itineraries in our page!", "success");

            setTimeout(function () { props.history.push('/') }, 2000)

        }
    }
    const responseGoogle = async (respuesta) => {
        props.logUser({
            username: respuesta.profileObj.email,
            password: respuesta.profileObj.googleId,
        })
    }
    console.log(props)
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input onChange={readInfo} type="string" id="username" className="form-control" placeholder="Email address" required autoFocus />
                                        <label htmlFor="username">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input onChange={readInfo} type="password" id="password" className="form-control" placeholder="Password" required />
                                        <label htmlFor="password">Password</label>
                                    </div>

                                    <button onClick={sendInfo} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    <hr className="my-4" />
                                    <GoogleLogin
                                        clientId="357002458803-nqeoikfl3g6e159jmefpisck7uotql2q.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        className="mx-auto col-8 display-2"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    logUser: userActions.logUser
}
export default connect(null, mapDispatchToProps)(Login)