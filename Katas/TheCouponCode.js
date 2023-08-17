// Given 2 strings and two dates, return a boolean based on the differences between the 2 strings and 2 dates:

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);