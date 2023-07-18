import { Product } from "./product.model";

// type CreateProductDto = Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> ;

export interface CreateProductDto extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'> //contrario de omit

// type UpdateProductDto = Partial<Product>;

export interface UpdateProductDto extends Partial<CreateProductDto>{}

type example2 = Required<Product>; //contrario de partial, todo lo deja como obligatorio

// interface UpdateProductDto {
//   title: string;
//   image: string;
//   description: string;
//   stock: number;
//   size?: string | Size;
//   color: string;
//   price: number;
//   category: Category;
//   isNew: boolean;
//   tags: string[];
// }

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{ //usar varios utility types
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;
