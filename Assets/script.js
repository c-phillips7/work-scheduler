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


// TODO: function to load from local storage to display user inputs
function StoreEl() {
    // for each hour, get user text from local storage
$(".hour").each(function () {
    // Gives the time for each div
    console.log($(this).text());

})
}


// TODO: function to highlight hour blocks based on current time
    // done by setting class to past, present or future based on current time


StoreEl()