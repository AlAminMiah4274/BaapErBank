// step-1: add event handler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the value of the withdraw filed
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the withdraw input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step-5: get current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto tk nai!');
        return;
    }

    // step-4: add number to set the total withdraw
    const currentwithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    // set the withdraw total 
    withdrawTotalElement.innerText = currentwithdrawTotal;

    // step-6: calculate the current balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})