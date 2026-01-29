import dataFromDB from '../models/getShopData.js';
/**
 * Controller to handle shop data retrieval.
 * This function will be implemented to fetch and return shop data based on the account ID.
 * @param {object} request - The request data
 */
export default function getShopData(request) {
  const host = request.headers.host;
  const protocol = request.protocol;
  const fullUrl = `${protocol}://${host}${request.originalUrl}`;

  const dataToSend = dataFromDB();
  return dataToSend;
}

