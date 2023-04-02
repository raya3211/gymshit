// Get input elements
const interestRateInput = document.getElementById("interest-rate");
const periodsInput = document.getElementById("periods");
const calculateBtn = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

// Calculate PVF-AD when the button is clicked
calculateBtn.addEventListener("click", function() {
	// Get input values
	const interestRate = interestRateInput.value;
	const periods = periodsInput.value;

	// Calculate PVF-AD
  const pvfad = ((1 + (interestRate/100)) * ((1 + (interestRate/100)) ** periods - 1) / (interestRate/100)) / (1 + (interestRate/100)) ** periods;
	// Display result
	resultDiv.innerText = `PVF-AD for ${periods} periods at ${interestRate}% interest rate: ${pvfad.toFixed(5)}`;
});