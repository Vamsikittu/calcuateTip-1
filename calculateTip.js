function calculateTip(billAmount, serviceQuality, numberOfPeople) {
    // Calculate tip per person
    var tipPerPerson = (billAmount * (serviceQuality / 100)) / numberOfPeople;
    return tipPerPerson;
}

// Test Case 1
var bill1 = 500;
var serviceQuality1 = 5;
var numberOfPeople1 = 2;
var tip1 = calculateTip(bill1, serviceQuality1, numberOfPeople1);
console.log("Test Case 1 - Tip:", tip1);

// Test Case 2
var bill2 = 1000;
var serviceQuality2 = 3;
var numberOfPeople2 = 5;
var tip2 = calculateTip(bill2, serviceQuality2, numberOfPeople2);
console.log("Test Case 2 - Tip:", tip2);