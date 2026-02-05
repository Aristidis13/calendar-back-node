import models from '../models/index.js';

/**
 * The gatherAllService function retrieves all services from the database,
 * selecting the id, label, and price attributes,
 * and orders them by id in ascending order.
 *
 * @returns the services
 */
const gatherAllService = async () => {
  const services = await models.Service.findAll({
    attributes: ['id', 'label', 'price'],
    order: [['id', 'ASC']],
  });

  return services;
};

export default gatherAllService;
