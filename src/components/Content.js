import { Link } from "react-router-dom";
import "./content.css";

export default function Content() {
    return <div className='container'>
            <Link className="link" to='/about'><img src="aboutMyselfImage.jpg" />
            <h2 className='h2'>ABOUT MYSELF</h2>
            </Link>
            <Link  className="link" to='portfolio'><img src='projectsImage.jpg'></img>
            <h2 className='h2'>PROJECTS</h2>
            </Link>  
            <Link  className="link" to='hire-me'><img src='Coders-For-Hire.jpg'></img>
            <h2 className='h2'>HIRE ME</h2>
            </Link>
            <Link  className="link" to='contact'><img src='contact.jpg'></img>
            <h2 className='h2'>CONTACT</h2>
            </Link>

    </div>

}