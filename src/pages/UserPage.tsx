import React from 'react';
import UserLayout from '../layouts/UserLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FaEdit, FaTrashAlt, FaEyeSlash } from 'react-icons/fa';

const UserPage: React.FC<{ onToggleView: () => void; isAdmin: boolean }> = ({
  onToggleView,
  isAdmin,
}) => {
  const products = useSelector((state: RootState) => state.inventory.products);
  return (
    <UserLayout onToggleView={onToggleView} isAdmin={isAdmin}>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.quantity}
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button disabled className="text-gray-400 cursor-not-allowed">
                  <FaEdit />
                </button>
                <button disabled className="text-gray-400 cursor-not-allowed">
                  <FaTrashAlt />
                </button>
                <button disabled className="text-gray-400 cursor-not-allowed">
                  <FaEyeSlash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
};

export default UserPage;
