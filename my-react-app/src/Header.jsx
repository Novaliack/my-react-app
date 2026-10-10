function Header({ darkMode, onToggleDarkMode }){
    return(
        <header className="relative text-purple-900 dark:text-purple-100 text-center px-6 pt-10 pb-6 overflow-hidden border-b border-purple-400/40 dark:border-purple-500/30 bg-gradient-to-b from-[#e9d5ff] via-[#a78bfa] to-[#7c3aed] dark:from-[#0a0618] dark:via-[#3b0a63] dark:to-[#1a0b3d] shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-colors duration-300">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-violet-400/30 dark:bg-violet-600/30 blur-3xl"></div>
                <div className="absolute -top-16 right-0 w-80 h-80 rounded-full bg-blue-300/30 dark:bg-blue-600/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-fuchsia-400/30 dark:bg-fuchsia-600/20 blur-3xl"></div>
            </div>

            <div
                className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-70 z-0"
                style={{
                    backgroundImage:
                        'radial-gradient(1px 1px at 15% 30%, rgba(255,255,255,0.8), transparent),' +
                        'radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.7), transparent),' +
                        'radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.6), transparent),' +
                        'radial-gradient(1px 1px at 35% 80%, rgba(255,255,255,0.6), transparent),' +
                        'radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.5), transparent)'
                }}
            />

            <button
                onClick={onToggleDarkMode}
                aria-label="Toggle dark mode"
                className="absolute top-4 right-4 z-20 cursor-pointer bg-white/40 dark:bg-purple-500/20 hover:bg-white/60 dark:hover:bg-purple-500/40 text-purple-900 dark:text-purple-100 text-xl w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border border-purple-700/30 dark:border-purple-400/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]"
            >
                {darkMode ? '☀️' : '🌙'}
            </button>

            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4 tracking-wide bg-gradient-to-r from-purple-800 via-fuchsia-700 to-indigo-800 dark:from-violet-300 dark:via-fuchsia-200 dark:to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    Hi, I'm Jandyll 👋
                </h1>
                <nav>
                    <ul className="flex justify-center gap-6 flex-wrap list-none">
                        <li>
                            <a href="#about" className="text-purple-900 dark:text-purple-200 font-medium px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/40 dark:hover:bg-purple-500/30 hover:text-purple-950 dark:hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#hobbies" className="text-purple-900 dark:text-purple-200 font-medium px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/40 dark:hover:bg-purple-500/30 hover:text-purple-950 dark:hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                                Hobbies
                            </a>
                        </li>
                        <li>
                            <a href="#favorites" className="text-purple-900 dark:text-purple-200 font-medium px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/40 dark:hover:bg-purple-500/30 hover:text-purple-950 dark:hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                                Favorites
                            </a>
                        </li>
                        <li>
                            <a href="#socials" className="text-purple-900 dark:text-purple-200 font-medium px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/40 dark:hover:bg-purple-500/30 hover:text-purple-950 dark:hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                                Socials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-purple-900 dark:text-purple-200 font-medium px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/40 dark:hover:bg-purple-500/30 hover:text-purple-950 dark:hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header