function About(){
    return(
        <section id="about">
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-l-4 border-purple-600 pl-3">
                About Me
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md transition-colors duration-300">
                <p className="mb-4 text-gray-700 dark:text-slate-300">
                    I'm a passionate student who loves learning new things.
                    I enjoy turning ideas into interactive experiences and I'm
                    currently exploring React and modern JavaScript.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
                    <li className="bg-gray-100 dark:bg-slate-700 px-4 py-3 rounded-lg text-sm">
                        <strong>📍 Location:</strong> Cebu, Philippines
                    </li>
                    <li className="bg-gray-100 dark:bg-slate-700 px-4 py-3 rounded-lg text-sm">
                        <strong>🎓 Education:</strong> BS Information Technology
                    </li>
                    <li className="bg-gray-100 dark:bg-slate-700 px-4 py-3 rounded-lg text-sm">
                        <strong>💼 Role:</strong> Front-End Developer (learning)
                    </li>
                    <li className="bg-gray-100 dark:bg-slate-700 px-4 py-3 rounded-lg text-sm">
                        <strong>🎯 Goal:</strong> Build up my portfolio
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About