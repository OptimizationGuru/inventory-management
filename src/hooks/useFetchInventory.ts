import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setInventory } from '../store/inventorySlice';
import { endpointUrl } from '../utils/constants';

const useFetchInventory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(endpointUrl);
        dispatch(setInventory(response.data));
      } catch (error) {
        if (error?.response && error?.response.status === 429) {
          console.error('Too many requests. Please try again later.');
        } else {
          console.error('Error fetching inventory:', error);
        }
      }
    };

    fetchInventory();
  }, [dispatch]);
};

export default useFetchInventory;
