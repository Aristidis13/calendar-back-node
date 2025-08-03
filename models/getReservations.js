import { convertTimeToUIFormat } from '../utils.js';

/**
 * Will return the reservations that exist in db for a specific month and year
 */
const reservationsForMonth = [
  {
    id: 1,
    date: '2025-08-12',
    time: '10:00:00',
  },
  {
    id: 2,
    date: '2025-08-27',
    time: '10:30:00',
  },
  {
    id: 3,
    date: '2025-08-06',
    time: '11:00:00',
  },
  {
    id: 4,
    date: '2025-08-04',
    time: '11:30:00',
  },
  {
    id: 5,
    date: '2025-08-12',
    time: '10:00:00',
  },
  {
    id: 6,
    date: '2025-08-05',
    time: '10:30:00',
  },
  {
    id: 7,
    date: '2025-08-05',
    time: '11:00:00',
  },
  {
    id: 8,
    date: '2025-08-05',
    time: '11:30:00',
  },
];

/**
 * Retrieves reservations for a specific day
 * @param {string} selectedDay - The selected day to retrieve its reservations
 */
const retrieveDatesForDay = selectedDay =>
  reservationsForMonth
    .filter(res => selectedDay === res.date)
    .map(res => convertTimeToUIFormat(res.time));

export { retrieveDatesForDay };
