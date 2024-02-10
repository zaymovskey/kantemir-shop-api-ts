import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';

@Module({
  providers: [CategoriesService],
  controllers: [],
  imports: [SequelizeModule.forFeature([Category])],
})
export class CategoriesModule {}
