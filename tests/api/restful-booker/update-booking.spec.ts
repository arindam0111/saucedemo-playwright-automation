
import { test, expect } from '../../../fixtures/apiFixtures';
import { env } from '../../../config/env';
import { apiTestData } from '../../../data/apiTestData';
import {
  Booking,
  CreateBookingResponse,
} from '../../../api/types/booking';

test(
  'update existing booking',
  { tag: '@api' },
  async ({ restfulBookerClient }) => {
    // 1. Create booking
    const createResponse =
      await restfulBookerClient.createBooking(apiTestData);

    expect(createResponse.status()).toBe(200);

    const createdBooking =
      (await createResponse.json()) as CreateBookingResponse;

    expect(createdBooking.bookingid).toBeGreaterThan(0);

    // 2. Create authentication token
    const authResponse = await restfulBookerClient.createToken(
      env.restfulBooker.username,
      env.restfulBooker.password
    );

    expect(authResponse.status()).toBe(200);

    const authBody = await authResponse.json();

    expect(authBody.token).toBeTruthy();

    // 3. Prepare updated booking
    const updatedBooking: Booking = {
      ...apiTestData,
      firstname: 'Arindam Updated',
      totalprice: 200,
      additionalneeds: 'Lunch',
    };

    // 4. Update booking
    const updateResponse = await restfulBookerClient.updateBooking(
      createdBooking.bookingid,
      updatedBooking,
      authBody.token
    );

    expect(updateResponse.status()).toBe(200);
    expect(updateResponse.headers()['content-type']).toContain(
      'application/json'
    );

    const responseBody = await updateResponse.json();

    expect(responseBody).toEqual(
      expect.objectContaining({
        firstname: updatedBooking.firstname,
        lastname: updatedBooking.lastname,
        totalprice: updatedBooking.totalprice,
        depositpaid: updatedBooking.depositpaid,
        bookingdates: updatedBooking.bookingdates,
        additionalneeds: updatedBooking.additionalneeds,
      })
    );

    // 5. Verify update with GET
    const getResponse = await restfulBookerClient.getBooking(
      createdBooking.bookingid
    );

    expect(getResponse.status()).toBe(200);
    expect(getResponse.headers()['content-type']).toContain(
      'application/json'
    );

    const booking = await getResponse.json();

    expect(booking).toEqual(
      expect.objectContaining({
        firstname: updatedBooking.firstname,
        lastname: updatedBooking.lastname,
        totalprice: updatedBooking.totalprice,
        depositpaid: updatedBooking.depositpaid,
        bookingdates: updatedBooking.bookingdates,
        additionalneeds: updatedBooking.additionalneeds,
      })
    );
  }
);