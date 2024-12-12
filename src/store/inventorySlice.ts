import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
  isDisabled?: boolean;
}

interface InventoryState {
  products: Product[];
}

const initialState: InventoryState = { products: [] };

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setInventory(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    editProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex(
        (p) => p.name === action.payload.name
      );
      if (index >= 0) state.products[index] = action.payload;
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.name !== action.payload);
    },
    toggleDisableProduct(state, action: PayloadAction<string>) {
      const product = state.products.find((p) => p.name === action.payload);
      if (product) product.isDisabled = !product.isDisabled;
    },
  },
});

export const {
  setInventory,
  editProduct,
  deleteProduct,
  toggleDisableProduct,
} = inventorySlice.actions;
export default inventorySlice.reducer;
