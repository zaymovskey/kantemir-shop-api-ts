export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'dev' | 'prod';

      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
    }
  }
}
