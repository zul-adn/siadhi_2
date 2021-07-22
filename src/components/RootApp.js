import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Admionistrator from './pages/Admionistrator';

import './style/style.css';

export const RootApp = (props) => {

    const sideBarEvent = () => {
        document.querySelector(".sidebar").classList.toggle('open')
        menuBtnChange()
    }

    const menuBtnChange = () => {
        if ( document.querySelector(".sidebar").classList.contains("open")) {
            document.querySelector("#btn").classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
            document.querySelector("#btn").classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }


    return (
        <HashRouter>
            <div>
                <div className="sidebar">
                    <div className="logo-details">
                        <i className='bx bxl-c-plus-plus icon'></i>
                        <div className="logo_name">CodingLab</div>
                        <i className='bx bx-menu' id="btn" onClick={sideBarEvent}></i>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <i className='bx bx-search' ></i>
                            <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                        </li>
                        <li>
                            <a href="#">
                                <NavLink to="/administrator">
                                    <i className='bx bx-grid-alt'></i>
                                    <span className="links_name">Dashboard</span>
                                </NavLink>
                            </a>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-user' ></i>
                                <span className="links_name">User</span>
                            </a>
                            <span className="tooltip">User</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-chat' ></i>
                                <span className="links_name">Messages</span>
                            </a>
                            <span className="tooltip">Messages</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-pie-chart-alt-2' ></i>
                                <span className="links_name">Analytics</span>
                            </a>
                            <span className="tooltip">Analytics</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-folder' ></i>
                                <span className="links_name">File Manager</span>
                            </a>
                            <span className="tooltip">Files</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-cart-alt' ></i>
                                <span className="links_name">Order</span>
                            </a>
                            <span className="tooltip">Order</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-heart' ></i>
                                <span className="links_name">Saved</span>
                            </a>
                            <span className="tooltip">Saved</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-cog' ></i>
                                <span className="links_name">Setting</span>
                            </a>
                            <span className="tooltip">Setting</span>
                        </li>
                        <li className="profile">
                            <div className="profile-details">
                                <img src="profile.jpg" alt="profileImg" />
                                <div className="name_job">
                                    <div className="name">Prem Shahi</div>
                                    <div className="job">Web designer</div>
                                </div>
                            </div>
                            <i className='bx bx-log-out' id="log_out" ></i>
                        </li>
                    </ul>
                </div>
                <section className="home-section">
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/administrator" component={Admionistrator} />
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
