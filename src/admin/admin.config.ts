// @ts-ignore
import { AdminModuleFactory } from '@adminjs/nestjs/src/interfaces/admin-module-factory.interface';
// @ts-ignore
import { CustomLoader } from '@adminjs/nestjs/src/interfaces/custom-loader.interface';

const authenticate = async (email: string, password: string) => {
  if (
    email === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const DEFAULT_ADMIN = {
      email: email,
      password: password,
    };
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

export const adminConfig: AdminModuleFactory & CustomLoader = {
  useFactory: () => ({
    adminJsOptions: {
      rootPath: '/admin',
      resources: [],
    },
    auth: {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'secret',
    },
    sessionOptions: {
      resave: true,
      saveUninitialized: true,
      secret: 'secret',
    },
  }),
};
