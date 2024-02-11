import { Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductsListDto } from './dto/getProductsList.dto';
import { ProductImage } from '../productImages/productImages.model';
import { Category } from '../categories/categories.model';
import { ProductSize } from '../productSizes/productSizes.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productRepo: typeof Product) {}

  async getProductList(dto: GetProductsListDto) {
    return await this.productRepo.findAll({
      limit: dto.limit === 0 ? undefined : dto.limit,
      offset: dto.offset,
      where: {
        isPublished: true,
      },
      attributes: ['id', 'name', 'slug', 'price', 'description'],
      include: [
        { model: ProductImage, attributes: ['url'] },
        { model: Category, attributes: ['id', 'name'] },
        { model: ProductSize, attributes: ['id', 'name'] },
      ],
    });
  }
}
