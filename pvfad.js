function calculatePVFAD() {
    // get user input for interest rate and number of periods
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var numPeriods = parseFloat(document.getElementById("numPeriods").value);
  
    // calculate PVF-AD using the formula
    var PVFAD = ((1 + interestRate) * ((1 + interestRate) ** numPeriods - 1) / interestRate) / (1 + interestRate) ** numPeriods;
  
    // display the result in an alert box
    alert("PVF-AD: " + PVFAD);
  }
  