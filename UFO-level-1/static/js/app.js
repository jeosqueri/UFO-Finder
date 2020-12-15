// from data.js
var tableData = data;
// get reference to table body
var tbody = d3.select("tbody");

// code to append table of ufo data to webpage & adds new rows of data for each ufo sighting
data.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});