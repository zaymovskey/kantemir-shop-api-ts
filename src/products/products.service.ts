import { Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductsListDto } from './dto/getProductsList.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productRepo: typeof Product) {}

  async getProductList(dto: GetProductsListDto) {
    const productsList = await this.productRepo.findAll({
      limit: dto.limit,
      offset: dto.offset,
    });

    return productsList;
  }
}
