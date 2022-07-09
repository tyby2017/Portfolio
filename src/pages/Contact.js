import Header from "../components/Header";
import contact from '../components/background/contact.jpg';
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";

export default function Contact() {
    return <div className='wrapper'>
        <Header title='CONTACT' background={contact} />
        <ContactContent />
        <Footer background={contact} />
    </div>
}