import React from "react"
import axios from "axios"

class Create extends React.Component {
    state = {
        urlPic: '',
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        country: '',
        countries: []
    }
    async componentDidMount() {
        const response = await axios('https://restcountries.eu/rest/v2/all')
        const lista = response.data
        console.log(lista)
        this.setState({
            countries: lista
        })
    }

    readInfo = e => {
        const name = e.target.id
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    sendInfo = e => {
        e.preventDefault()
        const user = {
            urlPic: this.state.urlPic,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            country: this.state.country,
        }
        console.log(user)
    }
    render() {
        console.log(this.state.countries)
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
                                                <input type="text" onChange={this.readInfo} id="urlPic" className="form-control" placeholder="Profile Image" required autofocus />
                                                <label for="urlPic">Profile Pic</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="text" onChange={this.readInfo} id="username" className="form-control" placeholder="Username" required />
                                                <label for="username">Username</label>
                                            </div>

                                            <div className="form-label-group">
                                                <input type="password" onChange={this.readInfo} id="password" className="form-control" placeholder="Password" required />
                                                <label for="password">Password</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="email" onChange={this.readInfo} id="email" className="form-control" placeholder="Email address" required autofocus />
                                                <label for="email">Email address</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="text" onChange={this.readInfo} id="firstname" className="form-control" placeholder="Firstname" required />
                                                <label for="firstname">First Name</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="text" onChange={this.readInfo} id="lastname" className="form-control" placeholder="Lastname" required />
                                                <label for="lastname">Last Name</label>
                                            </div>
                                            <div className="form-label-group">
                                                <select type="text" onChange={this.readInfo} id="country" className="form-control" placeholder="Country" required >
                                                    <option>Choose your country</option>
                                                    {this.state.countries.map(country => {
                                                        return <option>{country.name}</option>
                                                    })}
                                                </select>
                                            </div>

                                            <button onClick={this.sendInfo} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</button>
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
}

export default Create