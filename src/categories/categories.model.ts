import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Product } from '../products/products.model';

interface ICategoryCreationAttrs {
  name: string;
}
@Table({ tableName: 'categories' })
export class Category extends Model<Category, ICategoryCreationAttrs> {
  // Main
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING(255) })
  name: string;

  // Foreign
  @ForeignKey(() => Product)
  @Column({ type: DataTypes.BIGINT })
  productId: number;

  @BelongsTo(() => Product)
  products: Product;
}
