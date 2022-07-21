import { apiCall as apiCallDev } from './dev';
import { apiCall as apiCallProd } from './prod';
const MODE = process.env.REACT_APP_MODE;

export default MODE === 'development' ? { apiCall: apiCallDev } : { apiCall: apiCallProd };
