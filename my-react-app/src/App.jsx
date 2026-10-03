import Header from './Header.jsx'
import About from './About.jsx'
import Hobbies from './Hobbies.jsx'
import Favorites from './Favorites.jsx'
import Footer from './Footer.jsx'

function App() {
    return(
        <>
            <Header />
            <main className="flex-1 w-full px-8 py-10 flex flex-col gap-10">
                <About />
                <Hobbies />
                <Favorites />
            </main>
            <Footer />
        </>
    );
}

export default App