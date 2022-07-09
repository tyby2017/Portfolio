import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(props) {
    return <div className='footer' style={{backgroundImage:`url(${props.background})`}}>
        <div className='overlay-footer'>
            <nav className='nav-bar-footer'>
            <div className='flex'>
                <Link to="/">HOME</Link>
                <Link to="/About">ABOUT</Link>
                <Link to="/Portfolio">PORTFOLIO</Link>
                <Link to="/Contact">CONTACT</Link>
            </div>
            </nav>
        </div>
        </div>
}