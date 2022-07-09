import './contact-content.css';

export default function ContactContent() {
    return <div className='contact-container'>
                <ul>
                    <li>Email: tiberiu.miinea@gmail.com</li>
                    <li>Phone nummber: 0737024273</li>
                </ul>
                <p>or you can check my profile on</p>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/tiberiu-cornel-miinea-354795140' target='_blank'><img src='Linkedin.png'/></a>
                    <a href='https://github.com/tyby2017' target='_blank'><img src='github.png'/></a>
                </div>
    </div>
}