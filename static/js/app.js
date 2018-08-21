// select the table body
var tbody = d3.select("tbody");

// go through each entry in the data.js and append it's data to a Table
// make sure the table headers are in the same order in the html and data.js
data.forEach((siteReport) => {
  // add a new row to the table for each entry
  var row = tbody.append("tr");
  // use Object.entries and forEach to get the key and value for each entry
  Object.entries(siteReport).forEach(([key, value]) => {
    // add a new td for each value with the value from Object.entries
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// create a filter to filter for a specific datetime
// first select the filter btn and the input field
var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");
// when the button is clicked
button.on("click", function() {
  // first prevent the page from refreshing
  d3.event.preventDefault();
  // clear out the default list
  d3.select("tbody").text("");
  // create a variable for the value that was input
  var inputValue = inputField.property("value");



  // Create a filtering function for that date
  function selectRequested(date) {
    // checking for dates that match from data
    return date.datetime === inputValue;
  }

  // create a new variable using the filter as an argument
  var requested = data.filter(selectRequested);
  // console.log(requested)

  if (requested.length === 0){
    var row = tbody.append("tr");
    var cell = tbody.append("td");
    cell.text("That date doesn't exist in the data. Make sure single digit months and days are entered as a single digit.")
  }

  else{
  //  use the new variable to go through each of the filterd entries
    requested.forEach((siteReport) => {
      // add a new row to the table for each entry
      var row = tbody.append("tr");
      // use Object.entries and forEach to get the key and value for each entry
      Object.entries(siteReport).forEach(([key, value]) => {
        // add a new td for each value with the value from Object.entries
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
  }
  // var mydate = new Date(inputValue);
  // console.log(mydate.toDateString())
});
