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
            console.log("Current state", state.items);
            console.log("Incoming product", action.payload);
            
            // First check if the product exists in the basket
            const existingItemIndex = state.items.findIndex((item: BasketItem) => {
                console.log("Comparing IDs:", item.product.id, action.payload.id);
                return item.product.id === action.payload.id;
            });
            console.log("Existing item index", existingItemIndex);

            if (existingItemIndex !== -1) {
                console.log("Updating existing item quantity");
                state.items[existingItemIndex].quantity += 1;
            } else {
                console.log("Converting and adding new item");
                const basketProduct = convertToBasketProduct(action.payload);
                state.items.push({
                    product: basketProduct,
                    quantity: 1
                });
            }
            console.log("New state", state.items);
        },
    },
});

// Export actions
export const { addItem } = basketSlice.actions;

// Export reducer
export default basketSlice.reducer;
        