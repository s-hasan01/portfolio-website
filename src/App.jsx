import { useState } from 'react';
import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx";
import About from "./components/about.jsx";
import Technologies from "./components/technologies.jsx";
import Experience from "./components/experience.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import { TbSun, TbMoon } from "react-icons/tb";

const App = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    // Function to toggle between light and dark mode
    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div
            className={`overflow-x-hidden antialiased selection:bg-cyan-900 transition-colors duration-500 ${isLightMode ? 'bg-white text-neutral-900' : 'text-neutral-300'}`}>
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div
                    className={`absolute top-0 z-[-2] h-screen w-screen transition-all duration-500 
                    ${isLightMode ? 'bg-white' : 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'}`}>
                </div>
            </div>
            <div className='container mx-auto px-8'>
                <Navbar />
                <div className='m-3 flex'>
                    <a className="relative">
                        {/* Sun Icon */}
                        <TbSun
                            className={`absolute transition-transform duration-300 size-6 transform cursor-pointer
                                ${isLightMode ? 'rotate-0 scale-100 duration-300' : 'rotate-180 scale-0 invisible duration-300'}`}
                            onClick={toggleTheme}
                        />
                        {/* Moon Icon */}
                        <TbMoon
                            className={`absolute transition-transform duration-300 size-6 transform cursor-pointer
                                ${isLightMode ? 'rotate-180 scale-0 invisible duration-300' : 'rotate-0 scale-100 duration-300'}`}
                            onClick={toggleTheme}
                        />
                    </a>
                </div>
                <Main />
                <About />
                <Technologies />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
