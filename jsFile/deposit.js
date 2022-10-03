// step-1: add event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // for input field ude .value to get the value inside the input field
    const depositfield = document.getElementById('deposit-field');
    const newDepositAmountString = depositfield.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the deposit input field
    depositfield.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set the total deposit
    const currentDepositTotal = newDepositAmount + previousDepositTotal;

    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get current total balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate the current balance
    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})