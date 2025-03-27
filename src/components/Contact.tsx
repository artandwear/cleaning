import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Regular Cleaning',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message submitted!');
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
                        <p className="text-gray-600 mt-4">Get in touch for a free quote</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-800 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-800 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 mb-2">Service Type</label>
                                <select
                                    className="w-full px-4 py-2 text-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option>Regular Cleaning</option>
                                    <option>Deep Cleaning</option>
                                    <option>Move-in/Move-out</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-800 mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
