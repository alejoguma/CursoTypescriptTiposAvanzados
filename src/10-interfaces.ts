type Size = 'S' | 'M' | 'L' | 'XL';
type userId = string | number; // no se puede con interface
// type Product = { // No se puede extender
//   id: string;
//   title: string;
//   createAt: Date;
//   stock: number;
//   size?: Size;
// }

interface Product { // pueden extenderse
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Size;
}

const products: Product[] = [];

products.push({
  id: '1',
  title:'p1',
  createAt: new Date,
  stock:90
});

const addProduct = (data: Product) => {
  products.push(data);
}
