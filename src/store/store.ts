import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './inventorySlice';
import throttle from 'lodash/throttle';
import { localStorageKey } from '../utils/constants';

const saveState = throttle((state: RootState) => {
  try {
    const currentInventory = state.inventory;
    const previousInventory = JSON.parse(
      localStorage.getItem(localStorageKey) || '[]'
    );

    if (
      JSON.stringify(currentInventory) !== JSON.stringify(previousInventory)
    ) {
      const serializedState = JSON.stringify(currentInventory);
      localStorage.setItem(localStorageKey, serializedState);
    }
  } catch (err) {
    console.error('Error saving state:', err);
  }
}, 200);

const loadInitialState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState) {
      return { inventory: JSON.parse(serializedState) };
    }
  } catch (err) {
    console.error('Error loading state:', err);
  }
  return { inventory: { products: [] } };
};

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
  preloadedState: loadInitialState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
