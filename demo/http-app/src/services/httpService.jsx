import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logService';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Unexpected (network down, serverdown, db down, bug)
  // - Log them
  // - Display a generic and friendly error message
  if (!expectedError) {
    // console.log('Loggin the error', error);
    logger.log(error);
    toast.error('Unexpected error occurred!');    
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
