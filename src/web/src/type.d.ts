interface IArticle {
  id: number
  title: string
  body: string
}

type InitialState = {
  bookings: Booking[];
  listings: Listing[];
}

type DispatchType = (args: BookingsAction | ListingsAction) => BookingsAction | ListingsAction

interface ISharedMeta {
  customerName: string;
  startDate: string;
  endDate: string;
  status: string;
  category: string;
  confirmation: string;
}
interface Booking extends ISharedMeta {
  bookingId: number;
  listingId: number | null;
}

interface Listing extends ISharedMeta {
  listingId: number;
  vehicle: string;
}

type BookingsAction = {
  type: string;
  bookings: Booking[];
}

type ListingsAction = {
  type: string;
  listings: Listing[];
}

type PairAction = {
  type: string;
  pair: {
    listing: Listing;
    booking: Booking;
  }
}