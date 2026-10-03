import { useState, useEffect } from 'react'
import Header from './Header.jsx'
import About from './About.jsx'
import Hobbies from './Hobbies.jsx'
import Favorites from './Favorites.jsx'
import Footer from './Footer.jsx'

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return(
        <>
            <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(prev => !prev)} />
            <main className="flex-1 w-full px-8 py-10 flex flex-col gap-10 transition-colors duration-300">
                <About />
                <Hobbies />
                <Favorites />
            </main>
            <Footer />
        </>
    );
}

export default App