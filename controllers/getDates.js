import dayjs from 'dayjs';
import { reservationsForMonth as reservations } from '../models/getReservations.js'; //mockData

const HOUR_FORMAT = 'HH:mm:ss';

/**
 * Accepts 2 times, and calculates all the available slots for reservations between them
 * @param {string} openT - The time in hh:mm:ss where the shop opens
 * @param {string} closeT - The time in hh:mm:ss where the shop closes
 * @param {number} duration - The duration the reservation lasts. Default value is 30 minutes
 */
const createDaySlots = (openT, closeT, duration = 30) => {
  if (!openT || !closeT) return [];
  const daySlots = [openT];
  const openTime = new dayjs(openT, HOUR_FORMAT);
  let nextReservationStartingTime = openTime;

  /**
   * Finds all the possible slots
   */
  while (nextReservationStartingTime.isBefore(closeT, 'minute')) {
    const nextSlot = nextReservationStartingTime.add(duration, 'minute').format(HOUR_FORMAT);
    daySlots.push(nextSlot);
  }

  return dayslots;
};

/**
 * Returns the available slots
 */
const createAvailableSlots = (allPossibleSlotsForDay, allReservations) => {
  return allPossibleSlotsForDay.filter(slot =>
    allReservations.every(reservation => reservation.reservation_time !== slot),
  );
};

function daysInMonth(year, month) {
  // month is 0-indexed (0 = January, 11 = December)
  // new Date(year, month+1, 0) → last day of the given month
  return new Date(year, month, 0).getDate();
}

/**
 * Retrieves all dates for a month
 * @param {object} req - The request object
 * @returns {object} - The image data
 */
const getDates = req => {
  const { year, month } = req.query || {};
  const { opening_time, closing_time, duration } = dbData;
  const monthObj = [];

  // Create all possible slots for reservations
  const allPossibleSlotsForDay = createDaySlots(opening_time, closing_time, duration);
  const daysOfMonth = daysInMonth(year, month);

  for (let day = 1; day <= daysOfMonth; day++) {
    const availableSlots = createAvailableSlots(allPossibleSlotsForDay, reservations);
    monthObj.push(availableSlots);
  }

  return monthObj;
};

export default getDates;
