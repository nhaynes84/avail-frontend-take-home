import React from 'react';

import jku from './jkuthumb.jpeg';

function Listing({
    listing,
    selectedBooking,
    setSelectedBooking,
    pairListing,
    notify
}: {
        listing: Listing;
        selectedBooking: Booking;
        setSelectedBooking: Function;
        pairListing: Function;
        notify: Function;
    }) {
    return (
        <div className="Listing" key={listing.listingId}>
            <div className="listing-img">
                <img alt="jku" src={jku} />
            </div>
            <div className="listing-info">
                <h6 className="vehicle-label">Vehicle</h6>
                <h4 className="vehicle">{listing.vehicle}</h4>
                <div>
                    <h6 className="dates-label">Trip Dates</h6>
                    <h4 className="start-date">{listing.startDate}</h4>
                    <h4 className="end-date">{listing.endDate}</h4>
                </div>
            </div>
            <div>
                <button
                    className="pair"
                    onClick={() => {
                        pairListing(listing, selectedBooking);
                        notify(
                            `${selectedBooking.customerName} has been paired with a ${listing.vehicle}.`
                        );
                        setSelectedBooking(null);
                    }}
                >
                    Pair
            </button>
            </div>
        </div>
    )
}

export default Listing;