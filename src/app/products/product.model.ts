import { Category } from "../categories/categories.model";
import { BaseModel } from "../base.model";

export type Size = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: string | Size;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

