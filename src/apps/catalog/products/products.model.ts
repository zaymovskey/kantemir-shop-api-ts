import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
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

  // Foreign
  @ForeignKey(() => Category)
  @Column({ type: DataTypes.INTEGER })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsToMany(() => ProductSize, () => ProductSizeProducts)
  productSizes: ProductSize[];

  @HasMany(() => ProductImage, { sourceKey: 'id' })
  productImages: ProductImage[];
}
