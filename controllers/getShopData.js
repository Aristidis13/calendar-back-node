/**
 * Controller to handle shop data retrieval.
 * This function will be implemented to fetch and return shop data based on the account ID.
 * @param {object} request - The request data
 */
export default function getShopData(request) {
  const host = request.headers.host;
  const protocol = request.protocol;
  const fullUrl = `${protocol}://${host}${request.originalUrl}`;

  return {
    services: [
      {
        id: 0,
        label: 'Παιδικό (ηλικίες κάτω των 14)',
        price: 10,
      },
      {
        id: 1,
        label: 'Κούρεμα και Περιποίηση Γενειάδας',
        price: 15,
      },
      { id: 2, label: 'Κούρεμα', price: 12 },
      { id: 3, label: 'Ξυρισμα', price: 2 },
    ],
    shops: [
      {
        id: 0,
        name: 'Lobby 1',
        address: 'Patron Klaous 36, Patra 263 35',
        phone: '26105555555',
        img: 1,
      },
      {
        id: 1,
        name: 'Gobbi desert',
        address: 'Agiou Georgiou 49, Patra 264 32',
        phone: '2610645876',
        img: 2,
      },
      {
        id: 2,
        name: '',
        address: 'Kolokotroni 18, Patra 262 90',
        img: 3,
      },
    ],
    barbers: [
      {
        id: 0,
        name: 'John',
        img: 4, //'/imgs/john.jpg',
      },
      {
        id: 1,
        name: 'Nick',
        img: 5, //'/imgs/nick.jpg',
      },
      {
        id: 2,
        name: 'Ilias',
        img: 6, //'/imgs/ilias.jpg',
      },
    ],
  };
}

