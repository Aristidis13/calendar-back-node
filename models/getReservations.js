import { convertTimeToUIFormat } from '../utils.js';

/**
 * Will return the reservations that exist in db for a specific month and year
 */
const reservationsForMonth = [
  {
    id: 1,
    reservation_date: '2025-08-12',
    reservation_time: '10:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 2,
    reservation_date: '2025-08-27',
    reservation_time: '10:30:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 3,
    reservation_date: '2025-08-06',
    reservation_time: '11:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 4,
    reservation_date: '2025-08-04',
    reservation_time: '11:30:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 5,
    reservation_date: '2025-08-12',
    reservation_time: '10:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 6,
    reservation_date: '2025-08-05',
    reservation_time: '10:30:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 7,
    reservation_date: '2025-08-05',
    reservation_time: '11:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 8,
    reservation_date: '2025-08-05',
    reservation_time: '11:30:00',
    shop_id: 1,
    barber_id: 1,
  },
];

/**
 * Retrieves reservations for a specific day
 * @param {string} selectedDay - The selected day to retrieve its reservations
 * @param {number} barberId - The id of the barber
 * @param {number} shopId - The id of the shop
 * @returns - the available dates
 */
const retrieveDatesForDay = (selectedDay, barberId, shopId) =>
  reservationsForMonth
    .filter(res => selectedDay === res.reservation_date && res.barber_id === barberId && res.shop_id === shopId)
    .map(res => convertTimeToUIFormat(res.reservation_time));

export { retrieveDatesForDay };
