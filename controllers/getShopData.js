/**
 * Controller to handle shop data retrieval.
 * This function will be implemented to fetch and return shop data based on the account ID.
 */
export default function getShopData() {
  // Implementation will go here
  // This could involve fetching data from a database.
  // For now, we return a mock
  return {
    services: [
      {
        id: 0,
        label: 'Παιδικό (ηλικίες κάτω των 14)',
        price: 10,
        img: '/imgs/kids.jpg',
      },
      {
        id: 1,
        label: 'Κούρεμα και Περιποίηση Γενειάδας',
        price: 15,
        img: '/imgs/beard.webp',
      },
      { id: 2, label: 'Κούρεμα', price: 12, img: '/imgs/haircut.png' },
      { id: 3, label: 'Ξυρισμα', price: 2, img: '/imgs/shave.jpg' },
    ],
  };
}

