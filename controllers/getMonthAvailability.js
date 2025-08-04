import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Returns how many days the given month of the year has
 */
const createAvailableDays = selectedDate => {
  const [year, month] = selectedDate.split('-') || [];
  const numOfDaysInMonth = new Date(year, month, 0).getDate();

  return numOfDaysInMonth;
};

/**
 * For a specified maonth and year it receives the days the user can select
 * If the day is Sunday or the day has no available reservations to select
 * then it seems disabled.
 */
const getMonthAvailability = req => {
  const { barberId: barberIdAsString, shopId: shopIdAsString, selectedDate = '' } = req.query;
  const [year, month] = selectedDate.split('-') || [];
  const barberId = parseInt(barberIdAsString);
  const shopId = parseInt(shopIdAsString);
  const days = [];

  /**
   * Gets the selected month and year and gets an array with every day
   */
  const numOfDays = createAvailableDays(selectedDate);
  console.log(selectedDate + ': numOfDays ' + numOfDays);

  for (let i = 1; i <= numOfDays; i++) {
    days.push({
      date: dayjs(`${year}-${month}-${i.toPrecision(2)}`).format(DATE_FORMAT),
      is_full: Math.random() > 0.5 || i === 10 || i === 17 || i === 24 || i === 31,
    });
  }

  return {
    days,
  };
};

export default getMonthAvailability;
