import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('productsList?')
  get(@Query('offset') offset: number, @Query('limit') limit: number) {
    return this.productsService.getProductList({
      offset: offset,
      limit: limit,
    });
  }
}
