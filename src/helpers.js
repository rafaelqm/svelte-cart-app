/**
 * Transforms money string (9.999,9) to float
 *
 * @param {String} money
 *
 * @return {Number}
 */
function moneyToFloat(money, from, to) {
  from = from == undefined ? "," : from;
  to = to == undefined ? "." : to;

  return parseFloat(money.replace(/\./g, "").replace(from, to), 10);
}

/**
 * Transforms money string (9.999,9) to float
 *
 * @param {Number} number
 *
 * @return {String}
 */
function floatToMoney(number, prefix, locale) {
  prefix = prefix == undefined ? "$ " : prefix;
  locale = locale == undefined ? "en-US" : locale;
  return (
    prefix +
    number.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export { moneyToFloat, floatToMoney };
