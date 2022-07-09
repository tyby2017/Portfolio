import Header from "../components/Header";
import Footer from "../components/Footer";
import HireMeContent from "../components/HireMeContent";

export default function HireMe() {
    return <div className='wrapper'>
        <Header title='HIRE ME' background='Coders-For-Hire.jpg'/>
        <HireMeContent />
        <Footer background='Coders-For-Hire.jpg'/>
    </div>
}