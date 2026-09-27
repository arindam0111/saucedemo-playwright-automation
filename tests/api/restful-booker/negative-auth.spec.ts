import { test, expect } from '../../../fixtures/apiFixtures';
import { env } from '../../../config/env';

test('authentication with invalid credentials returns no valid token', { tag: '@api' }, async ({
  restfulBookerClient,
}) => {
  const response = await restfulBookerClient.createToken(
    env.restfulBooker.username,
    'invalid-password'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.token).toBeUndefined();
  expect(body.reason).toBeTruthy();
});