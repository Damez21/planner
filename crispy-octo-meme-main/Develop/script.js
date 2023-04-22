// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtnEl = $(".btn");
var currentDayEl = $("#currentDay")
var myAreaTime = dayjs();
var timeBlockEl = $(".description")
var oldPlansArray = JSON.parse(localStorage.getItem('newPlans'))
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveBtnEl.on("click", function(){
    var parentDiv = $(this).parents('div.time-block');
    var timeBlock = $(parentDiv).attr('id');
    var textAreaEl = $(parentDiv).children()[1];
    var textSaving = $(textAreaEl).val();
    console.log(textSaving)
    console.log(timeBlock)
 

  localStorage.setItem(timeBlock, textSaving);
  init();
   })

  function init() {
    for (var i = 9; i < 22; i++){
      var getText = localStorage.getItem(`hour-${i}`)
      console.log(getText);
      $(`#hour-${i} .description`).val(getText)
     
    }
  };

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentTime = parseInt(dayjs().format("HH"));
  hoursArray;
  for (var i =0; i < hoursArray.length; i++) {
    if (hoursArray[i] < currentTime) {
      $("#hour-" + hoursArray[i] + " textarea ").addClass("past");
    } else if (hoursArray[i] === currentTime) {
      $("#hour-" + hoursArray[i] + " textarea ").addClass("present");
    } else {
      $("#hour-" + hoursArray[i] + " textarea ").addClass("future");
    }
  };



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  init();
  $(currentDayEl).text(myAreaTime.format("dddd, MMMM DD hh:mm A"));
}); 