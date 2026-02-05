// Environment configuration with type safety

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] ?? defaultValue;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const env = {
  API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'https://dummyjson.com'),
  APP_NAME: getEnvVar('VITE_APP_NAME', 'Shop Easy'),
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const;

export type Env = typeof env;
