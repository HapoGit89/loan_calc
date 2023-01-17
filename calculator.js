window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
const years = document.getElementById("loan-years");
const amount = (document.getElementById("loan-amount"));
const rate = document.getElementById("loan-rate");

years.value = 10;
amount.value = 300000;
rate.value = 1.5;

calculateMonthlyPayment(getCurrentUIValues())
update()

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  document.getElementById('monthly-payment').innerText = calculateMonthlyPayment(getCurrentUIValues())
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
const P = values.amount;
const i = values.rate/(100*12)
const n = values.years*12;
const monthpay = (P*i)/(1-Math.pow((1+i),-n))
const mprounded =(Math.round(monthpay*100))/100
const mpString = `${mprounded}`
return mpString


}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}

