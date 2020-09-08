import React from 'react'
import { connect } from 'react-redux'
import Bar from '../components/Bar.js'

const MyAccount = (props) => {
    return (
        <>
            <Bar />

            <div className="mx-auto">
                <img src={props.newPic} alt={props.newUsername}></img>
                <h2>{props.newUsername}</h2>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newUsername: state.user.username,
        newPic: state.user.urlPic
    }
}

export default connect(mapStateToProps)(MyAccount)