/**
 * Will return the reservations that exist in db for a specific month and year
 */
const reservationsForMonth = [
  {
    id: 1,
    reservation_date: '04-08-2025',
    reservation_time: '10:00:00',
  },
  {
    id: 2,
    reservation_date: '04-08-2025',
    reservation_time: '10:30:00',
  },
  {
    id: 3,
    reservation_date: '04-08-2025',
    reservation_time: '11:00:00',
  },
  {
    id: 2,
    reservation_date: '04-08-2025',
    reservation_time: '11:30:00',
  },
];

/**
 * Retrieves reservations for a specific day
 * @param {string} selectedDay - The selected day to retrieve its reservations
 */
const retrieveDatesForDay = selectedDay => {
  return reservationsForMonth.filter(res => selectedDay === res.reservation_date);
};

export { retrieveDatesForDay };
