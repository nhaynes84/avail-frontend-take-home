import * as actionTypes from "./actionTypes"
import { getBookings as fetchBookings } from '../api/bookingApi';
import { getListings as fetchListings } from '../api/listingApi';

export function getBookings() {
  return async (dispatch: DispatchType) => {
    const bookings = await fetchBookings();
    const action: BookingsAction = {
      type: actionTypes.GET_BOOKINGS,
      bookings
    }
    dispatch(action)
  }
}

export function getListings() {
  return async (dispatch: DispatchType) => {
    const listings = await fetchListings();
    const action: ListingsAction = {
      type: actionTypes.GET_LISTINGS,
      listings
    }
    dispatch(action)
  }
}

export function pairListing(listing: Listing, booking: Booking) {
  return ({
    type: actionTypes.PAIR_LISTING,
    pair: {
      listing,
      booking
    }
  })
}