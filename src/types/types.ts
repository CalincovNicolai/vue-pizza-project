export interface RestaurantViewModel {
  image: string;
  name: string;
  time_of_delivery: number;
  stars: number;
  price: number;
  kitchen: string;
  products: MenuViewModel[];
}

export interface MenuViewModel {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface MenuCartViewModel {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
