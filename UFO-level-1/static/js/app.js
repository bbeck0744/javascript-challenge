// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("")
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = data.filter(subset => subset.datetime === inputValue);
    filteredData.forEach(function(filteredTableData) {
      console.log(filteredTableData);
      var row = tbody.append("tr");
      Object.entries(filteredTableData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });