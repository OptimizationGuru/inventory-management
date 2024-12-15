import React from 'react';
import { FaEdit, FaTrashAlt, FaEyeSlash } from 'react-icons/fa';
import { Product } from '../store/inventorySlice';

interface ProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  onToggleDisable?: (id: string) => void;
  disableActions?: boolean; // If true, all actions are disabled - User View
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
  onToggleDisable,
  disableActions = false,
}) => {
  console.log(products, disableActions, '*******');
  return (
    <div className="overflow-y-auto max-h-[600px] border border-gray-300">
      <table className="min-w-full table-auto border-collapse">
        <thead className="sticky top-0 bg-gray-950 text-white z-100 shadow-lg border border-gray-300">
          <tr
            className={`hover:bg-gray-600 text-white ${
              disableActions
                ? 'text-gray-950 pointer-events-none bg-gray-200 z-10'
                : 'bg-opacity-100'
            }`}
          >
            <th
              className={`border border-gray-300 px-4 py-[8px] shadow-lg  ${disableActions ? 'text-gray-900' : 'text-red-600'}`}
            >
              Name
            </th>
            <th
              className={`border border-gray-300 px-4 py-[8px] shadow-lg  ${disableActions ? 'text-gray-900' : 'text-red-600'}`}
            >
              Price
            </th>
            <th
              className={`border border-gray-300 px-4 py-[8px] shadow-lg  ${disableActions ? 'text-gray-900' : 'text-red-600'}`}
            >
              Category
            </th>
            <th
              className={`border border-gray-300 px-4 py-[8px] shadow-lg  ${disableActions ? 'text-gray-900' : 'text-red-600'}`}
            >
              Quantity
            </th>
            <th
              className={`border border-gray-300 px-4 py-[8px] shadow-lg  ${disableActions ? 'text-gray-900' : 'text-red-600'}`}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className={`hover:bg-gray-600 ${
                disableActions || product.isDisabled
                  ? 'bg-opacity-90 text-gray-500 pointer-events-none'
                  : 'text-white'
              }`}
            >
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.quantity}
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button
                  className={`${
                    disableActions || product.isDisabled
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-blue-500 hover:text-blue-700'
                  }`}
                  aria-label="Edit"
                  disabled={disableActions || product.isDisabled}
                  onClick={() => onEdit && onEdit(product)}
                >
                  <FaEdit />
                </button>
                <button
                  className={`${
                    disableActions || product.isDisabled
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-red-500 hover:text-red-700'
                  }`}
                  aria-label="Delete"
                  disabled={disableActions || product.isDisabled}
                  onClick={() => onDelete && onDelete(product.id)}
                >
                  <FaTrashAlt />
                </button>
                <button
                  className={`${
                    disableActions || product.isDisabled
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-green-400 hover:text-green-500'
                  }`}
                  aria-label="Toggle Disable"
                  disabled={disableActions}
                  onClick={() => onToggleDisable && onToggleDisable(product.id)}
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
              <td colSpan={5} className="justify-center text-center text-white">
                No products available.
              </td>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductTable;
