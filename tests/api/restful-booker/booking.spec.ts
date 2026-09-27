
import { test, expect } from '../../../fixtures/apiFixtures';
import { apiTestData } from '../../../data/apiTestData';
import { CreateBookingResponse } from '../../../api/types/booking';

test(
  'create and retrieve booking',
  { tag: '@api' },
  async ({ restfulBookerClient }) => {
    // 1. Create booking
    const createResponse =
      await restfulBookerClient.createBooking(apiTestData);

    expect(createResponse.status()).toBe(200);
    expect(createResponse.headers()['content-type']).toContain(
      'application/json'
    );

    const createdBooking =
      (await createResponse.json()) as CreateBookingResponse;

    expect(createdBooking.bookingid).toBeGreaterThan(0);

    expect(createdBooking.booking).toEqual(
      expect.objectContaining({
        firstname: apiTestData.firstname,
        lastname: apiTestData.lastname,
        totalprice: apiTestData.totalprice,
        depositpaid: apiTestData.depositpaid,
        bookingdates: apiTestData.bookingdates,
        additionalneeds: apiTestData.additionalneeds,
      })
    );

    // 2. Retrieve booking
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
        firstname: apiTestData.firstname,
        lastname: apiTestData.lastname,
        totalprice: apiTestData.totalprice,
        depositpaid: apiTestData.depositpaid,
        bookingdates: apiTestData.bookingdates,
        additionalneeds: apiTestData.additionalneeds,
      })
    );
  }
);