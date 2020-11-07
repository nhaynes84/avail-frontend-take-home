import { listingIsAvailableForDuration } from './helpers';

describe('listingIsAvailableForDuration', () => {
    it('returns true if booking dates fall within listing dates', () => {
        // ARRANGE
        const booking = {
            startDate: '11/10/2020 05:00 PM',
            endDate: '11/20/2020 02:00 PM'
        }
        const listing = {
            startDate: '11/09/2020 08:00 PM',
            endDate: '11/25/2020 03:00 PM'
        }

        // ACT
        const isAvailable = listingIsAvailableForDuration((listing as Listing), (booking as Booking));

        // ASSERT
        expect(isAvailable).toBeTruthy();
    })

    it('returns false if booking dates fall outside listing dates', () => {
        // ARRANGE
        const booking = {
            startDate: '11/08/2020 05:00 PM',
            endDate: '11/20/2020 02:00 PM'
        }
        const listing = {
            startDate: '11/09/2020 08:00 PM',
            endDate: '11/25/2020 03:00 PM'
        }

        // ACT
        const isAvailable = listingIsAvailableForDuration((listing as Listing), (booking as Booking));

        // ASSERT
        expect(isAvailable).toBeFalsy();
    })

    it('returns false if invalid dates', () => {
        // ARRANGE
        const booking = {
            startDate: 'foo',
            endDate: '11/20/2020 02:00 PM'
        }
        const listing = {
            startDate: '11/09/2020 08:00 PM',
            endDate: '11/25/2020 03:00 PM'
        }

        // ACT
        const isAvailable = listingIsAvailableForDuration((listing as Listing), (booking as Booking));

        // ASSERT
        expect(isAvailable).toBeFalsy();
    })
})