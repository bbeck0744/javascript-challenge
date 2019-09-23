// from data.js
var tableData = data;
//selects the body of the table
var tbody = d3.select("tbody");

// creates the original data table that is displayed
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



 // This button filters based on the state and date dropdown menus 
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("")
    // Select the input element and get the raw HTML node
    var inputDateElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");

    var inputStateElement = d3.select("#state");
    // Get the value property of the input element
    var inputStateValue = inputStateElement.property("value");

    var filteredData = data.filter(subset => subset.datetime === inputDateValue);
    var filteredData = filteredData.filter(subset => subset.state === inputStateValue);

    // uses the filtered dataset
    filteredData.forEach(function(filteredTableData) {
      console.log(filteredTableData);
      var row = tbody.append("tr");
      Object.entries(filteredTableData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });

  // This button resets to the original table
  var button = d3.select("#filter-btn-reset");
  button.on("click", function() {
    tbody.html("")
    data.forEach(function(tableData) {
      console.log(tableData);
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
      });
    });
  
  });

const distinctDates = [...new Set(data.map(x => x.datetime))];
const distinctCity = [...new Set(data.map(x => x.city))];
const distinctState = [...new Set(data.map(x => x.state))];
const distinctCountry = [...new Set(data.map(x => x.country))];
const distinctShape = [...new Set(data.map(x => x.shape))];


