import { convertTimeToUIFormat } from '../utils.js';

/**
 * Will return the reservations that exist in db for a specific month and year
 */
const reservationsForMonth = [
  {
    id: 1,
    date: '2025-08-12',
    time: '10:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 2,
    date: '2025-08-27',
    time: '10:30:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 3,
    date: '2025-08-06',
    time: '11:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 4,
    date: '2025-08-04',
    time: '11:30:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 5,
    date: '2025-08-12',
    time: '10:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 6,
    date: '2025-08-05',
    time: '10:30:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 7,
    date: '2025-08-05',
    time: '11:00:00',
    shop_id: 1,
    barber_id: 1,
  },
  {
    id: 8,
    date: '2025-08-05',
    time: '11:30:00',
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
    .filter(res => selectedDay === res.date && res.barber_id === barberId && res.shop_id === shopId)
    .map(res => convertTimeToUIFormat(res.time));

export { retrieveDatesForDay };
