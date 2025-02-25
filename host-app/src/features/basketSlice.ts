import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'remote_product_types/types/product';
import { BasketProduct, BasketItem, BasketState } from 'remote_basket_types/types/basket';

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
            // First check if the product exists in the basket
            const existingItemIndex = state.items.findIndex((item: BasketItem) => {
                return item.product.id === action.payload.id;
            });
            // If the product exists, update the quantity
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else { // If the product does not exist, add it to the basket
                const basketProduct = convertToBasketProduct(action.payload);
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
        