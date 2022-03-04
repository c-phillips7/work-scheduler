// Set var from DOM
const saveBtn = $(".saveBtn");

// Get current date
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
function loadEl() {
    $(".hour").each(function () {
        let currentHour = $(this).text();
        let storedText = localStorage.getItem(currentHour);

        if (storedText !== null) {
            $(this).siblings(".description").val(storedText)
        }
    })
}


// TODO: function to highlight hour blocks based on current time
// done by setting class to past, present or future based on current time
function timeBlockColor() {
    // get current time from luxon
    let currentHour = parseInt(luxon.DateTime.now().toLocaleString({
        hour: "2-digit",
        hour12: false
    }))
    console.log(currentHour);

    // format time to match classes from html

    // create logic to set css based on if time is <, > or = current time


}

loadEl()
timeBlockColor()