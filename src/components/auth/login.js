import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Login } from './../../store/app/action';

import './login.css'

export const LoginComp = ({ Login }) => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const loogin = () => {
        const body = {
            username,
            password
        }
        Login(body)
    }

    return (
        <div className="container">
         
                <div className="card">
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/id/8/84/Lambang_Baintelkam_Polri.png" />
                        <h3>Analisis Data Harian</h3>
                        <h3>Polres Singkawang</h3>
                    </div>
                    <div className="form">
                        <Fragment>
                            <div className="form-group">
                                <label htmlFor="example2">Username</label>
                                <input type="text" placeholder="Masukan username" onChange={e => setUsername(e.target.value)} className="form-control form-control-md" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="example2">Password</label>
                                <input type="password" placeholder="Masukan password" onChange={e => setPassword(e.target.value)} className="form-control form-control-md" required />
                            </div>
                            <button onClick={loogin} className="btn btn-primary">Login</button>
                        </Fragment>

                    </div>
                </div>
            
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas_pdf: app.datas_pdf,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Login: payload => dispatch(Login(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComp)
