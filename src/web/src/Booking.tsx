import React from 'react';

import jku from './jkuthumb.jpeg';

function Booking({
    booking,
    setSelectedBooking
}: {
        booking: Booking;
        setSelectedBooking: Function;
    }) {
    return (
        <div className="Booking" key={booking.bookingId}>
            <div className="booking-img">
                <button onClick={() => setSelectedBooking(booking)}>
                    <img alt="jku" src={jku} />
                </button>
                <h6 className="category-label">Vehicle Category</h6>
                <h4 className="category">{booking.category}</h4>
            </div>
            <div className="booking-info">
                <h6 className="customer-label">Customer</h6>
                <h4 className="customer">{booking.customerName}</h4>
                <div>
                    <h6 className="reservation-label">Reservation</h6>
                    <h4 className="reservation">{booking.confirmation}</h4>
                </div>
                <div>
                    <h6 className="dates-label">Trip Dates</h6>
                    <h4 className="start-date">{booking.startDate}</h4>
                    <h4 className="end-date">{booking.endDate}</h4>
                </div>
            </div>
            <div>
                <h6 className="status-label">Status</h6>
                <h4 className="status">{booking.status}</h4>
            </div>
        </div>
    )
}

export default Booking;