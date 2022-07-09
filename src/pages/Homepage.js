import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import headerImage from "../components/background/headerImage.jpg";

export default function Homepage() {
    return <div className='wrapper'>
        <Header title="Welcome to my website" background={headerImage}/>
        <Content />
        <Footer background= {headerImage} />
    </div>
}

