let cal = document.getElementById('clear')
function clearScreen() {
    cal.value =''
}

function calculate() {
    let mortageAmount = document.getElementById('amount').value;
    let mortageTerm = document.getElementById('years').value * 12;
    let interest = document.getElementById('rate').value /100 / 12;
    let msg = document.getElementById('message')

    if (mortageAmount == '' || mortageTerm == '' || interest == '') {
        msg.innerHTML = 'input can not be empty'
    }
    if (isNaN(mortageAmount) || isNaN(mortageTerm) || isNaN(interest)) {
        msg.innerHTML = 'input can not be alphabet'
    }

    x = Math.pow(1+interest, mortageTerm);
    y = interest * x;
    z  = Math.pow(1+interest, mortageTerm);
    w = y - 1;
    total = mortageAmount * x/y;

    let getResult = document.getElementById('result');
    getResult.textContent = `${total}`
}