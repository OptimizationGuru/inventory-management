import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  FaBoxOpen,
  FaDollarSign,
  FaExclamationTriangle,
  FaTags,
} from 'react-icons/fa';

const Widgets: React.FC = () => {
  const products = useSelector((state: RootState) => state.inventory.products);
  if (products && products.length) console.log(products, 'products widgets');
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
    stats.totalProducts = (products?.length && products.length) || 0;
    stats.totalValue =
      (products?.length &&
        products.reduce(
          (sum, p) =>
            sum +
            (parseFloat(p.price.replace('$', '')) || 0) *
              (Number(p.quantity) || 0),
          0
        )) ||
      0;
    stats.outOfStock =
      (products?.length &&
        products.filter((p) => Number(p.quantity) === 0).length) ||
      0;
    stats.categories =
      (products?.length && new Set(products.map((p) => p.category)).size) || 0;

    setComponentKey((prev) => prev++);
    console.log(stats, 'stats');
  }, [products]);

  const widgetData = [
    {
      id: 'total-products',
      label: 'Total Products',
      value: stats.totalProducts,
      icon: <FaBoxOpen />,
    },
    {
      id: 'total-value',
      label: 'Total Value',
      value: stats.totalValue,
      icon: <FaDollarSign />,
    },
    {
      id: 'out-of-stock',
      label: 'Out of Stock',
      value: stats.outOfStock,
      icon: <FaExclamationTriangle />,
    },
    {
      id: 'categories',
      label: 'Categories',
      value: stats.categories,
      icon: <FaTags />,
    },
  ];

  return (
    <div
      key={componentKey}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
    >
      {widgetData.map((widget, idx) => (
        <div
          key={widget.id + idx}
          className="flex items-center p-4 bg-black rounded shadow"
        >
          <div className="text-xl text-red-600">{widget.icon}</div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-red-600">{widget.label}</h3>
            <p className="text-lg text-white font-bold">{widget.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Widgets;
