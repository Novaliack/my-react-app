import './Favorites.css'

const favorites = {
    Movies: ["Avengers Endgame", "Spirited Away", "Star Wars: Episode III - Revenge of the Sith"],
    Books: ["Frankenstein", "The Adventures of Sherlock Holmes", "The Odyssey"],
    Foods: ["Mango Float", "Carbonara", "Pizza"],
    Music: ["R&B", "Indie Pop", "Classical"]
};

function Favorites(){
    return(
        <section id="favorites" className="favorites">
            <h2 className="section-title">Favorites</h2>
            <div className="favorites-grid">
                {Object.entries(favorites).map(([category, items]) => (
                    <div className="favorite-card" key={category}>
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Favorites