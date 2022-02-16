function calculate() {
    // //const income = document.getElementById('income-input').value;
    // const food = document.getElementById('food-input').value;
    // const rent = document.getElementById('rent-input').value;
    // const cloths = document.getElementById('cloth-input').value;
    // document.getElementById('total-result').innerHTML = (food + rent + cloths);



}
// document.getElementById('calculate-button').addEventListener('click', function () {

//     const food = document.getElementById('food-input').value;
//     const rent = document.getElementById('rent-input').value;
//     const cloths = document.getElementById('cloth-input').value;
//     const totalExpenses = (food + rent + cloths);
//     const total = document.getElementById('total-result').innerText;
//     total.innerText = totalExpenses;


// })
document.getElementById('calculate-button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodCostText = foodInput.value;
    const foodAmount = parseFloat(foodCostText);

    const rent = document.getElementById('rent-input');
    const rentCostText = rent.value;
    const rentAmount = parseFloat(rentCostText);

    const cloths = document.getElementById('cloth-input');
    const clothCostText = cloths.value;
    const clothAmount = parseFloat(clothCostText);
    const totalAmount = foodAmount + rentAmount + clothAmount;


    // get and update total expenses

    const expensesTotal = document.getElementById('total-result');
    const expenseTotalText = expensesTotal.innerText;
    const previousExpensesTotal = parseFloat(expenseTotalText);

    expensesTotal.innerText = previousExpensesTotal + totalAmount;
})