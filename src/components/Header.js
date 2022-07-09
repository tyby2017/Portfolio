import "./Header.css";
import {Link} from "react-router-dom";
import {FaTimes, FaBars} from 'react-icons/fa';
import {React, useState } from 'react';

export default function Header(props) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return <div className='header' style={{backgroundImage:`url(${props.background})`}}>
        <div className='overlay'>
            <div className='h1-and-navbar'>
                <h1>Hi, I am Tiberiu</h1>
                <nav className={click ? 'nav-bar active' : 'nav-bar'}>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/contact">CONTACT</Link>
                </nav>
                <div className='nav-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <div className='welcome-div'>
            <h1 className='welcome'>{props.title}</h1>
            </div>
        </div>
    </div>
}
    