import React from 'react';
import { Product } from '../store/inventorySlice';
interface InventoryTableProps {
    onEdit: (product: Product) => void;
}
declare const InventoryTable: React.FC<InventoryTableProps>;
export default InventoryTable;
