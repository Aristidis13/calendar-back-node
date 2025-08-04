import { convertTimeToUIFormat } from '../utils.js';
import dayjs from 'dayjs';
import { retrieveDatesForDay } from '../models/getReservations.js'; //mockData
import { shopWorkingData } from '../models/getShopWorkingData.js';

const HOUR_FORMAT = 'HH:mm:ss';

/**
 * Accepts 2 times, and calculates all the available slots for reservations between them
 * @param {string} openT - The time in hh:mm:ss where the shop opens
 * @param {string} closeT - The time in hh:mm:ss where the shop closes
 * @param {number} duration - The duration the reservation lasts. Default value is 30 minutes
 */
const createDaySlots = (openT, closeT, duration = 30, selectedDate = '0000-00-00') => {
  if (!openT || !closeT) return [];
  const openDatetime = selectedDate + ' ' + openT;
  const closeDatetime = selectedDate + ' ' + closeT;
  const dayslots = [];
  const openTime = dayjs(openDatetime);
  const closeTime = dayjs(closeDatetime);
  let nextReservationStartingTime = openTime;

  /**
   * Finds all the possible slots
   */
  while (nextReservationStartingTime.isBefore(closeTime, 'hour')) {
    dayslots.push(convertTimeToUIFormat(nextReservationStartingTime));
    nextReservationStartingTime = nextReservationStartingTime.add(duration, 'minute');
  }

  return dayslots;
};

/**
 * Returns the available slots
 */
const createAvailableSlots = (allPossibleSlotsForDay, allReservations) => {
  return allPossibleSlotsForDay.filter(slot =>
    allReservations.every(reservation_time => reservation_time !== slot),
  );
};

function daysInMonth(year, month) {
  // month is 0-indexed (0 = January, 11 = December)
  // new Date(year, month+1, 0) → last day of the given month
  return new Date(year, month, 0).getDate();
}

/**
 * Retrieves all available slots for a day
 * @param {object} req - The request object
 * @returns {object} - The image data
 */
const getDatesForDay = req => {
  const { selectedDate, barberId, shopId } = req.query || {};
  const { opening_time, closing_time, duration } = shopWorkingData;

  // Find all reservations for day
  const reservations = retrieveDatesForDay(selectedDate, parseInt(barberId), parseInt(shopId));

  // Create all possible slots for reservations
  const allPossibleSlotsForDay = createDaySlots(opening_time, closing_time, duration, selectedDate);

  // Excludes reservations and returns the rest
  const availableSlots = createAvailableSlots(allPossibleSlotsForDay, reservations);

  return { availableSlots };
};

export default getDatesForDay;
