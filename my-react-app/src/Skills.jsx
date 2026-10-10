const skills = [
    { name: "React",         level: 70 },
    { name: "JavaScript",    level: 75 },
    { name: "HTML & CSS",    level: 85 },
    { name: "Java",  level: 80 },
    { name: "C",  level: 60 },
    { name: "Git & GitHub",  level: 60 },
    { name: "UI/UX Design",  level: 55 }
];

function Skills(){
    return(
        <section id="skills">
            <h2 className="text-3xl font-semibold text-violet-700 dark:text-violet-300 mb-4 border-l-4 border-violet-500 pl-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-colors duration-300">
                Skills
            </h2>
            <div className="bg-white/70 dark:bg-[#140b2e]/80 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_25px_rgba(106,17,203,0.15)] dark:shadow-[0_0_25px_rgba(106,17,203,0.25)] border border-purple-300/50 dark:border-purple-500/20 flex flex-col gap-4 transition-colors duration-300">
                {skills.map(s => (
                    <div key={s.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                            <span className="font-medium text-purple-900 dark:text-purple-100">{s.name}</span>
                            <span className="text-purple-700 dark:text-purple-300">{s.level}%</span>
                        </div>
                        <div className="h-2 bg-purple-200/70 dark:bg-purple-900/50 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000"
                                style={{ width: `${s.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills