
var today = dayjs();
var saveButton = $(".saveBtn");
var descriptionField = $(".description");

$(document).ready(function () {

  // listener for click events on the save button.
  saveButton.on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log("this is: " + this);
    // Save time and it's text in local storage
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    //console.log(today.hour());
    var currentTime = today.hour();
    $(".time-block").each(function () {

      //get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements.
      var blockSectionId = $(this).attr("id");
      $(this).children(".description").first().text(localStorage.getItem(blockSectionId));

      //parse class of each time block
      var timePeriod = parseInt(blockSectionId.split("hour-")[1]);
      console.log(timePeriod);

      // check the time and add the classes for background indicators
      //apply the past, present, or future class to each time
      // block by comparing the id to the current hour.
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

  // code to display the current date in the header of the page.

  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  timeTracker();
});
