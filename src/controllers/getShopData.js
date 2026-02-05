import dataFromDB from '../models/getShopData.js';

/**
 * Controller to handle shop data retrieval.
 * This function will be implemented to fetch and return shop data based on the account ID.
 * @param {object} request - The request data
 */
export default async function getShopData() {
  const dataToSend = await dataFromDB();
  return dataToSend;
}
