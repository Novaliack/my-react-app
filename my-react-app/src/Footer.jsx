function Footer(){
    return(
        <footer className="bg-[#0a0618] border-t border-purple-500/20 text-purple-200 text-center px-6 py-6 mt-8 text-sm transition-colors duration-300">
            <p>&copy; {new Date().getFullYear()} Jandyll's About Me Page</p>
            <p className="mt-1 text-purple-300/60 text-xs">Built with React + Tailwind</p>
        </footer>
    );
}

export default Footer