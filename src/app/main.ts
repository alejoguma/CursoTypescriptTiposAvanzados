import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    size: faker.string.fromCharacters(["S","M","L","XL"]),
    tags: faker.random.words(5).split(" "),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  });

}

console.log(products);
const product = products[0];
updateProduct(product.id,{
  title: 'New Title',
  stock: 80,
});

findProducts({
  stock:10,
  color:'red',
  createAt: new Date(),
  isNew:true,
  tags:['as', 'sa']
});
