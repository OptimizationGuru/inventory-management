import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteProduct, toggleDisableProduct } from '../store/inventorySlice';
import { FaEdit, FaTrashAlt, FaEyeSlash } from 'react-icons/fa';
import { Product } from '../store/inventorySlice';
import { emptyInventoryMag as emptyInventoryMsg } from '../utils/constants';

interface InventoryTableProps {
  onEdit: (product: Product) => void;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ onEdit }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state: RootState) => state.inventory);

  const products = inventory?.products || []; // Default to an empty array

  return (
    <div className="overflow-y-auto max-h-[600px] border border-gray-300">
      <table className="min-w-full table-auto border-collapse border border-blue-800">
        <thead className="sticky top-0 bg-transparent text-white z-100 shadow-lg border border-gray-300">
          <tr className="bg-black bg-opacity-90 text-red-700">
            <th className="border border-gray-300 px-4  py-[8px] shadow-lg ">
              Name
            </th>
            <th className="border border-gray-300 px-4  py-[8px] shadow-lg">
              Price
            </th>
            <th className="border border-gray-300 px-4  py-[8px] shadow-lg">
              Category
            </th>
            <th className="border border-gray-300 px-4  py-[8px] shadow-lg">
              Quantity
            </th>
            <th className="border border-gray-300 px-4  py-[8px] shadow-lg">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product, idx: number) => (
            <tr key={product.name + idx} className="hover:bg-gray-600">
              <td className="border text-white border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border text-white border-gray-300 px-4 py-2">
                {product.price}
              </td>
              <td className="border text-white border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border text-white border-gray-300 px-4 py-2">
                {product.quantity}
              </td>
              <td className="border text-white border-gray-300 px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(product)}
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => dispatch(deleteProduct(product.id))}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete"
                >
                  <FaTrashAlt />
                </button>
                <button
                  onClick={() => dispatch(toggleDisableProduct(product.name))}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Toggle Disable"
                >
                  <FaEyeSlash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {products && !products.length && (
              <td colSpan={5} className="justify-center text-center text-white ">
               {emptyInventoryMsg}
              </td>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InventoryTable;
