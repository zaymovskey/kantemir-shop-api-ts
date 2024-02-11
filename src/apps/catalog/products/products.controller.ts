import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { GetProductsListDto } from './dto/getProductsList.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('productsList?')
  get(@Query() params: GetProductsListDto) {
    return this.productsService.getProductList({
      offset: Number(params.offset),
      limit: Number(params.limit),
    });
  }
}
