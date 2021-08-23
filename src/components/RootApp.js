import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Login from './auth/login';
import Main from './Main';
import './style/style.css';
import { cekLogin } from './../store/app/action';

export const RootApp = ({isLogin, cekLogin}) => {

    React.useEffect(() => {
        cekLogin()
    }, [])

    return (
       isLogin ? <Main /> : <Login />
    )
}

const mapStateToProps = ({ app }) => {
    return {
       isLogin: app.isLogin,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        cekLogin: () => dispatch(cekLogin()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp)
