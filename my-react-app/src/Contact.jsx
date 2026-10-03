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
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-l-4 border-purple-600 pl-3">
                Contact Me (sample only)
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md transition-colors duration-300">
                {submitted && (
                    <div className="mb-4 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700 rounded-lg px-4 py-3 text-sm">
                        ✅ Thanks! Your message has been sent.
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-slate-700 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-slate-700 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-slate-700 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition-colors ${
                                errors.message ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                            }`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="self-start bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-2.5 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact