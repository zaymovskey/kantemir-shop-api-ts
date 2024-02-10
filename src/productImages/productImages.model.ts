import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Product } from '../products/products.model';

interface IProductImageCreationAttrs {
  url: string;
}
@Table({ tableName: 'productImages' })
export class ProductImage extends Model<
  ProductImage,
  IProductImageCreationAttrs
> {
  // Main
  @Column({ type: DataTypes.STRING(255) })
  url: string;

  // Foreign
  @ForeignKey(() => Product)
  @Column({ type: DataTypes.BIGINT })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
