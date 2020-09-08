import React from "react"
import Bar from "../components/Bar.js"
import Create from "../components/Create.js"
import "../styles/stylesSign.css"

const SignIn = (props) => {
    console.log('props de signin')
    console.log(props)
    return (
        <div id="fondoLogueo">
            <Bar />
            <Create {...props} />
        </div>
    )
}

export default SignIn