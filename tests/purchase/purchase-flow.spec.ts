import { test } from '../../fixtures/testFixtures';
import { testData } from '../../data/testData';

test(
  'successful purchase flow with valid customer information',
  {
    tag: '@regression',
  },
  async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.navigateTo('/');

    await loginPage.login(
      testData.users.standard.username,
      testData.users.standard.password
    );

    await productsPage.verifyProductsPageIsDisplayed();
    await productsPage.addProductToCart(testData.products.backpack);
    await productsPage.openCart();

    await cartPage.verifyCartPageIsDisplayed();
    await cartPage.verifyProductIsInCart(testData.products.backpack);
    await cartPage.proceedToCheckout();

    await checkoutPage.enterCustomerInformation(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );

    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderConfirmation();
  }
);