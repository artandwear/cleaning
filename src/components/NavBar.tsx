import React, { useState } from 'react';
import Image from 'next/image';

type NavbarProps = {
    setShowBookingModal: (show: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setShowBookingModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="block">
                            <Image src="/images/logo.png" alt="Esjay logo" width={160} height={40} priority />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#cleaning-types" className="text-gray-600 hover:text-blue-600 cursor-pointer">Services</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 cursor-pointer">About</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 cursor-pointer">Contact</a>
                        <button
                            onClick={() => setShowBookingModal(true)}
                            className="bg-blue-600 text-white px-6 py-2 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Book Now
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-blue-600 cursor-pointer"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#cleaning-types" className="block px-3 py-2 text-gray-600 hover:text-blue-600 cursor-pointer">Services</a>
                        <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 cursor-pointer">About</a>
                        <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 cursor-pointer">Contact</a>
                        <button
                            onClick={() => setShowBookingModal(true)}
                            className="w-full text-center bg-blue-600 text-white px-6 py-2 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
