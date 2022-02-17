// Input field string to number converting
function ExpensesValueConvert(idName) {
    const input = document.getElementById(idName).value;
    const amount = parseFloat(input);
    //clear input field
    document.getElementById(idName).value = '';
    return amount;
}

document.getElementById('calculate-button').addEventListener('click', function () {

    const foodExpenses = ExpensesValueConvert('food-input');
    const rentExpenses = ExpensesValueConvert('rent-input');
    const clothExpenses = ExpensesValueConvert('cloth-input');
    const incomeInput = document.getElementById('income-input').value;

    if (incomeInput <= 0 || foodExpenses <= 0 || rentExpenses <= 0 || clothExpenses <= 0) {
        alert('negative value does not allow');
    }
    else {
        const totalAmount = foodExpenses + rentExpenses + clothExpenses;
        const incomeInput = document.getElementById('income-input').value;
        // get and update total expenses

        if (totalAmount <= incomeInput) {
            const expensesTotal = document.getElementById('total-result');
            const expenseTotalText = expensesTotal.innerText;
            const previousExpensesTotal = parseFloat(expenseTotalText);

            const balanceTotal = document.getElementById('total-balance');
            const balanceTotalText = parseFloat(balanceTotal.innerText);
            const previousBalanceTotal = parseFloat(balanceTotalText);

            expensesTotal.innerText = previousExpensesTotal + totalAmount;
            let NewBalance = incomeInput - totalAmount;
            balanceTotal.innerText = previousBalanceTotal + NewBalance;
        }
        else {
            alert('insufficient balance')
        }
    }
})

document.getElementById('savings-button').addEventListener('click', function () {

    const incomeInput = document.getElementById('income-input').value;

    const saveInput = document.getElementById('save-input ').value;
    const savingPerchantage = parseFloat(saveInput);

    //get balance and saving amount

    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = parseFloat(balanceTotal.innerText);

    const balanceRemaining = document.getElementById('remaining-balance');

    //get and update saving amount
    const savingAmount = document.getElementById('saving-text');

    //calculate perchantage
    var savingscalc = savingPerchantage / 100;
    const a = savingscalc * incomeInput;
    savingAmount.innerText = a;
    // calculate remaining balance
    balanceRemaining.innerText = balanceTotalText - a;
})
