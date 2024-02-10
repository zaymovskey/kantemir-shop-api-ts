import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Product } from '../products/products.model';
import { ProductImage } from '../productImages/productImages.model';

interface ICategoryCreationAttrs {
  name: string;
}
@Table({ tableName: 'categories' })
export class Category extends Model<Category, ICategoryCreationAttrs> {
  // Main

  @Column({ type: DataTypes.STRING(255) })
  name: string;

  // Foreign
  @HasMany(() => Product, { sourceKey: 'id' })
  products: ProductImage[];
}
