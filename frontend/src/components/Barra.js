import React from "react"
import logo from "../images/logo.png"
import user from "../images/profile-user.png"

class Barra extends React.Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-dark navbar-expand-sm" id="barra" >

                    <a class="navbar-brand d-flex " href="#" id="logo">
                        <img src={logo} width="80" height="80" id="icono" class="d-inline-block align-top" alt="" />
                        <p class="text-dark d-flex mt-auto mb-auto">Mytinerary</p>
                    </a>
                    <div class="d-flex justify-content-end ml-auto">
                        <button class="navbar-toggler navbar-toggler-left d-flex-sm justify-content-end" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            </span>
                        </button>
                        <div>
                            <div class="dropdown d-flex justify-content-end text-center ">
                                <button class="btn dropdown-toggle d-block d-sm-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user} width="30" height="30"></img>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Sign in</a>
                                    <a class="dropdown-item" href="#">Log out</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse d-flex-sm justify-content-end text-center" id="navbarTogglerDemo01">
                        <div class="navbar-nav ">
                            <a class="nav-item nav-link text-dark active" href="#">Inicio</a>
                            <a class="nav-item nav-link text-dark" href="#">Nosotros</a>
                            <a class="nav-item nav-link text-dark" href="#">Vuelos</a>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle d-none d-sm-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={user} width="30" height="30"></img>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Sign in</a>
                                <a class="dropdown-item" href="#">Log out</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Barra