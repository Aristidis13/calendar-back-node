export const barberDTO = barber => ({
  id: barber.id,
  name: barber.name,
  img: barber.image ? barber.image.path : null,
  shop_id: barber.shop_id,
});

export default barberDTO;
