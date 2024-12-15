import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import InventoryTable from '../components/InventoryTable';
import EditPopup from '../components/EditPopup';
import { Product } from '../store/inventorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const AdminPage: React.FC<{ onToggleView: () => void; isAdmin: boolean }> = ({
  onToggleView,
  isAdmin,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const inventory = useSelector((state: RootState) => state.inventory);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  return (
    <AdminLayout onToggleView={onToggleView} isAdmin={isAdmin}>
      {inventory && <InventoryTable onEdit={handleEdit} />}
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
