import './Hobbies.css'

const hobbies = [
    { emoji: "📚", name: "Reading", desc: "Sci-fi and fantasy novels" },
    { emoji: "🎮", name: "Gaming", desc: "RPGs and Tactical Shooters" },
    { emoji: "🎵", name: "Listening to Music", desc: "Chill n Vibe" },
    { emoji: "🏀", name: "Playing Sports", desc: "Basketball, Badminton, Table Tennis, etc."},
    { emoji: "🎥", name: "Watching Documentaries", desc: "True Crime" },
    { emoji: "🚲", name: "Cycling", desc: "Pedal around to relax the mind" }
];

function Hobbies(){
    return(
        <section id="hobbies" className="hobbies">
            <h2 className="section-title">My Hobbies</h2>
            <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                    <div className="hobby-card" key={index}>
                        <span className="hobby-emoji">{hobby.emoji}</span>
                        <h3>{hobby.name}</h3>
                        <p>{hobby.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hobbies