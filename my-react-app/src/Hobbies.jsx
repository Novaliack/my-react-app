const hobbies = [
    { emoji: "📚", name: "Reading", desc: "Sci-fi and fantasy novels" },
    { emoji: "🎮", name: "Gaming", desc: "RPGs and Tactical Shooters" },
    { emoji: "🎵", name: "Listening to Music", desc: "Chill n Vibe" },
    { emoji: "🏀", name: "Playing Sports", desc: "Basketball, Badminton, Table Tennis, etc." },
    { emoji: "🎥", name: "Watching Documentaries", desc: "True Crime" },
    { emoji: "🚲", name: "Cycling", desc: "Pedal around to relax the mind" }
];

function Hobbies(){
    return(
        <section id="hobbies">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-l-4 border-purple-600 pl-3">
                My Hobbies
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
                {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-5 text-center shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <span className="block text-3xl mb-2">{hobby.emoji}</span>
                        <h3 className="text-purple-700 font-semibold mb-1 text-lg">
                            {hobby.name}
                        </h3>
                        <p className="text-sm text-gray-600">{hobby.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hobbies