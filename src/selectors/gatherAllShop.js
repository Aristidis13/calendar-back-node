import models from '../models/index.js';

const gatherAllShop = async () => {
  const shops = await models.Shop.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: models.Address,
        as: 'address',
        attributes: ['street', 'street_number', 'city', 'postal_code'],
      },
      { model: models.Phone, as: 'phones', attributes: ['value'] },
      { model: models.Image, as: 'image', attributes: ['path'] },
    ],
    order: [['id', 'ASC']],
  });

  return shops;
};

export default gatherAllShop;
