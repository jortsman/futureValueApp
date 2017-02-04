//Future Value Application

//User defined variables
var investment = prompt('What was your initial investment? \n Enter the value as a number like this: xxxx.xx', 10000);
investment = parseFloat(investment);
var rate = prompt('What was your interest rate? \n Enter the value as a number like this: xx.xx', 6.5);
rate = parseFloat(rate);
var years = prompt('How many years? \n Enter the value as a number like this: xx', 10);
years = parseInt(years);

//Calculation

futureValue = investment;
for (var i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}
futureValue = parseInt(futureValue);
