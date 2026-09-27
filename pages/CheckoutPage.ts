import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private readonly firstNameField = this.page.getByRole('textbox', {
    name: 'First Name',
  });

  private readonly lastNameField = this.page.getByRole('textbox', {
    name: 'Last Name',
  });

  private readonly postalCodeField = this.page.getByRole('textbox', {
    name: 'Zip/Postal Code',
  });

  private readonly continueButton = this.page.getByRole('button', {
    name: 'Continue',
  });

  private readonly finishButton = this.page.getByRole('button', {
    name: 'Finish',
  });

  private readonly orderConfirmation = this.page.getByText(
    'Thank you for your order!'
  );

  constructor(page: Page) {
    super(page);
  }

  async enterCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ): Promise<void> {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
  }

  async continueToOverview(): Promise<void> {
    await this.continueButton.click();
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation(): Promise<void> {
    await expect(this.orderConfirmation).toBeVisible();
  }
}
