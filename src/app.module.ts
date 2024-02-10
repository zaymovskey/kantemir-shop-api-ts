import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { ProductImagesModule } from './productImages/productImages.module';
import { ProductSizesModule } from './productSizes/productSizes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { ProductImage } from './productImages/productImages.model';
import {
  ProductSize,
  ProductSizeProducts,
} from './productSizes/productSizes.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [
        Product,
        Category,
        ProductImage,
        ProductSize,
        ProductSizeProducts,
      ],
      autoLoadModels: true,
    }),
    ProductsModule,
    CategoriesModule,
    ProductImagesModule,
    ProductSizesModule,
  ],
})
export class AppModule {}
