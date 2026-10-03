function Header({ darkMode, onToggleDarkMode }){
    return(
        <header className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center px-6 pt-10 pb-6 shadow-md relative">
            <button
                onClick={onToggleDarkMode}
                aria-label="Toggle dark mode"
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
                {darkMode ? '☀️' : '🌙'}
            </button>

            <h1 className="text-4xl font-bold mb-4 tracking-wide">
                Hi, I'm Jandyll 👋
            </h1>
            <nav>
                <ul className="flex justify-center gap-6 flex-wrap list-none">
                    <li>
                        <a href="#about" className="text-white font-medium px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/20">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#hobbies" className="text-white font-medium px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/20">
                            Hobbies
                        </a>
                    </li>
                    <li>
                        <a href="#favorites" className="text-white font-medium px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/20">
                            Favorites
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white font-medium px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/20">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header