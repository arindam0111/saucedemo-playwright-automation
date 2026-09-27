import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly cartTitle = this.page.getByText('Your Cart', {
    exact: true,
  });

  private readonly checkoutButton = this.page.getByRole('button', {
    name: 'Checkout',
  });

  constructor(page: Page) {
    super(page);
  }

  async verifyCartPageIsDisplayed(): Promise<void> {
    await expect(this.cartTitle).toBeVisible();
  }

  async verifyProductIsInCart(productName: string): Promise<void> {
    const cartItem = this.page.locator('.cart_item').filter({
      hasText: productName,
    });

    await expect(cartItem).toBeVisible();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
