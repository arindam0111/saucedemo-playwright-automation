import { test, expect } from '../../fixtures/testFixtures';
import { testData } from '../../data/testData';

for (const scenario of testData.loginScenarios) {
  test(
    `login - ${scenario.name}`,
    {
      tag: scenario.expectedSuccess ? '@smoke' : '@regression',
    },
    async ({ loginPage, productsPage }) => {
      await loginPage.navigateTo('/');

      await loginPage.login(
        scenario.username,
        scenario.password
      );

      if (scenario.expectedSuccess) {
        await productsPage.verifyProductsPageIsDisplayed();
      } else {
        const errorMessage = await loginPage.getLoginErrorMessage();

        expect(errorMessage).toBe(scenario.expectedError);
      }
    }
  );
}