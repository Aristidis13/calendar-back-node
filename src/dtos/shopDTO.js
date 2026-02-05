export const shopDTO = shop => ({
  id: shop.id,
  name: shop.name,
  address: shop.address
    ? `${shop.address.street} ${shop.address.street_number}, ${shop.address.city} ${shop.address.postal_code}`
    : null,
  phone: shop.phones ? shop.phones.map(p => p.value).join(',') : null,
  img: shop.image ? shop.image.path : null,
});

export default shopDTO;
