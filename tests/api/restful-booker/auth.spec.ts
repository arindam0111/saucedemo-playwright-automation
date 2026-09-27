import { test, expect } from '../../../fixtures/apiFixtures';
import { env } from '../../../config/env';

test('create authentication token', { tag: '@api' }, async ({ restfulBookerClient }) => {
  const response = await restfulBookerClient.createToken(
    env.restfulBooker.username,
    env.restfulBooker.password
  );

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/json');

  const body = await response.json();

  expect(body.token).toBeTruthy();
  expect(typeof body.token).toBe('string');
});
