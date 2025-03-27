import React from 'react';

type BookingModalProps = {
    setShowBookingModal: (show: boolean) => void;
};

const BookingModal: React.FC<BookingModalProps> = ({ setShowBookingModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Book a Service</h3>
                    <button
                        onClick={() => setShowBookingModal(false)}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div className="text-center text-gray-700 mb-6">
                    <p>Thank you for choosing CleanPro Elite!</p>
                    <p>We will contact you shortly to confirm your booking.</p>
                </div>
                <button
                    onClick={() => setShowBookingModal(false)}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BookingModal;
