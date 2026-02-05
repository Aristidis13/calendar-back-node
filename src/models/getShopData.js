import gatherAllService from '../selectors/gatherAllService.js';
import gatherAllShop from '../selectors/gatherAllShop.js';
import gatherAllBarber from '../selectors/gatherAllBarber.js';
import { serviceDTO } from '../dtos/serviceDTO.js';
import { shopDTO } from '../dtos/shopDTO.js';
import { barberDTO } from '../dtos/barberDTO.js';

const getShopData = async () => {
  const [services, shops, barbers] = await Promise.all([
    gatherAllService(),
    gatherAllShop(),
    gatherAllBarber(),
  ]);

  // Map results to the frontend shape using DTO mappers
  const servicesDTO = services.map(s => serviceDTO(s));
  const shopsDTO = shops.map(s => shopDTO(s));
  const barbersDTO = barbers.map(b => barberDTO(b));

  return { services: servicesDTO, shops: shopsDTO, barbers: barbersDTO };
};

export default getShopData;
