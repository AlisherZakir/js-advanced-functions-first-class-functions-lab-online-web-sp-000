// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = mult => fare => fare * mult;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
selectDifferentDrivers = (drivers, func) => func(drivers);
