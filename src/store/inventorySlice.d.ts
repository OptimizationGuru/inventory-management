export interface Product {
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;
    id: string;
    isDisabled?: boolean;
}
declare const _default: import("redux").Reducer<{
    products: Product[];
}>;
export default _default;
export declare const setInventory: import("@reduxjs/toolkit").ActionCreatorWithPayload<Product[], "productsInventory/setInventory">, editProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<Product, "productsInventory/editProduct">, deleteProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "productsInventory/deleteProduct">, toggleDisableProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "productsInventory/toggleDisableProduct">;
