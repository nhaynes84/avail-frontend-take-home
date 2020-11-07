export const listingIsAvailableForDuration = (
  listing: Listing,
  booking: Booking
): boolean =>
  new Date(booking.startDate).getTime() > new Date(listing.startDate).getTime()
  && new Date(booking.endDate).getTime() < new Date(listing.endDate).getTime()