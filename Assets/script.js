// Set var from DOM
const saveBtn = $(".saveBtn");

// TODO: Get current date
$("#currentDay").text(
    // toLocaleString returns a string to display
    luxon.DateTime.now().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
);

// TODO: function on click of save:
// save hour and added text to local storage
saveBtn.on("click", function () {
    let time = $(this).siblings(".hour").text();
    let userText = $(this).siblings(".description").val();
    console.log(time);
    console.log(userText);
})


// TODO: function to load from local storage to display user inputs


// TODO: function to highlight hour blocks based on current time
    // done by setting class to past, present or future based on current time
