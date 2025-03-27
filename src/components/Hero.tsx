import React from 'react';
import { FaStar, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

type HeroProps = {
    setShowBookingModal: (show: boolean) => void;
};

const Hero: React.FC<HeroProps> = ({ setShowBookingModal }) => {
    return (
        <div className="relative pt-16 flex content-center items-center justify-center min-h-screen">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('/images/hero-bg.jpg')",
                }}
            >
                <span className="w-full h-full absolute opacity-60 bg-gradient-to-r from-black to-transparent"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto">
                        <div className="pr-12">
                            <h1 className="text-white font-bold text-6xl leading-tight">
                                From Office to Home, <br />
                                <span className="text-blue-400">We Do It All</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-200 leading-relaxed">
                                Transform your space with our premium cleaning services. Whether it's your cozy home or busy workplace, we deliver spotless results that exceed expectations.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={() => setShowBookingModal(true)}
                                    className="bg-blue-600 text-white px-8 py-4 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-lg font-semibold"
                                >
                                    Book Your Clean Today
                                </button>
                                <a
                                    href="#about"
                                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-button hover:bg-white hover:text-blue-600 transition-all cursor-pointer whitespace-nowrap text-lg font-semibold"
                                >
                                    Learn More
                                </a>
                            </div>
                            <div className="mt-12 flex items-center space-x-8">
                                <div className="flex items-center">
                                    <FaStar className="text-yellow-400 text-2xl mr-2" />
                                    <span className="text-white">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-blue-400 text-2xl mr-2" />
                                    <span className="text-white">100% Satisfaction</span>
                                </div>
                                <div className="flex items-center">
                                    <FaShieldAlt className="text-blue-400 text-2xl mr-2" />
                                    <span className="text-white">Insured & Bonded</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
