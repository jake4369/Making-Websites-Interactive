/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const value = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

const len = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

renderMeasurements = function () {
  const metersToFeet = (value.value * 3.281).toFixed(3);
  const feetToMeters = (value.value / 3.281).toFixed(3);
  const litresToGallons = (value.value * 0.264).toFixed(3);
  const gallonsToLitres = (value.value / 0.264).toFixed(3);
  const kiloToPounds = (value.value * 2.204).toFixed(3);
  const poundsToKilo = (value.value / 2.204).toFixed(3);

  len.textContent = `${value.value} meters = ${metersToFeet} feet | ${value.value} feet = ${feetToMeters} meters`;
  volume.textContent = `${value.value} liters = ${litresToGallons} gallons | ${value.value} gallons = ${gallonsToLitres} liters`;
  mass.textContent = `${value.value} kilos = ${kiloToPounds} pounds | ${value.value} pounds = ${poundsToKilo} kilos`;
};

convertBtn.addEventListener("click", renderMeasurements);
