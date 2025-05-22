import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Stickers Kawaii Pack",
    price: 1200,
    imageUrl: "https://images.pexels.com/photos/5758010/pexels-photo-5758010.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Stickers",
    isNew: true,
    description: "Pack de 10 stickers kawaii resistentes al agua"
  },
  {
    id: 2,
    name: "Tote Bag Retro",
    price: 3500,
    imageUrl: "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Ropa",
    isNew: true,
    description: "Tote bag de algodón con diseños exclusivos"
  },
  {
    id: 3,
    name: "Libreta Pastel Dreams",
    price: 2200,
    imageUrl: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Papelería",
    isNew: true,
    description: "Libreta A5 con hojas rayadas y diseño cute"
  },
  {
    id: 4,
    name: "Pins Esmaltados Frutas",
    price: 1800,
    imageUrl: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accesorios",
    isFavorite: true,
    description: "Set de 3 pins esmaltados con diseño de frutas"
  },
  {
    id: 5,
    name: "Llavero Nube Feliz",
    price: 1500,
    imageUrl: "https://images.pexels.com/photos/1120581/pexels-photo-1120581.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accesorios",
    isFavorite: true,
    description: "Llavero de acrílico con diseño de nube sonriente"
  },
  {
    id: 6,
    name: "Medias Retro Arcoiris",
    price: 1900,
    imageUrl: "https://images.pexels.com/photos/6864989/pexels-photo-6864989.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Ropa",
    isFavorite: true,
    description: "Medias con diseño retro de arcoiris"
  },
  {
    id: 7,
    name: "Pack Agenda Kawaii",
    price: 4500,
    imageUrl: "https://images.pexels.com/photos/6690851/pexels-photo-6690851.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Papelería",
    isOnSale: true,
    discount: 20,
    description: "Pack completo de agenda, stickers y bolígrafos kawaii"
  }
];

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getFavorites = (): Product[] => {
  return products.filter(product => product.isFavorite);
};

export const getSpecialOffers = (): Product[] => {
  return products.filter(product => product.isOnSale);
};