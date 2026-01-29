import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Creates mock data for dates
 * @param {Number} year - The year we want to have the reservation
 * @param {Number} month - The month we want to close the reservation
 * @param {Number} numOfDays - The number of days of the month we want to close the reservation
 */
const createMockDates = (year, month, numOfDays) => {
  const days = [];
  for (let i = 1; i <= numOfDays; i++) {
    days.push({
      date: dayjs(`${year}-${month}-${i.toPrecision(2)}`).format(DATE_FORMAT),
      is_full: Math.random() > 0.5 || i === 10 || i === 17 || i === 24 || i === 31, //Mock
    });
  }
  return days;
};

/**
 * Returns how many days the given month of the year has
 */
const createAvailableDays = selectedDate => {
  const [year, month] = selectedDate.split('-') || [];
  const numOfDaysInMonth = new Date(year, month, 0).getDate();

  return numOfDaysInMonth;
};

/**
 * For a specified month and year it receives the days the user can select.
 * If the day is Sunday or the day has no available reservations to select the day has `is_full` as disabled.
 */
const getMonthAvailability = req => {
  const {
    barberId: barberIdAsString,
    shopId: shopIdAsString,
    /*
     * Will be used by DB to extract for specific shop and barber the hours that are available
     */
    selectedDate = '',
  } = req.query;
  const [year, month] = selectedDate.split('-') || [];

  /**
   * Will be used by DB to extract data for the specific barber
   */
  const barberId = parseInt(barberIdAsString);
  /**
   * Will be used by DB to extract data for the specific shop
   */
  const shopId = parseInt(shopIdAsString);

  /**
   * Gets the selected month and year and gets an array with every day
   */
  const numOfDays = createAvailableDays(selectedDate);

  return {
    days: createMockDates(numOfDays),
  };
};

export default getMonthAvailability;
