import AboutContent from "../components/AboutContent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutMyselfImage from "../components/background/aboutMyselfImage.jpg"; 

export default function AboutMyself() {
    return <div className='wrapper'>
        <Header title='ABOUT MYSELF' background={aboutMyselfImage}/>
        <AboutContent />
        <Footer background={aboutMyselfImage}/>
    </div>
}