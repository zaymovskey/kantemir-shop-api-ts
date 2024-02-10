import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductImage } from './productImages.model';
import { ProductImagesService } from './productImages.service';

@Module({
  providers: [ProductImagesService],
  controllers: [],
  imports: [SequelizeModule.forFeature([ProductImage])],
})
export class ProductImagesModule {}
