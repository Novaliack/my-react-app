const favorites = {
    Movies: ["Avengers Endgame", "Spirited Away", "Star Wars: Episode III - Revenge of the Sith"],
    Books: ["Frankenstein", "The Adventures of Sherlock Holmes", "The Odyssey"],
    Foods: ["Mango Float", "Carbonara", "Pizza"],
    Music: ["R&B", "Indie Pop", "Classical"]
};

function Favorites(){
    return(
        <section id="favorites">
            <h2 className="text-3xl font-semibold text-violet-300 mb-4 border-l-4 border-violet-500 pl-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                Favorites
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                {Object.entries(favorites).map(([category, items]) => (
                    <div
                        key={category}
                        className="bg-[#140b2e]/80 backdrop-blur-sm rounded-xl p-5 shadow-[0_0_20px_rgba(106,17,203,0.2)] border-t-4 border-violet-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                    >
                        <h3 className="text-violet-300 font-semibold mb-3 text-lg">
                            {category}
                        </h3>
                        <ul className="list-none">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="py-1.5 border-b border-dashed border-purple-500/20 text-sm last:border-none text-purple-100"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Favorites