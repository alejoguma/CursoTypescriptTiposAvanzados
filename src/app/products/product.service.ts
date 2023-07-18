import { Product } from './product.model';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  // data.id = 'asdasdad';
  // data.createAt = new Date;
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product | string => {
  if (searchProduct(id) >= 0 ) {
    const prevData = products[searchProduct(id)];
    products[searchProduct(id)] = {
      ...prevData,
      ...changes
    };
    return products[searchProduct(id)];
  } else {
    return "Not found";
  }
}
export const deleteProduct = (id: Product['id']): void | string => {
  if (searchProduct(id) >= 0) {
    products.slice(searchProduct(id), 1);
  } else {
    return "Not found";
  }
}
export const getProduct = (id: Product['id']): Product | string => {
  if (searchProduct(id) >= 0) {
    return products[searchProduct(id)];
  } else {
    return "Not found";
  }

}

export const findProducts = (dto: FindProductDto): Product[] => {
  //code
  // dto.color = 'blue';
  // dto.tags = [];
  // dto.tags?.push();
  // dto.tags?.pop();
  return products;
}

export const searchProduct = (id: Product['id']): number => {
  const index = products.findIndex(item => item.id === id);
  return index;
}


