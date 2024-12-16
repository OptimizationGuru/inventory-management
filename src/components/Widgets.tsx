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
    const totalProducts =
      (products?.length && products.filter((p) => !p.isDisabled).length) || 0;

    const totalValue = products.reduce((sum, p) => {
      return (
        sum +
        (p.isDisabled
          ? 0
          : (parseFloat(p.price.replace('$', '')) || 0) *
            (Number(p.quantity) || 0))
      );
    }, 0);

    const outOfStock =
      (products?.length &&
        products.filter((p) => !p.isDisabled && Number(p.quantity) === 0)
          .length) ||
      0;

    const categories =
      (products?.length &&
        new Set(products.filter((p) => !p.isDisabled).map((p) => p.category))
          .size) ||
      0;

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
      className="grid grid-cols-2 gap-3 sm:grid-cols-4  mb-6 rounded-lg custom-range:gap-8 custom-range:mx-4 "
    >
      {widgetData.map((widget, idx) => (
        <div
          key={widget.id + idx}
          className={`flex gap-2  items-center p-4 mx-3 rounded-lg  shadow-lg ${
            isAdmin
              ? 'border border-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 text-red-600'
              : 'bg-gray-300 text-black'
          }`}
        >
          <div
            className={isAdmin ? '   text-purple-600' : '   text-purple-400'}
          >
            {widget.icon}
          </div>

          <div
            className={`w-auto flex flex-col  font-semibold text-transparent bg-clip-text  bg-gradient-to-r  from-purple-400 to-green-500 rounded-full   ${
              isAdmin ? ' text-red-600' : ' text-black'
            }`}
          >
            <p
              className={`flex items-center  text-xs sm:text-sm md:text-lg mx-1 sm:mx-2 font-semibold break-words`}
            >
              {widget.label}
            </p>

            <p
              className={`flex items-center  text-xs sm:text-sm md:text-lg mx-1 sm:mx-2 font-semibold break-words ${
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
