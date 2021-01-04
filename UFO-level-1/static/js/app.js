// get table data from data.js and assign to variable
var tableData = data;
// get reference to table body and assign to variable
var tbody = d3.select("tbody");

// append table of ufo data to webpage & add a new row of data for each ufo sighting
tableData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button and assign to variable
var button = d3.select("#filter-btn");
// Select the form and assign to variable
var form = d3.select("#form");

// Complete the event handler function for filter button to filter the data & return values that match the input
button.on("click", function() {
    // Clear the table body
    tbody.html("");
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select the input element
    var inputElement = d3.select("#datetime");
    //Get the value property of input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Filter the data based on date input value, and only return those dates that match the input
    var matches = tableData.filter(input => input.datetime === inputValue);
    console.log(matches);
    // Append data that matches datetime input to table, so table only shows data that matches users input
    matches.forEach((ufoInput) => {
        console.log(ufoInput);
        var row = tbody.append("tr");
        Object.entries(ufoInput).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
