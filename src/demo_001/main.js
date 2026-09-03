// add a function to the document after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // select the button element
  const button = document.querySelector(".snd-btn-001");

  // add a click event listener to the button
  button.addEventListener("click", function () {
    // log a message to the console when the button is clicked
    console.log("Button clicked!");
    // change h2 text content to "Button Clicked!"
    const h2 = document.querySelector("h2");
    h2.textContent = "Button Clicked!";
  });
});

function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const timeDiff = Math.abs(endDate - beginDate);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}
// Example usage:
const daysBetween = calculateDaysBetweenDates("2023-01-01", "2023-01-31");
console.log(`Days between: ${daysBetween}`); // Output: Days between: 30
// Add event listener to the form submission
document
  .getElementById("date-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const beginDate = document.getElementById("begin").value;
    const endDate = document.getElementById("end").value;

    if (beginDate && endDate) {
      const daysBetween = calculateDaysBetweenDates(beginDate, endDate);
      document.getElementById("result").textContent =
        `Days between: ${daysBetween}`;
    } else {
      document.getElementById("result").textContent =
        "Please select both dates.";
    }
  });
