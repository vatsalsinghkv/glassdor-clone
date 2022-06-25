/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = () => `id${Math.random().toString(16).slice(2)}`;

/**
 * Format date time to any format
 * @param {Object} date date object
 * @param {Object} format object with configuration
 * @returns {String} date in string format
 */

export const dateTimeFormatter = (date, format) => {
  return new Intl.DateTimeFormat(navigator?.language ?? 'en-US', format).format(
    date
  );
};

/**
 * Format the number according to country's standards
 * @param {number} value Number which should be formatted
 * @returns {number} Number formatted according to the user's country
 */

export const numberFormatter = value => {
  return new Intl.NumberFormat(navigator?.language ?? 'en-US').format(value);
};
