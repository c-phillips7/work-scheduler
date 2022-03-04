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

// on click, save hour and added text to local storage
saveBtn.on("click", function () {
    let time = $(this).siblings(".hour").text();
    let userText = $(this).siblings(".description").val();
    localStorage.setItem(time, userText);
})


// Load data from local storage to display user inputs on reload
function StoreEl() {
$(".hour").each(function () {
    let currentHour = $(this).text();
    let storedText = localStorage.getItem(currentHour);

    $(this).siblings(".description").val(storedText)

})
}


// TODO: function to highlight hour blocks based on current time
    // done by setting class to past, present or future based on current time


StoreEl()