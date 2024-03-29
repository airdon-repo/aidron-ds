import { isBefore, isAfter } from 'date-fns';

export const THIS_YEAR = +(new Date().getFullYear());

// 1 => January, 12 => December
export const THIS_MONTH = +(new Date().getMonth()) + 1;

export const WEEK_DAYS = {
  Sunday: 'D',
  Monday: 'S',
  Tuesday: 'T',
  Wednesday: 'Q',
  Thursday: 'Q',
  Friday: 'S',
  Saturday: 'S'
};

export const CALENDAR_MONTHS = {
  January: 'Jan',
  February: 'Fev',
  March: 'Mar',
  April: 'Abr',
  May: 'Mai',
  June: 'Jun',
  July: 'Jul',
  August: 'Ago',
  September: 'Set',
  October: 'Out',
  November: 'Nov',
  December: 'Dez'
};

export const CALENDAR_WEEKS = 6;

// Adds leading zeroes until length is reached
// zeroPad(5, 2) => '05'
export const zeroPad = (value, length) => (`${value}`.padStart(length, '0'));

// (int) Number days in a month for a given year from 28 - 31
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;

  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
      ? 30
      : 31;
};

// (int) First day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => (+(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1);

export const isDate = (date) => {
  const isIt = Object.prototype.toString.call(date) === '[object Date]';
  const isValidDate = date && !Number.isNaN(date.valueOf());
  return isIt && isValidDate;
};

export const isDateRange = (dates) => {
  if (!dates || typeof dates === 'undefined' || dates.length <= 1) return false;
  return dates.length > 1 && !dates.map((date) => isDate(date)).includes(false);
};

export const isSameMonth = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateMonth = +(basedate.getMonth()) + 1;
  const basedateYear = basedate.getFullYear();

  const dateMonth = +(date.getMonth()) + 1;
  const dateYear = date.getFullYear();

  return (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
};

export const isSameDay = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateDate = basedate.getDate();
  const basedateMonth = +(basedate.getMonth()) + 1;
  const basedateYear = basedate.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = +(date.getMonth()) + 1;
  const dateYear = date.getFullYear();

  return (+basedateDate === +dateDate)
    && (+basedateMonth === +dateMonth)
    && (+basedateYear === +dateYear);
};

export const isInRange = (dateFrom, dateTo, dateCheck) => {
  if (!isDate(dateFrom) && !isDate(dateTo)) {
    return false;
  }
  if (isSameDay(dateFrom, dateCheck) || isSameDay(dateTo, dateCheck)) {
    return true;
  }
  return (isBefore(dateCheck, dateTo) && isAfter(dateCheck, dateFrom));
};

export const getDateISO = (date = new Date()) => {
  if (!isDate(date)) return null;
  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2)
  ].join('-');
};

// ({month, year}) Gets the month and year before the given month and year
// For example: getPreviousMonth(1, 2000) => {month: 12, year: 1999}
// while: getPreviousMonth(12, 2000) => {month: 11, year: 2000}
export const getPreviousMonth = (month, year) => {
  const prevMonth = (month > 1) ? month - 1 : 12;
  const prevMonthYear = (month > 1) ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

// ({month, year}) Gets the month and year after the given month and year
// For example: getNextMonth(1, 2000) => {month: 2, year: 2000}
// while: getNextMonth(12, 2000) => {month: 1, year: 2001}
export const getNextMonth = (month, year) => {
  const nextMonth = (month < 12) ? month + 1 : 1;
  const nextMonthYear = (month < 12) ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};

export const getPreviousYear = (year) => {
  return { year: year - 1 };
};

export const getNextYear = (year) => {
  return { year: year + 1 };
};

/* Calendar builder for mont and year
 * Returns an array of the calendar dates each in [YYYY, MM, DD] format
 */
const Calendar = (month = THIS_MONTH, year = THIS_YEAR) => {
  // Get number of days in the month and the month's first day
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  // Total of 42 days (6 weeks by default) to bedisplayed on the calendar
  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);

  // Get the previous and next months and years
  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

  // Get number of days in previous month
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  // Builds dates to be displayed from previous month
  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from current month
  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from next month
  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  // Combines all dates from previous, current and next months
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};

export default Calendar;
