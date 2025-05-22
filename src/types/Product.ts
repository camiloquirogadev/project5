export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isFavorite?: boolean;
  isOnSale?: boolean;
  discount?: number;
  description?: string;
}