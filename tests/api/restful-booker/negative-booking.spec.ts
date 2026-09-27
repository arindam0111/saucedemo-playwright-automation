import { test, expect } from '../../../fixtures/apiFixtures';

test('get non-existent booking returns 404', { tag: '@api' }, async ({
  restfulBookerClient,
}) => {
  const response = await restfulBookerClient.getBooking(999999);

  expect(response.status()).toBe(404);
});