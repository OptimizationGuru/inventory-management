import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, Product } from '../store/inventorySlice';
import { AiOutlineClose } from 'react-icons/ai';

interface EditPopupProps {
  product: Product;
  onClose: () => void;
}

const EditPopup: React.FC<EditPopupProps> = ({ product, onClose }) => {
  const [formValues, setFormValues] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value ? value : '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editProduct(formValues));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-bodyColor bg-opacity-100 p-6 rounded shadow-lg w-full max-w-md relative border border-gray-300">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400  hover:text-gray-800"
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-white  tracking-wide">
          Edit Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" text-gray-400  block my-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full px-3 py-2 highlight  rounded-md bg-[#191B1E] border border-gray-300  text-white"
            />
          </div>
          <div className="mb-4">
            <label className=" text-gray-400  block my-1 text-sm font-medium">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formValues.price}
              onChange={handleChange}
              className="w-full px-3 py-2 highlight  rounded-md bg-[#191B1E] border border-gray-300  text-white"
            />
          </div>
          <div className="mb-4">
            <label className=" text-gray-400  block my-1 text-sm font-medium">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formValues.quantity}
              onChange={handleChange}
              className="w-full px-3 py-2 highlight  rounded-md bg-[#191B1E] border border-gray-300  text-white"
            />
          </div>
          <div className="mb-4">
            <label className=" text-gray-400  block my-1 text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formValues.category}
              onChange={handleChange}
              className="w-full px-3 py-2 highlight  rounded-md bg-[#191B1E] border border-gray-300  text-white"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-gray-800  hover:bg-[#191B1E] rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
