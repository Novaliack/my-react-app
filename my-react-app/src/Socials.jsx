const socials = [
    { label: "GitHub",   url: "https://github.com/Novaliack",       icon: "🐙" },
    { label: "Email",    url: "mailto:jandyllraygodoy@gmail.com",                 icon: "✉️" },
    { label: "Facebook", url: "https://facebook.com/jandyllray.godoy",      icon: "📘" }
];

function Socials(){
    return(
        <section id="socials">
            <h2 className="text-3xl font-semibold text-violet-700 dark:text-violet-300 mb-4 border-l-4 border-violet-500 pl-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-colors duration-300">
                Find Me Online
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socials.map(s => (
                    <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/70 dark:bg-[#140b2e]/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-[0_0_20px_rgba(106,17,203,0.12)] dark:shadow-[0_0_20px_rgba(106,17,203,0.2)] border border-purple-300/50 dark:border-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] no-underline text-purple-900 dark:text-purple-100"
                    >
                        <span className="block text-3xl mb-2">{s.icon}</span>
                        <span className="font-medium">{s.label}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Socials