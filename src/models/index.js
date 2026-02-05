import sequelize from '../db/sequelize.js';
import Service from './service.js';
import Shop from './shop.js';
import Barber from './barber.js';
import Image from './image.js';
import Address from './address.js';
import Phone from './phone.js';
import Business from './business.js';

// Associations
Business.hasMany(Shop, { foreignKey: 'business_id', as: 'shops' });
Shop.belongsTo(Business, { foreignKey: 'business_id', as: 'business' });

Shop.belongsTo(Image, { foreignKey: 'img', as: 'image' });
Image.hasMany(Shop, { foreignKey: 'img' });

Barber.belongsTo(Image, { foreignKey: 'img', as: 'image' });
Image.hasMany(Barber, { foreignKey: 'img' });

Shop.belongsTo(Address, { foreignKey: 'address_id', as: 'address' });
Address.hasMany(Shop, { foreignKey: 'address_id' });

Shop.hasMany(Phone, { foreignKey: 'shop_id', as: 'phones' });
Phone.belongsTo(Shop, { foreignKey: 'shop_id' });

Barber.belongsTo(Shop, { foreignKey: 'shop_id', as: 'shop' });
Shop.hasMany(Barber, { foreignKey: 'shop_id', as: 'barbers' });

// many-to-many service <-> business
Business.belongsToMany(Service, {
  through: { model: 'business_have_service', timestamps: false },
  foreignKey: 'business_id',
  otherKey: 'service_id',
});
Service.belongsToMany(Business, {
  through: { model: 'business_have_service', timestamps: false },
  foreignKey: 'service_id',
  otherKey: 'business_id',
});

const models = {
  sequelize,
  Service,
  Shop,
  Barber,
  Image,
  Address,
  Phone,
  Business,
};

export default models;
