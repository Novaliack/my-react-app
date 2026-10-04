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
            <h2 className="text-3xl font-semibold text-violet-700 dark:text-violet-300 mb-4 border-l-4 border-violet-500 pl-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-colors duration-300">
                My Hobbies
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
                {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className="bg-white/70 dark:bg-[#140b2e]/80 backdrop-blur-sm rounded-xl p-5 text-center shadow-[0_0_20px_rgba(106,17,203,0.12)] dark:shadow-[0_0_20px_rgba(106,17,203,0.2)] border border-purple-300/50 dark:border-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-400/70 dark:hover:border-purple-400/50"
                    >
                        <span className="block text-3xl mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">{hobby.emoji}</span>
                        <h3 className="text-violet-700 dark:text-violet-300 font-semibold mb-1 text-lg">
                            {hobby.name}
                        </h3>
                        <p className="text-sm text-purple-800/80 dark:text-purple-200/80">{hobby.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hobbies