import './Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Jandyll's About Me Page</p>
            <p className="footer-sub">Built with React</p>
        </footer>
    );
}

export default Footer