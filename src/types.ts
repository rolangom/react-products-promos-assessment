export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface Promotion {
  productId: number;
  discount: number;
}
