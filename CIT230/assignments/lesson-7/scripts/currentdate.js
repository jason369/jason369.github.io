//var today = new Date();
//
//var weekday = new Array(7);
//weekday[0] = "Sunday";
//weekday[1] = "Monday";
//weekday[2] = "Tuesday";
//weekday[3] = "Wednesday";
//weekday[4] = "Thursday";
//weekday[5] = "Friday";
//weekday[6] = "Saturday";
//
//var wd = weekday[today.getDay()];
//
//var month = new Array(12);
//month[0] = "January";
//month[1] = "February";
//month[2] = "March";
//month[3] = "April";
//month[4] = "May";
//month[5] = "June";
//month[6] = "July";
//month[7] = "August";
//month[8] = "September";
//month[9] = "October";
//month[10] = "November";
//month[11] = "December";
//
//var mm = month[today.getMonth()];
//
//
//
//document.getElementById("currentdate").innerHTML = wd + ', ' + today.getDate() + ' ' + mm + ' ' + today.getFullYear();









var myDate = new Date();

var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];

var dayOfWeek = myDate.getDay();
var dayOfWeekString = weekDays[dayOfWeek];

var dayOfMonth = myDate.getDate();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Devember"];
var month = myDate.getMonth();
var monthString = months[month];

var fullYear = myDate.getFullYear();
var fullDate = dayOfWeekString + ", " + dayOfMonth + " " + monthString + " " + fullYear;

document.getElementById('currentdate').innerHTML = fullDate;
