// @ts-ignore
import { AdminModuleFactory } from '@adminjs/nestjs/src/interfaces/admin-module-factory.interface';
// @ts-ignore
import { CustomLoader } from '@adminjs/nestjs/src/interfaces/custom-loader.interface';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
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
