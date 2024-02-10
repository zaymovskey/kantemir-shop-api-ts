import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Product } from '../products/products.model';

interface IProductSizeCreationAttrs {
  name: string;
}
@Table({ tableName: 'productSizes' })
export class ProductSize extends Model<ProductSize, IProductSizeCreationAttrs> {
  // Main
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING(255) })
  name: string;

  // Foreign
  @BelongsToMany(() => Product, () => ProductSizeProducts)
  products: Product[];
}

@Table({ tableName: 'productSizeProducts' })
export class ProductSizeProducts extends Model<ProductSizeProducts> {
  @ForeignKey(() => ProductSize)
  @Column({ type: DataTypes.INTEGER })
  productSizeId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataTypes.INTEGER })
  productId: number;
}
