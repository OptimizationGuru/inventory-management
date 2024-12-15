import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './inventorySlice';
import throttle from 'lodash/throttle';
import { localStorageKey } from '../utils/constants';

const saveState = throttle((state: RootState) => {
  try {
    // Fetch previously saved state
    const serializedPrevState = localStorage.getItem(localStorageKey);
    const prevState = serializedPrevState
      ? JSON.parse(serializedPrevState)
      : null;

    // Only save if the current state differs from the previous state
    if (
      prevState &&
      JSON.stringify(prevState.inventory.products) ===
        JSON.stringify(state.inventory.products)
    ) {
      return;
    }

    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
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
