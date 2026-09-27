import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  private readonly productsTitle = this.page.getByText('Products', {
    exact: true,
  });

  private readonly shoppingCartLink = this.page.locator(
    '[data-test="shopping-cart-link"]'
  );

  constructor(page: Page) {
    super(page);
  }

  async verifyProductsPageIsDisplayed(): Promise<void> {
    await expect(this.productsTitle).toBeVisible();
  }

  async addProductToCart(productName: string): Promise<void> {
    const product = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }
}
