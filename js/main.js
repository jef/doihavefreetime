/*
author: jeffrey lecompte
github: https://github.com/jeffreylec
website: https://jef.rocks
*/

$(document).ready(function () {
    var age, workHours, sleep, drinking, smoking, freeTimeInDay, freeTimeInYear, freeTimeRestOfLife,
        maleFemale, avgAge;
    var daysInYear = 365.25; // days
    var hoursInDay = 24; // hours
    var minutesInHour = 60; // minutes
    var cigDeath = 13.8; // minutes
    var drinkDeath = 6.6; // hours

    $('#submitButton').click(function () {
        age = $('#age').val();
        workHours = $('#workHours').val();
        sleep = $('#sleep').val();
        drinking = $('#drinking').val();
        smoking = $('#smoking').val();
        maleFemale = $('input[name=maleFemale]:checked').val();

        if (maleFemale === "male") avgAge = 76;
        if (maleFemale === "female") avgAge = 81;
        else avgAge = (76 + 81) / 2;

        freeTimeInDay = (hoursInDay - sleep - (workHours / 7)); // hours
        freeTimeInYear = freeTimeInDay * daysInYear; // hours
        freeTimeRestOfLife = freeTimeInYear * (avgAge - age); // hours

        // $('#freeTimeDiv').css({
        //     "display": "inline"
        // });

        $('#freeTimeDiv').fadeIn('slow');

        $('#buttonYears').addClass('btn-primary');
        $('#buttonDays').removeClass('btn-primary');
        $('#buttonHours').removeClass('btn-primary');
        $('#buttonMinutes').removeClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife / hoursInDay / daysInYear) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("You have " + time + " years of free time");
    });

    $('#clearButton').click(function () {
        $('#age').val("");
        $('#workHours').val("");
        $('#sleep').val("");
        $('#freeTimeNumber').text("");
        $('input[type=checkbox]').prop('checked', false);
        $('input[type=radio]').prop('checked', false);

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
            .text("you have " + time + " days of free time");
    });

    $('#buttonMinutes').click(function () {
        $('#buttonYears').removeClass('btn-primary');
        $('#buttonDays').removeClass('btn-primary');
        $('#buttonHours').removeClass('btn-primary');
        $('#buttonMinutes').addClass('btn-primary');

        var time = (Math.round(((freeTimeRestOfLife * minutesInHour) * 1000)/10)/100).toFixed(2);

        $('#freeTimeSentence')
            .text("you have " + time + " days of free time");
    });

});