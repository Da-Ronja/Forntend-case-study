import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'remote_product_types/types/product';
// import { BasketProduct, BasketItem, BasketState } from 'remote_basket_types/types/basket';


interface BasketProduct {
    id: number;
    title: string;
    price: number;
    image: string;
}


interface BasketItem {
    product: BasketProduct;
    quantity: number;
}

interface BasketState {
    items: BasketItem[];
}

const convertToBasketProduct = (product: Product): BasketProduct => {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
    };
};

const initialState: BasketState = {
    items: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const basketProduct = convertToBasketProduct(action.payload);
            const existingItem = state.items.find((item: BasketItem) => item.product.id === basketProduct.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    product: basketProduct,
                    quantity: 1
                });
            }
        },
    },
});

// Export actions
export const { addItem } = basketSlice.actions;

// Export reducer
export default basketSlice.reducer;
        