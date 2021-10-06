import React from 'react';
import { useState } from 'react/cjs/react.development';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title App-link">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} style={{outline: 'none'}} className="py-2 px-3 text-uppercase button">booking appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;