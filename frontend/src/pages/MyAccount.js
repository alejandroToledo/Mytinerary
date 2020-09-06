import React from 'react'
import { connect } from 'react-redux'
import Bar from '../components/Bar.js'

const MyAccount = (props) => {
    return (
        <>
            <Bar />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newUser: state.user.firstName,
        newPic: state.user.urlPic
    }
}

export default connect(mapStateToProps)(MyAccount)