import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameField = this.page.getByRole('textbox', {
    name: 'Username',
  });

  private readonly passwordField = this.page.getByRole('textbox', {
    name: 'Password',
  });

  private readonly loginButton = this.page.getByRole('button', {
    name: 'Login',
  });

  private readonly loginError = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async getLoginErrorMessage(): Promise<string> {
    return (await this.loginError.textContent())?.trim() ?? '';
  }
}