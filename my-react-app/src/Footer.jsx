function Footer(){
    return(
        <footer className="bg-slate-700 dark:bg-slate-950 text-slate-100 text-center px-6 py-6 mt-8 text-sm transition-colors duration-300">
            <p>&copy; {new Date().getFullYear()} Jandyll's About Me Page</p>
            <p className="mt-1 text-slate-400 text-xs">Built with React + Tailwind</p>
        </footer>
    );
}

export default Footer