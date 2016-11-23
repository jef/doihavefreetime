/*
author: jeffrey lecompte
github: https://github.com/jeffreylec
website: https://jef.rocks
*/

$(document).ready(function () {
    var age, workHours, sleep, drinking, smoking, freeTimeInDay, freeTimeInYear, freeTimeRestOfLife,
        maleFemale, avgAge, vacationWork, chores, retireAge, freeTimeVacation, freeTimeAfterRetire;
    var daysInYear = 365.25; // days
    var hoursInDay = 24; // hours
    var minutesInHour = 60; // minutes
    var cigDeath = 13.8; // minutes
    var drinkDeath = 6.6; // hours

    $('#submitButton').click(function () {
        age = $('#age').val();
        workHours = $('#workHours').val();
        sleep = $('#sleep').val();
        vacationWork = $('#vacationWork').val();
        retireAge = $('#retireAge').val();
        chores = $('#chores').val();
        drinking = $('#drinking').val();
        smoking = $('#smoking').val();
        maleFemale = $('input[name=maleFemale]:checked').val();

        // male or female
        if (maleFemale === "male") avgAge = 76;
        else if (maleFemale === "female") avgAge = 81;
        else avgAge = (76 + 81) / 2;

        // calculate total vacation
        if (vacationWork > 0) freeTimeVacation = (workHours * vacationWork) * (avgAge - age);
        else freeTimeVacation = 0;

        // calculate retirement
        if (retireAge > 0) freeTimeAfterRetire = (avgAge - retireAge) * hoursInDay * daysInYear; // hours for x years
        else freeTimeAfterRetire = 0;

        freeTimeInDay = hoursInDay - sleep - (workHours / 7)
            - (chores / 7) - ((smoking * cigDeath) / 60) - ((drinking * drinkDeath) / 7); // hours
        freeTimeInYear = freeTimeInDay * daysInYear; // hours
        freeTimeRestOfLife = freeTimeInYear * (avgAge - age)
            + freeTimeAfterRetire + freeTimeVacation; // hours

        $('#freeTimeDiv').fadeIn('slow');

        $('#buttonYears').addClass('btn-primary');
        $('#buttonDays').removeClass('btn-primary');
        $('#buttonHours').removeClass('btn-primary');
        $('#buttonMinutes').removeClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife / hoursInDay / daysInYear) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("you have " + time + " years of free time");
    });

    $('#clearButton').click(function () {
        $('input[type=checkbox]').prop('checked', false);
        $('input[type=radio]').prop('checked', false);
        $('input[type=number]').val("");

        // $('#freeTimeDiv').css({
        //     "display": "none"
        // });

        $('#freeTimeDiv').fadeOut('1000');
    });

    $('#buttonYears').click(function () {
        $('#buttonYears').addClass('btn-primary');
        $('#buttonDays').removeClass('btn-primary');
        $('#buttonHours').removeClass('btn-primary');
        $('#buttonMinutes').removeClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife / hoursInDay / daysInYear) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("you have " + time + " years of free time");
    });

    $('#buttonDays').click(function () {
        $('#buttonYears').removeClass('btn-primary');
        $('#buttonDays').addClass('btn-primary');
        $('#buttonHours').removeClass('btn-primary');
        $('#buttonMinutes').removeClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife / hoursInDay) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("you have " + time + " days of free time");
    });

    $('#buttonHours').click(function () {
        $('#buttonYears').removeClass('btn-primary');
        $('#buttonDays').removeClass('btn-primary');
        $('#buttonHours').addClass('btn-primary');
        $('#buttonMinutes').removeClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("you have " + time + " hours of free time");
    });

    $('#buttonMinutes').click(function () {
        $('#buttonYears').removeClass('btn-primary');
        $('#buttonDays').removeClass('btn-primary');
        $('#buttonHours').removeClass('btn-primary');
        $('#buttonMinutes').addClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife * minutesInHour) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("you have " + time + " minutes of free time");
    });
});