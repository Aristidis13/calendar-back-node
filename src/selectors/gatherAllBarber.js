import models from '../models/index.js';

const gatherAllBarber = async () => {
  const barbers = await models.Barber.findAll({
    attributes: ['id', 'name', 'shop_id'],
    /**
     * Adds the associated image to the result set, including only the 'path' attribute from the Image model.
     */
    include: [{ model: models.Image, as: 'image', attributes: ['path'] }],
    order: [['id', 'ASC']],
  });

  return barbers;
};

export default gatherAllBarber;
