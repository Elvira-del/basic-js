const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
 const season = [
  {
   name: "winter",
   firstMonth: 11,
   secondMonth: 0,
   lastMonth: 1,
  },
  {
   name: "spring",
   firstMonth: 2,
   secondMonth: 3,
   lastMonth: 4,
  },
  {
   name: "summer",
   firstMonth: 5,
   secondMonth: 6,
   lastMonth: 7,
  },
  {
   name: "autumn",
   firstMonth: 8,
   secondMonth: 9,
   lastMonth: 10,
  },
 ];

 if (date === undefined) {
  return "Unable to determine the time of year!";
 }

 if (isNaN(Date.parse(date)) || !(date instanceof Date)) {
  throw new Error("Invalid date!");
 }

 for (let i = 0; i < season.length; i++) {
  if (
   date.getMonth() === season[i].firstMonth ||
   date.getMonth() === season[i].secondMonth ||
   date.getMonth() === season[i].lastMonth
  ) {
   return season[i].name;
  }
 }
}

module.exports = {
 getSeason,
};
