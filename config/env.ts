import 'dotenv/config';

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  baseUrl: getRequiredEnv('BASE_URL'),

  standardUser: {
    username: getRequiredEnv('STANDARD_USERNAME'),
    password: getRequiredEnv('STANDARD_PASSWORD'),
  },

  restfulBooker: {
    baseUrl: getRequiredEnv('RESTFUL_BOOKER_BASE_URL'),
    username: getRequiredEnv('RESTFUL_BOOKER_USERNAME'),
    password: getRequiredEnv('RESTFUL_BOOKER_PASSWORD'),
  },
};
