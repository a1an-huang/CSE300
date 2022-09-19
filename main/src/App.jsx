import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Nav />
            <Header />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Router>
    );
}

export default App;
