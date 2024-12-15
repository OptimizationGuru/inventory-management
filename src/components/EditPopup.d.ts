import React from 'react';
import { Product } from '../store/inventorySlice';
interface EditPopupProps {
    product: Product;
    onClose: () => void;
}
declare const EditPopup: React.FC<EditPopupProps>;
export default EditPopup;
