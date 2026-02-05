export const serviceDTO = service => ({
  id: service.id,
  label: service.label,
  price: Number(service.price),
});

export default serviceDTO;
