import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { ProductImage } from './productImages/productImages.model';
import {
  ProductSize,
  ProductSizeProducts,
} from './productSizes/productSizes.model';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';

export const getDbConfig = (): SequelizeModuleOptions => {
  return {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [Product, Category, ProductImage, ProductSize, ProductSizeProducts],
    autoLoadModels: true,
  };
};
