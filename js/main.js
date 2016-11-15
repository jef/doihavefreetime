var age, workHours, sleep, drinking, smoking;
var avgAge = 71;
var daysInYear = 365.25; // days
var hoursInDay = 24; // hours
var minutesInHour = 60; // minutes
var cigDeath = 13.8; // minutes
var drinkDeath = 6.6; // hours

function onLoad() {
    age = document.getElementById('age');
    workHours = document.getElementById('workHours');
    sleep = document.getElementById('sleep');
    drinking = document.getElementById('drinking');
    smoking = document.getElementById('smoking');
}

function calculate() {
    var freeTimeInDay = (hoursInDay - sleep.value - (workHours.value / 7)); // hours
    var freeTimeInYear = freeTimeInDay * daysInYear; // hours
    var freeTimeRestOfLife = freeTimeInYear * (avgAge - age.value); // hours

    alert("you have " + freeTimeRestOfLife / hoursInDay / daysInYear + " years of free time.");
    alert("you have " + freeTimeRestOfLife / hoursInDay + " days of free time.");
    alert("you have " + freeTimeRestOfLife + " hours of free time.");
    alert("you have " + freeTimeRestOfLife * minutesInHour + " minutes of free time.");
}

function resetValues() {
    age.value = age.defaultValue;
    workHours.value = workHours.defaultValue;
    sleep.value = sleep.defaultValue;
    drinking.value = drinking.defaultValue;
    $('input[type=checkbox]').prop('checked', false);
}