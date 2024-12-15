import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
  id: string;
  isDisabled?: boolean;
}

const initialState = {
  products: [] as Product[],
};

const inventorySlice = createSlice({
  name: 'productsInventory',
  initialState,
  reducers: {
    setInventory(state, action: PayloadAction<Product[]>) {
      if (Array.isArray(action.payload)) {
        state.products = state.products || [];

        state.products.length = 0;

        const newProducts = action.payload.reduce((acc, item) => {
          acc.push(item);
          return acc;
        }, [] as Product[]);

        state.products.push(...newProducts);
      } else {
        console.error('Invalid payload for setInventory: Expected an array.');
      }
    },
    editProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index >= 0) state.products[index] = action.payload;
    },

    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },

    toggleDisableProduct(state, action: PayloadAction<string>) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.isDisabled = !product.isDisabled;
      }
    },
  },
});

export default inventorySlice.reducer;
export const {
  setInventory,
  editProduct,
  deleteProduct,
  toggleDisableProduct,
} = inventorySlice.actions;
