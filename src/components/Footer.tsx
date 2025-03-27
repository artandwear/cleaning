import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Esjay</h3>
                        <p className="text-gray-400">
                            Professional cleaning services for homes and businesses.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white cursor-pointer">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cleaning-types"
                                    className="text-gray-400 hover:text-white cursor-pointer"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaPhone className="mr-2" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <span>info@esjaycleaning.com</span>
                            </li>
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>123 Skyview St, Calgary, Alberta</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4 text-2xl">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-center text-gray-400">© 2025 Esjay. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


