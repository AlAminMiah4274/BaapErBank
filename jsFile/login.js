// step no-1: add clnick event hanlder with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step no-2: get the email address inside the email input field
    // alaways remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get passwaord
    // 3.a: set id on the html element 
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwaordFiled = document.getElementById('user-password');
    const passwaord = passwaordFiled.value;

    // DANGER: do not verify email & password on the client side 
    // step-4: verify email and passwaord & check wheather valid user or not
    if (email === 'sontan@baap.com' && passwaord === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Tui password bhule gesos. toke ami tejjo sontan goshona korlam.');
    }
})