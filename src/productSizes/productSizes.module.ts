import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductSize, ProductSizeProducts } from './productSizes.model';
import { ProductSizesService } from './productSizes.service';

@Module({
  providers: [ProductSizesService],
  controllers: [],
  imports: [
    SequelizeModule.forFeature([ProductSize]),
    SequelizeModule.forFeature([ProductSizeProducts]),
  ],
})
export class ProductSizesModule {}
