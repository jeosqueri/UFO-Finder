// from data.js
var tableData = data;
// get reference to table body
var tbody = d3.select("tbody");

// append table of ufo data to webpage & add new rows of data for each ufo sighting
tableData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//Add Data function To call below
var addData = (inputData) => {
    inputData.forEach((ufoInfo) => {
        var row = tbody.append("tr");
        Object.entries(ufoInfo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Complete the event handler function to return the form
button.on("click", function() {
    // Clear the table body
    tbody.html("");
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select elements needed
    var inputFieldDate = d3.select("#datetime");
    var inputDate = inputFieldDate.property("value");
    
    var inputFieldCity = d3.select("#city");
    var inputCity = inputFieldCity.property("value").toLowerCase();
    
    var inputFieldState = d3.select("#state");
    var inputState = inputFieldState.property("value").toLowerCase();
    
    var inputFieldCountry = d3.select("#country");
    var inputCountry = inputFieldCountry.property("value").toLowerCase();
    
    var inputFieldShape = d3.select("#shape");
    var inputShape = inputFieldShape.property("value").toLowerCase();
    
    //Filter the data based on input value, and return those values that match the input
    var filteredDate = tableData.filter(input => input.datetime === inputDate);

    var filteredCity = tableData.filter(input => input.city === inputCity);

    var filteredState = tableData.filter(input => input.state === inputState);

    var filteredCountry = tableData.filter(input => input.country === inputCountry);

    var filteredShape = tableData.filter(input => input.shape === inputShape);

    var filteredAll = tableData.filter(input => input.datetime === inputDate &&
                                         input.city === inputCity &&
                                         input.state === inputState &&
                                         input.country === inputCountry &&
                                         input.shape === inputShape);
    
    let response = {filteredDate, filteredCity, filteredState, filteredCountry,
        filteredShape, filteredAll}

    if(response.filteredAll.length !== 0){
        addData(filteredAll);
    }
    else if(response.filteredAll.length === 0 && (response.filteredDate.length !== 0)) {
        addData(filteredDate);
    }

    else if(response.filteredAll.length === 0 && (response.filteredCity.length !== 0)) {
        addData(filteredCity);
    }

    else if(response.filteredAll.length === 0 && (response.filteredState.length !== 0)) {
        addData(filteredState);
    }

    else if(response.filteredAll.length === 0 && (response.filteredCountry.length !== 0)) {
        addData(filteredCountry);
    }

    else if(response.filteredAll.length === 0 && (response.filteredShape.length !== 0)) {
        addData(filteredShape);
    }

    else{
        tbody.append("tr").text("No UFO Sightings found that match this criteria")
    }

});
