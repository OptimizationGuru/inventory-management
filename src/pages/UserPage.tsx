import React from 'react';
import UserLayout from '../layouts/UserLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductTable from '../components/ProductsTable';

const UserPage: React.FC<{ onToggleView: () => void; isAdmin: boolean }> = ({
  onToggleView,
  isAdmin,
}) => {
  const products = useSelector((state: RootState) => state.inventory.products);
  return (
    <UserLayout onToggleView={onToggleView} isAdmin={isAdmin}>
      {products && <ProductTable products={products} disableActions={true} />}
    </UserLayout>
  );
};

export default UserPage;
