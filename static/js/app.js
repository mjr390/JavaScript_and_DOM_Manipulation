// from data.js
var tableData = data;
var tbody = d3.select("tbody");

data.forEach((siteReport) => {
  var row = tbody.append("tr");
  Object.entries(siteReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");
// console.log(inputField.html);
button.on("click", function() {
  d3.event.preventDefault();
  d3.select("tbody").text("");
  console.log("Hi, a button was clicked!");
  var inputValue = inputField.property("value");

  console.log(inputValue);

  // Create a custom filtering function
  function selectRequested(date) {
    return date.datetime === inputValue;
  }

  // filter() uses the custom function as its argument
  var requested = data.filter(selectRequested);
  console.log(requested)

  requested.forEach((siteReport) => {
    var row = tbody.append("tr");
    Object.entries(siteReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  // var mydate = new Date(inputValue);
  // console.log(mydate.toDateString())
});
