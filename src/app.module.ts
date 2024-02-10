import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { ProductImagesModule } from './productImages/productImages.module';
import { ProductSizesModule } from './productSizes/productSizes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { adminConfig } from './admin/admin.config';
import { getDbConfig } from './db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot(getDbConfig()),
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync(adminConfig),
    ),
    ProductsModule,
    CategoriesModule,
    ProductImagesModule,
    ProductSizesModule,
  ],
})
export class AppModule {}
