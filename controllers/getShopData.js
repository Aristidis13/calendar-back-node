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
        img: '/public/imgs/lobby1.jpg',
      },
      {
        id: 1,
        name: 'Lobby 2',
        address: 'Agiou Konstantinou 49, Patra 264 42',
        phone: '2610645876',
        img: '/public/imgs/lobby2.jpg',
      },
      {
        id: 2,
        name: "Johny's Lobby",
        address: 'Karaiskaki 183, Patra 262 21',
        img: '/public/imgs/shop3.jpg',
      },
    ],
    barbers: [
      {
        id: 0,
        name: 'John',
        img: '/imgs/john.jpg',
      },
      {
        id: 1,
        name: 'Nick',
        img: '/imgs/nick.jpg',
      },
      {
        id: 2,
        name: 'Ilias',
        img: '/imgs/ilias.jpg',
      },
    ],
  };
}

