import React from 'react';
import { Product } from '../store/inventorySlice';
interface ProductTableProps {
    products: Product[];
    onEdit?: (product: Product) => void;
    onDelete?: (id: string) => void;
    onToggleDisable?: (id: string) => void;
    disableActions?: boolean;
}
declare const ProductTable: React.FC<ProductTableProps>;
export default ProductTable;
