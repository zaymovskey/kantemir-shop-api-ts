import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [databaseProvider],
  exports: [databaseProvider],
  imports: [
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
  ],
})
export class AppModule {}
