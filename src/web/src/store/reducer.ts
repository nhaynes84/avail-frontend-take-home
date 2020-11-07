import * as actionTypes from "./actionTypes"

const initialState: InitialState = {
  bookings: [],
  listings: []
}

const reducer = (
  state: InitialState = initialState,
  action: ListingsAction | BookingsAction | PairAction
): InitialState => {
  switch (action.type) {
    case actionTypes.GET_BOOKINGS:

      return {
        ...state,
        bookings: (action as BookingsAction).bookings,
      }
    case actionTypes.GET_LISTINGS:

      return {
        ...state,
        listings: (action as ListingsAction).listings,
      }
    case actionTypes.PAIR_LISTING:

      return {
        ...state,
        listings: state.listings.filter(
          listing => listing.listingId !== (action as PairAction).pair.listing.listingId
        ),
        bookings: state.bookings.filter(
          booking => booking.bookingId !== (action as PairAction).pair.booking.bookingId
        )
      }
  }
  return state
}

export default reducer