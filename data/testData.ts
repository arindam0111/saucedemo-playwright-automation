import { env } from '../config/env';

export const testData = {
  users: {
    standard: {
      username: env.standardUser.username,
      password: env.standardUser.password,
    },
  },

  loginScenarios: [
    {
      name: 'valid standard user',
      username: env.standardUser.username,
      password: env.standardUser.password,
      expectedSuccess: true,
      expectedError: '',
    },
    {
      name: 'locked out user',
      username: 'locked_out_user',
      password: 'secret_sauce',
      expectedSuccess: false,
      expectedError:
        'Epic sadface: Sorry, this user has been locked out.',
    },
    {
  name: 'invalid credentials',
  username: 'invalid_user',
  password: 'invalid_password',
  expectedSuccess: false,
  expectedError:
    'Epic sadface: Username and password do not match any user in this service',
},
  ],

  checkout: {
    firstName: 'Arindam',
    lastName: 'Chowdhury',
    postalCode: '411001',
  },

  products: {
    backpack: 'Sauce Labs Backpack',
  },
};