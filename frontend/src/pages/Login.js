import React from "react"
import Bar from "../components/Bar.js"
import Login from "../components/Login.js"
import "../styles/stylesSign.css"

const LogIn = (props) => {
    return (
        <div id="fondoLogueo">
            <Bar />
            <Login {...props} />
        </div>
    )
}

export default LogIn