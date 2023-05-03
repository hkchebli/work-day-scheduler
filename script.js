// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var saveButton = $(".saveBtn");
var descriptionField=$(".description");
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(document).ready(function () {
  // saveBtn click listener 


  saveButton.on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log("this is: " + this);
    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function timeTracker() {
    console.log(today.hour());
    var currentTime = today.hour();
    $(".time-block").each(function () {
      var blockSectionId=$(this).attr("id");
      $(this).children(".description").first().text(localStorage.getItem(blockSectionId));
      var timePeriod = parseInt(blockSectionId.split("hour-")[1]);
      console.log(timePeriod);
      //timePeriod.preventDefault();
      // To check the time and add the classes for background indicators
      if (timePeriod < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timePeriod === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }


  //if(today.isSameOrAfter(dayjs('h')))

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
 /* var hour9=localStorage.getItem("hour9");
  var hour10=localStorage.getItem("hour10");
  var hour11=localStorage.getItem("hour11");
  var hour12=localStorage.getItem("hour12");
  var hour13=localStorage.getItem("hour13");
  var hour14=localStorage.getItem("hour14");
  var hour15=localStorage.getItem("hour15");
  var hour16=localStorage.getItem("hour16");
  var hour17=localStorage.getItem("hour17");
  

  $("#hour9 .description").val(hour9);
  $("#hour10 .description").val(hour10);
  $("#hour11 .description").val(hour11);
  $("#hour12 .description").val(hour12);
  $("#hour13 .description").val(hour13);
  $("#hour14 .description").val(hour14);
  $("#hour15 .description").val(hour15);
  $("#hour16 .description").val(hour16);
  $("#hour17 .description").val(hour17);

  */
  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  timeTracker();
});
