// from data.js
var tableData = data;
// get reference to table body
var tbody = d3.select("tbody");

// code to append table of ufo data to webpage & adds new rows of data for each ufo sighting
tableData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//To call below
var addData = (inputData) => {
    inputData.forEach((ufoInfo) => {
        var row = tbody.append("tr");
        Object.entries(ufoInfo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` column to find rows that match user input.
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

//Create event handlers
//button.on("click", runEnter);
//form.on("submit", runEnter);

// Complete the event handler function to return the form
button.on("click", function() {
    // Clear the table body
    tbody.html("");
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select elements needed
    var inputFieldDate = d3.select("#datetime");
    var inputDate = inputFieldDate.property("value");
    console.log(inputDate);

    var inputFieldCity = d3.select("#city");
    var inputCity = inputFieldCity.property("value").toLowerCase();
    console.log(inputCity);

    var inputFieldState = d3.select("#state");
    var inputState = inputFieldState.property("value").toLowerCase();
    console.log(inputState);

    var inputFieldCountry = d3.select("#country");
    var inputCountry = inputFieldCountry.property("value").toLowerCase();
    console.log(inputCountry);

    var inputFieldShape = d3.select("#shape");
    var inputShape = inputFieldShape.property("value").toLowerCase();
    console.log(inputShape);
    //Filter the data based on date input value, and only return those dates that match the input
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
    console.log(filteredAll);

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

    //everything but shape
    else if(response.filteredAll.length === 0 && ((response.filteredDate.length !== 0 && 
                                                response.filteredCity.length !== 0 &&
                                                response.filteredState.length !== 0 &&
                                                response.filteredCountry.length !== 0
                                                ))) {
        addData(filteredDate) || addData(filteredCity) || addData(filteredState) || addData(filteredCountry);
    }
    //everything but country
    else if(response.filteredAll.length === 0 && ((response.filteredDate.length !== 0 || 
                                                response.filteredCity.length !== 0 ||
                                                response.filteredState.length !== 0 ||
                                                response.filteredShape.length !== 0
                                                ))) {
        addData(filteredDate) || addData(filteredCity) || addData(filteredState) || addData(filteredShape);
    }
    // everthing but state
    else if(response.filteredAll.length === 0 && ((response.filteredDate.length !== 0 || 
                                                response.filteredCity.length !== 0 ||
                                                response.filteredCountry.length !== 0 ||
                                                response.filteredShape.length !== 0
                                                ))) {
        addData(filteredDate) || addData(filteredCity) || addData(filteredCountry) || addData(filteredShape);
    }
    //everything but city
    else if(response.filteredAll.length === 0 && ((response.filteredDate.length !== 0 || 
                                                response.filteredCountry.length !== 0 ||
                                                response.filteredState.length !== 0 ||
                                                response.filteredShape.length !== 0
                                                ))) {
        addData(filteredDate) || addData(filteredCountry) || addData(filteredState) || addData(filteredShape);
    }
    //everything but date
    else if(response.filteredAll.length === 0 && ((response.filteredCountry.length !== 0 || 
                                                response.filteredCity.length !== 0 ||
                                                response.filteredState.length !== 0 ||
                                                response.filteredShape.length !== 0
                                                ))) {
        addData(filteredCountry) || addData(filteredCity) || addData(filteredState) || addData(filteredShape);
    }

    else{
        tbody.append("tr").text("No UFO Sightings found that match this criteria")
    }

    // else if(response.filteredCity.length !== 0) {
    //     addData(filteredCity);
    // }
    // else if(response.filteredState.length !== 0) {
    //     addData(filteredState);
    // }
    // else if(response.filteredCountry.length !== 0) {
    //     addData(filteredCountry);
    // }
    // else if(response.filteredShape.length !== 0) {
    //     addData(filteredShape);
    // }
    // else if(response.filteredAll.length !== 0) {
    //     addData(filteredAll);
    // }
    
    // Append data that matches datetime input to table, so table only shows data that matches users input
    // filteredData.forEach((ufoInput) => {
    //     console.log(ufoInput);
    //     var row = tbody.append("tr");
    //     Object.entries(ufoInput).forEach(([key, value])=> {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });

});
