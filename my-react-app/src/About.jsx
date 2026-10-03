function About(){
    return(
        <section id="about">
            <h2 className="text-3xl font-semibold text-violet-300 mb-4 border-l-4 border-violet-500 pl-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                About Me
            </h2>
            <div className="bg-[#140b2e]/80 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_25px_rgba(106,17,203,0.25)] border border-purple-500/20 transition-colors duration-300">
                <p className="mb-4 text-purple-100">
                    I'm a passionate student who loves learning new things.
                    I enjoy turning ideas into interactive experiences and I'm
                    currently exploring React and modern JavaScript.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
                    <li className="bg-purple-900/30 border border-purple-500/20 px-4 py-3 rounded-lg text-sm">
                        <strong className="text-violet-300">📍 Location:</strong> Cebu, Philippines
                    </li>
                    <li className="bg-purple-900/30 border border-purple-500/20 px-4 py-3 rounded-lg text-sm">
                        <strong className="text-violet-300">🎓 Education:</strong> BS Information Technology
                    </li>
                    <li className="bg-purple-900/30 border border-purple-500/20 px-4 py-3 rounded-lg text-sm">
                        <strong className="text-violet-300">💼 Role:</strong> Front-End Developer (learning)
                    </li>
                    <li className="bg-purple-900/30 border border-purple-500/20 px-4 py-3 rounded-lg text-sm">
                        <strong className="text-violet-300">🎯 Goal:</strong> Build up my portfolio
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About