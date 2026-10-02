import Header from './Header.jsx'
import About from './About.jsx'
import Hobbies from './Hobbies.jsx'
import Favorites from './Favorites.jsx'
import Footer from './Footer.jsx'

function App() {
    return(
        <>
            <Header />
            <main className="app-main">
                <About />
                <Hobbies />
                <Favorites />
            </main>
            <Footer />
        </>
    );
}

export default App