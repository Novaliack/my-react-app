import './About.css'

function About(){
    return(
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-card">
                <p>
                    I'm a passionate student who loves learning new things.
                    I enjoy turning ideas into interactive experiences and I'm
                    currently exploring React and modern JavaScript.
                </p>
                <ul className="about-facts">
                    <li><strong>📍 Location:</strong> Cebu, Philippines</li>
                    <li><strong>🎓 Education:</strong> BS Information Technology</li>
                    <li><strong>💼 Role:</strong> Front-End Developer (learning)</li>
                    <li><strong>🎯 Goal:</strong> Build up my portfolio</li>
                </ul>
            </div>
        </section>
    );
}

export default About