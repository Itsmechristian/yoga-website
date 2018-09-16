import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './common.css';

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }
        
        this.navbarHandler = this.navbarHandler.bind(this)
    }

    navbarHandler() {
        if(!this.state.isOpen) {
            window.scroll(0, 0)
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'scroll';
        }
        this.setState({ 
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;

        return (
            <React.Fragment>
            <div className="navbar">
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="logo" height="60px" width="60px"/>
                    </div>
                    <div className="right" onClick={e => this.navbarHandler()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <CSSTransition in={isOpen} timeout={500} classNames="open">
            <div className={'overlay'}>
                <div className="exMark" onClick={e => this.navbarHandler()}>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                    <li><Link to="/trainer">Trainer</Link></li>
                    <li><Link to="/timetable">Timetable</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            </CSSTransition>
            </React.Fragment>
        )
    }
}

export default Navbar;