import './Header.css'

function Header(){
    return(
        <header className="header">
            <h1 className="header-title">Hi, I'm Jandyll 👋</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#favorites">Favorites</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header