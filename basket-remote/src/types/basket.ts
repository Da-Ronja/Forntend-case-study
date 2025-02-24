
export type BasketProduct = {
    id: number;
    title: string;
    price: number;
    image: string;
  };


export type BasketItem = {
    product: BasketProduct;
    quantity: number;
  };