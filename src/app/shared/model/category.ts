import { Product } from "./product";

export interface Category {
  id: number;
  title: string;
  products: Product[];
}
