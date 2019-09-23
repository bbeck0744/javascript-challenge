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
    var inputDateElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");

    var inputStateElement = d3.select("#state");
    // Get the value property of the input element
    var inputStateValue = inputStateElement.property("value");

    var filteredData = data.filter(subset => subset.datetime === inputDateValue);
    var filteredData = filteredData.filter(subset => subset.state === inputStateValue);

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

  var button = d3.select("#filter-btn-reset");
  button.on("click", function() {
    tbody.html("")
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
  
  });

const distinctDates = [...new Set(data.map(x => x.datetime))];
const distinctCity = [...new Set(data.map(x => x.city))];
const distinctState = [...new Set(data.map(x => x.state))];
const distinctCountry = [...new Set(data.map(x => x.country))];
const distinctShape = [...new Set(data.map(x => x.shape))];


console.log(distinctDates)
console.log(distinctCity)
console.log(distinctState)
console.log(distinctCountry)
console.log(distinctShape)

var state = d3.select("#state");

for(var i = 0; i < distinctState.length; i++) {
  var option = document.createElement("OPTION"),
  txt = document.createTextNode(distinctState[i]);
  option.appendChild(txt);
  option.setAttribute("value",distinctState[i]);
  select.insertBefore(option,select.lastChild);
};
