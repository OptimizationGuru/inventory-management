import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { deleteProduct, toggleDisableProduct } from '../store/inventorySlice';
import EditPopup from '../components/EditPopup';
import { Product } from '../store/inventorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductTable from '../components/ProductsTable';

const AdminPage: React.FC<{ onToggleView: () => void; isAdmin: boolean }> = ({
  onToggleView,
  isAdmin,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const products = useSelector((state: RootState) => state.inventory.products);
  const dispatch = useDispatch();

  const editProduct_ = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const deleteProduct_ = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const toggleDisableProduct_ = (id: string) => {
    dispatch(toggleDisableProduct(id));
  };

  return (
    <AdminLayout onToggleView={onToggleView} isAdmin={isAdmin}>
      {products && (
        <ProductTable
          products={products}
          onEdit={editProduct_}
          onDelete={deleteProduct_}
          onToggleDisable={toggleDisableProduct_}
          disableActions={false}
        />
      )}
      {isEditing && selectedProduct && (
        <EditPopup
          product={selectedProduct}
          onClose={() => setIsEditing(false)}
        />
      )}
    </AdminLayout>
  );
};

export default AdminPage;
