const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

/**
 * The SERVICES object that contains info about the Calls from the client to the server.
 * This object is used to define the available services and their configurations.
 * It can be extended to include more services as needed.
 *
 * @type {Object}
 */
const SERVICES = {
  getShopData: {
    method: METHODS.GET,
    url: '/api/shops/{accountId}',
    /**
     * The services of the barber shop.
     */
    SERVICES: {
      name: 'services',
    },
    /**
     * The shops of the barber shop.
     */
    SHOPS: {
      name: 'shops',
    },
    /**
     * The barbers of the barber shop.
     */
    BARBERS: {
      name: 'barbers',
    },
    /**
     * The business data.
     */
    BUSINESS_DATA: {
      name: 'business_data',
    },
  },
};

export { METHODS, SERVICES };
