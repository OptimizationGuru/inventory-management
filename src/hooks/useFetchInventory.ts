import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setInventory } from '../store/inventorySlice';
import {
  endpointUrl,
  errMsgOne,
  errMsgTwo,
  mockApiUrl,
  tooManyRequestErrorCode,
} from '../utils/constants';

const useFetchInventory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(endpointUrl);
        await dispatch(setInventory(response.data));
      } catch (error) {
        if (
          error?.response &&
          error?.response.status === tooManyRequestErrorCode
        ) {
          console.error(errMsgOne);
        } else {
          console.error(errMsgTwo, error);
        }
      }
    };

    fetchInventory();
  }, [dispatch]);
};

export default useFetchInventory;
