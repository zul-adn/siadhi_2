import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Pancagatra from './pages/Pancagatra';
import Covid from './pages/Covid';

import './style/style.css';

export const RootApp = (props) => {

    const sideBarEvent = () => {
        document.querySelector(".sidebar").classList.toggle('open')
        menuBtnChange()
    }

    const menuBtnChange = () => {
        if (document.querySelector(".sidebar").classList.contains("open")) {
            document.querySelector("#btn").classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
            document.querySelector("#btn").classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }


    return (
        <HashRouter>
            <div>
                <div className="sidebar open">
                    {/* <div className="logo-details">
                        <i className='bx bxl-c-plus-plus icon'></i>
                        <div className="logo_name">CodingLab</div>
                        <i className='bx bx-menu' id="btn" onClick={sideBarEvent}></i>
                    </div> */}
                    <ul className="nav-list">
                        <li>
                            <a href="#">
                                <NavLink to="/">
                                    <i className='bx bx-grid-alt'></i>
                                    <span className="links_name">Trigatra</span>
                                </NavLink>
                            </a>
                            <span className="tooltip">Trigatra</span>
                        </li>
                        <li>
                            <a href="#">
                                <NavLink to="/pancagatra">
                                    <i className='bx bx-user' ></i>
                                    <span className="links_name">Pancagatra</span>
                                </NavLink>
                            </a>
                            <span className="tooltip">Pancagatra</span>
                        </li>

                        <li>
                            <a href="#">
                                <NavLink to="/pancagatra">
                                    <i className='bx bx-calendar' ></i>
                                    <span className="links_name">Kalender</span>
                                </NavLink>
                            </a>
                            <span className="tooltip">Kalender</span>
                        </li>                        <li>
                            <a href="#">
                                <NavLink to="/covid">
                                    <i className='bx bxs-virus' ></i>
                                    <span className="links_name">Covid 19</span>
                                </NavLink>
                            </a>
                            <span className="tooltip">Covid 19</span>
                        </li>

                    </ul>
                </div>
                <section className="home-section">
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/pancagatra" component={Pancagatra} />
                    <Route path="/covid" component={Covid} />
                </section>
            </div>
        </HashRouter>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp)
