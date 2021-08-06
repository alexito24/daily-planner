var today = moment();//returns us an object with key/value pairs and we have methods that other dev built for us to return dates, time
$("#currentDay").text(today.format("dddd, MMM Do"));

//the standard business hours
var reformatDate = moment("9", "h:mm:ss").format("LT");
$("#d1").text(reformatDate);
var reformatDate = moment("10", "h:mm:ss").format("LT");
$("#d2").text(reformatDate);
var reformatDate = moment("11", "h:mm:ss").format("LT");
$("#d3").text(reformatDate);
var reformatDate = moment("12", "h:mm:ss").format("LT");
$("#d4").text(reformatDate);
var reformatDate = moment("13", "h:mm:ss").format("LT");
$("#d5").text(reformatDate);
var reformatDate = moment("14", "h:mm:ss").format("LT");
$("#d6").text(reformatDate);
var reformatDate = moment("15", "h:mm:ss").format("LT");
$("#d7").text(reformatDate);
var reformatDate = moment("16", "h:mm:ss").format("LT");
$("#d8").text(reformatDate);
var reformatDate = moment("17", "h:mm:ss").format("LT");
$("#d9").text(reformatDate);

