import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Head/Header";
import MyWork from "../MyWork/MyWork";
import Skill from "../Skills/Skill";
const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Skill />
            <MyWork />
            <Contact />
            <Footer />
        </>
    )
}

export default Home