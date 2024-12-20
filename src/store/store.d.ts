export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    inventory: {
        products: import("./inventorySlice").Product[];
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        inventory: {
            products: import("./inventorySlice").Product[];
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
