const favorites = {
    Movies: ["Avengers Endgame", "Spirited Away", "Star Wars: Episode III - Revenge of the Sith"],
    Books: ["Frankenstein", "The Adventures of Sherlock Holmes", "The Odyssey"],
    Foods: ["Mango Float", "Carbonara", "Pizza"],
    Music: ["R&B", "Indie Pop", "Classical"]
};

function Favorites(){
    return(
        <section id="favorites">
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-l-4 border-purple-600 pl-3">
                Favorites
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                {Object.entries(favorites).map(([category, items]) => (
                    <div
                        key={category}
                        className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md border-t-4 border-blue-500 transition-colors duration-300"
                    >
                        <h3 className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-lg">
                            {category}
                        </h3>
                        <ul className="list-none">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="py-1.5 border-b border-dashed border-gray-200 dark:border-slate-600 text-sm last:border-none"
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