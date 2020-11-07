import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from './Modal';
import Booking from './Booking';
import Listing from './Listing';

import './App.css';
import { getBookings, getListings, pairListing } from './store/actionCreators';
import { listingIsAvailableForDuration } from './helpers';

type Props = {
  listings: Listing[];
  bookings: Booking[];
  getBookings: Function;
  getListings: Function;
  pairListing: Function;
}

function App({
  getBookings, getListings, bookings, listings, pairListing
}: Props) {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    !bookings.length && getBookings();
    !listings.length && getListings();
  })

  const filteredListings = !selectedBooking
    ? listings
    : listings.filter(
      listing => listing.status === 'current'
        && listing.category === selectedBooking.category
        && listingIsAvailableForDuration(listing, selectedBooking)
    );

  return (
    <div className="App">
      <header className="App-header">
        Bookings
      </header>
      {!bookings.length && <div>Loading...</div>}
      <main className="container">
        {bookings && <div role="listbox" className="Bookings">
          {bookings
            .filter(booking => booking.status === 'upcoming')
            .map(booking =>
              <Booking
                key={booking.bookingId}
                booking={booking}
                setSelectedBooking={setSelectedBooking}
              />
            )}
        </div>}
        <Modal
          show={!!selectedBooking}
          handleClose={() => setSelectedBooking(null)}
          label="Listings"
        >
          {selectedBooking && <div
            role="listbox"
            className="Listings"
          >
            {!filteredListings.length && <p>No matches found.</p>}
            {filteredListings.map(listing =>
              <Listing
                selectedBooking={selectedBooking}
                key={listing.listingId}
                pairListing={pairListing}
                setSelectedBooking={setSelectedBooking}
                listing={listing}
                notify={(message: string) => toast(message)}
              />)}
          </div>}
        </Modal>
      </main>
      <ToastContainer />
    </div>
  );
}

export default connect(
  (state: InitialState) => state,
  (dispatch: ThunkDispatch<InitialState, undefined, ListingsAction | any>) => ({
    getBookings: () => dispatch(getBookings()),
    getListings: () => dispatch(getListings()),
    pairListing: (listing: Listing, booking: Booking) => dispatch(pairListing(listing, booking))
  }))(App);
