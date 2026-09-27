import { test as base } from '@playwright/test';
import { RestfulBookerClient } from '../api/clients/RestfulBookerClient';
import { env } from '../config/env';

type ApiFixtures = {
  restfulBookerClient: RestfulBookerClient;
};

export const test = base.extend<ApiFixtures>({
  restfulBookerClient: async ({ playwright }, use) => {
    const requestContext = await playwright.request.newContext({
      baseURL: env.restfulBooker.baseUrl,
    });

    const client = new RestfulBookerClient(requestContext);

    await use(client);

    await requestContext.dispose();
  },
});

export { expect } from '@playwright/test';