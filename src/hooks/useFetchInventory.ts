import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Product, setInventory } from '../store/inventorySlice';
import { v4 as uuidv4 } from 'uuid';
import { endpointUrl, errMsgOne } from '../utils/constants';

// Function to generate unique ID
const generateUniqueId = () => {
  return uuidv4();
};

// Function to add unique ID to each entry
const addUniqueIdToEntries = (data: Product[]) => {
  return data.map((item) => ({
    ...item,
    isDisabled: false,
    id: generateUniqueId(),
  }));
};

const useFetchInventory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(endpointUrl);
        const inventoryData = addUniqueIdToEntries(response.data);
        await dispatch(setInventory(inventoryData));
      } catch (error) {
        console.error(errMsgOne, error);
      }
    };
    fetchInventory();
  }, [dispatch]);
};

export default useFetchInventory;
