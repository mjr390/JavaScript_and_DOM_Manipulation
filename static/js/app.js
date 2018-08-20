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
  console.log("Hi, a button was clicked!");
  var inputValue = inputField.property("value");

  console.log(inputValue);
});
