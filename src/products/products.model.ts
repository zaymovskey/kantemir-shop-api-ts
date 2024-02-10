import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { DataTypes, literal } from 'sequelize';
import { Category } from '../categories/categories.model';
import {
  ProductSize,
  ProductSizeProducts,
} from '../productSizes/productSizes.model';
import { ProductImage } from '../productImages/productImages.model';

interface IProductCreationAttrs {
  name: string;
  slug: string;
  price: number;
  description: string;
  isPublished?: boolean;
  categoryId: number;
}
@Table({ tableName: 'products' })
export class Product extends Model<Product, IProductCreationAttrs> {
  // Main
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING(255) })
  name: string;

  @Column({ type: DataTypes.STRING(255), unique: true })
  slug: string;

  @Column({ type: DataTypes.FLOAT })
  price: number;

  @Column({ type: DataTypes.TEXT })
  description: string;

  @Column({ type: DataTypes.BOOLEAN(), defaultValue: true })
  isPublished: boolean;

  // Created/Updated
  @Column({
    type: DataTypes.DATE,
    defaultValue: literal('NOW()'),
  })
  createdAt: DataTypes.DateDataType;

  @Column({
    type: DataTypes.DATE,
    defaultValue: literal('NOW()'),
  })
  updatedAt: DataTypes.DateDataType;

  // Foreign
  @ForeignKey(() => Category)
  @Column({ type: DataTypes.INTEGER })
  categoryId: number;

  @BelongsToMany(() => ProductSize, () => ProductSizeProducts)
  productSizes: ProductSize[];

  @HasMany(() => ProductImage, { sourceKey: 'id' })
  productImages: ProductImage[];
}
