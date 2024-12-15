import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  FaBoxOpen,
  FaDollarSign,
  FaExclamationTriangle,
  FaTags,
} from 'react-icons/fa';

const Widgets: React.FC<{ isAdmin: boolean }> = ({ isAdmin }) => {
  const products = useSelector((state: RootState) => state.inventory.products);
  const [componentKey, setComponentKey] = useState(1);

  const [stats, setStats] = useState({
    totalProducts: products?.length || 0,
    totalValue:
      (products?.length &&
        products.reduce(
          (sum, p) =>
            sum +
            (parseFloat(p?.price.replace('$', '')) || 0) * (p?.quantity || 0),
          0
        )) ||
      0,
    outOfStock:
      (products?.length && products.filter((p) => p?.quantity === 0).length) ||
      0,
    categories:
      (products?.length && new Set(products.map((p) => p?.category)).size) || 0,
  });

  useEffect(() => {
    const totalProducts = (products?.length && products.length) || 0;
    const totalValue =
      (products?.length &&
        products.reduce(
          (sum, p) =>
            sum +
            (parseFloat(p.price.replace('$', '')) || 0) *
              (Number(p.quantity) || 0),
          0
        )) ||
      0;
    const outOfStock =
      (products?.length &&
        products.filter((p) => Number(p.quantity) === 0).length) ||
      0;
    const categories =
      (products?.length && new Set(products.map((p) => p.category)).size) || 0;

    setStats({ totalProducts, totalValue, outOfStock, categories });

    setComponentKey((prev) => prev++);
  }, [products]);

  const widgetData = [
    {
      id: 'total-products',
      label: 'Total Products',
      value: stats.totalProducts,
      icon: <FaBoxOpen size={35} />,
    },
    {
      id: 'total-value',
      label: 'Total Value',
      value: stats.totalValue,
      icon: <FaDollarSign size={35} />,
    },
    {
      id: 'out-of-stock',
      label: 'Out of Stock',
      value: stats.outOfStock,
      icon: <FaExclamationTriangle size={35} />,
    },
    {
      id: 'categories',
      label: 'Categories',
      value: stats.categories,
      icon: <FaTags size={35} />,
    },
  ];

  return (
    <div
      key={componentKey}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 rounded-lg"
    >
      {widgetData.map((widget, idx) => (
        <div
          key={widget.id + idx}
          className={`flex items-center p-4 rounded-lg ${
            isAdmin ? 'bg-gray-900 text-red-600' : 'bg-gray-200 text-black'
          }`}
        >
          <div className={` ${isAdmin ? ' ' : ''}`}>{widget.icon}</div>

          <div
            className={`flex flex-col gap-0 px-4 ${
              isAdmin ? 'bg-gray-900 text-red-600' : 'bg-gray-200 text-black'
            }`}
          >
            <h3 className={`flex items-center text-xl font-semibold`}>
              {widget.label}
            </h3>
            {/* <p className={`flex items-center text-md px-4 py-1 text-gray-200 `}>{widget.value}</p>
             */}
            <p
              className={` flex items-center text-md  py-1 gap-0 px-4 ${
                isAdmin ? 'text-white' : ' text-black'
              }`}
            >
              {widget.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Widgets;
