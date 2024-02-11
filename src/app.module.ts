import { Module } from '@nestjs/common';
import { ProductsModule } from './apps/catalog/products/products.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './apps/catalog/categories/categories.module';
import { ProductImagesModule } from './apps/catalog/productImages/productImages.module';
import { ProductSizesModule } from './apps/catalog/productSizes/productSizes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { getDbConfig } from './db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot(getDbConfig()),
    ProductsModule,
    CategoriesModule,
    ProductImagesModule,
    ProductSizesModule,
  ],
})
export class AppModule {}
