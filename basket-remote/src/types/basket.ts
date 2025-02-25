export type BasketProduct = {
    id: number;
    title: string;
    price: number;
    image: string;
};

export interface BasketItem {
    product: BasketProduct;
    quantity: number;
}

export interface BasketState {
    items: BasketItem[];
}