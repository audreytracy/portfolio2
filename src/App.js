import logo from './logo.svg';
import './index.css';
import NavbarComponent from './components/NavbarComponent';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Documents from './components/Documents';
import Projects from './components/Projects';
import NDVI from './components/projects/NDVI';
import Experience from './components/Experience';



function App() {
    return (
        <BrowserRouter basename="">
            <NavbarComponent />
            <Routes path="/" element={<Home />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/ndvi" element={<NDVI />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
