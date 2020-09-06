import React, { useState, useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"


const Create = (props) => {

    const [newUser, setNewUser] = useState({
        urlPic: '',
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        country: '',
    })
    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
    }, [])

    const getCountries = async () => {
        const response = await axios('https://restcountries.eu/rest/v2/all')
        const list = response.data
        setCountries(list)
    }

    const readInfo = e => {
        const name = e.target.id
        const value = e.target.value
        setNewUser({
            ...newUser,
            [name]: value
        })
    }
    const sendInfo = async e => {
        e.preventDefault()
        if (newUser.urlPic === '' || newUser.username === '' || newUser.password === ''
            || newUser.email === '' || newUser.firstName === '' || newUser.lastName === '' || newUser.country === '') {
            alert('carga bien')
        } else {
            console.log(newUser)
            props.createAccount(newUser)

        }
    }


    return (
        <>
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body" >
                                    <h5 className="card-title text-center font-weight-bold">Create Account</h5>
                                    <form className="form-signin" >
                                        <div className="form-label-group">
                                            <input type="text" onChange={readInfo} id="urlPic" className="form-control" placeholder="Profile Image" required autoFocus />
                                            <label htmlFor="urlPic">Profile Pic</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" onChange={readInfo} id="username" className="form-control" placeholder="Username" required />
                                            <label htmlFor="username">Username</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" onChange={readInfo} id="password" className="form-control" placeholder="Password" required />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="email" onChange={readInfo} id="email" className="form-control" placeholder="Email address" required autoFocus />
                                            <label htmlFor="email">Email address</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" onChange={readInfo} id="firstName" className="form-control" placeholder="Firstname" required />
                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" onChange={readInfo} id="lastName" className="form-control" placeholder="Lastname" required />
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                        <div className="form-label-group" id="select">
                                            <select type="text" onChange={readInfo} id="country" className="form-control" placeholder="Country" required >
                                                <option>Choose your country</option>
                                                {countries.map(country => {
                                                    return <option key={`${country.name}`} value={`${country.name}`}>{country.name}</option>
                                                })}
                                            </select>
                                        </div>

                                        <button onClick={sendInfo} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</button>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}



const mapDispatchToProps = {
    createAccount: userActions.createAccount
}

export default connect(null, mapDispatchToProps)(Create)