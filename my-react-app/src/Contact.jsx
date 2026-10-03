import { useState } from 'react'

function Contact(){
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Enter a valid email';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setSubmitted(false), 4000);
    };

    return(
        <section id="contact">
            <h2 className="text-3xl font-semibold text-violet-300 mb-4 border-l-4 border-violet-500 pl-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                Contact Me
            </h2>
            <div className="bg-[#140b2e]/80 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_25px_rgba(106,17,203,0.25)] border border-purple-500/20 transition-colors duration-300">
                {submitted && (
                    <div className="mb-4 bg-purple-500/20 text-violet-200 border border-violet-400/40 rounded-lg px-4 py-3 text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        ✅ Thanks! Your message has been sent.
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-purple-200">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={`w-full px-4 py-2 rounded-lg border bg-purple-950/40 text-purple-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                                errors.name ? 'border-red-500' : 'border-purple-500/30'
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-purple-200">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`w-full px-4 py-2 rounded-lg border bg-purple-950/40 text-purple-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                                errors.email ? 'border-red-500' : 'border-purple-500/30'
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1 text-purple-200">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className={`w-full px-4 py-2 rounded-lg border bg-purple-950/40 text-purple-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-y transition-colors ${
                                errors.message ? 'border-red-500' : 'border-purple-500/30'
                            }`}
                        />
                        {errors.message && (
                            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="self-start bg-gradient-to-br from-[#6a11cb] to-[#2575fc] hover:from-[#7d1edb] hover:to-[#3b82f6] text-white font-medium px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(106,17,203,0.5)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact