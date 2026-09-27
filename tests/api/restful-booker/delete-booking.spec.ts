
import { test, expect } from '../../../fixtures/apiFixtures';
import { env } from '../../../config/env';
import { apiTestData } from '../../../data/apiTestData';
import { CreateBookingResponse } from '../../../api/types/booking';

test(
  'delete existing booking',
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

    // 3. Delete booking
    const deleteResponse = await restfulBookerClient.deleteBooking(
      createdBooking.bookingid,
      authBody.token
    );

    expect(deleteResponse.status()).toBe(201);

    // 4. Verify booking no longer exists
    const getResponse = await restfulBookerClient.getBooking(
      createdBooking.bookingid
    );

    expect(getResponse.status()).toBe(404);
  }
);