// reusable functions
const validPin = 1234;
const availableBalance = getInnerTextNumber('balance')


function getValue(id){
    const value = document.getElementById(id).value;
    
    return value;
}
function getValueNumber(id){
    const value = document.getElementById(id).value;
    const valueNumber = parseInt(value);

    return valueNumber;
}
function getInnerTextNumber(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseInt(innerText);

    return innerTextNumber;
}

function setAvailableBalance(value){
    const availableBalance = document.getElementById('balance');
    
    availableBalance.innerText = value;
}

document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault()

    const bank = getValue('bank')
    const accountNumber = getValue('account')
    const amount = getValueNumber('amount');
    const pin = getValueNumber('pin')
    // const availableBalance = getInnerTextNumber('balance')
    
    if(accountNumber.length < 11){
        alert('invalid account number')
        return
    }
    if(pin !== validPin){
        alert('invalid pin')
        return
    }

    const newAvailableBalance = availableBalance + amount;


    setAvailableBalance(newAvailableBalance)


    
    console.log(bank, accountNumber, amount, pin, newAvailableBalance)
})

document.getElementById('withdraw-money').addEventListener('click', function(e){
    e.preventDefault()
    
    const agentAccount = getValue('agent-number')
    const withdrawAmount = getValueNumber('withdraw-amount');
    const pinNumber = getValueNumber('pin-number');
    
    if(agentAccount.length < 11){
        alert('invalid account number')
        return
    }
    if(pinNumber !== validPin){
        alert('invalid pin')
        return
    }

    const newAvailableBalance = availableBalance - withdrawAmount;


    setAvailableBalance(newAvailableBalance)


    console.log(agentAccount, withdrawAmount, pinNumber);


})




//form display functions
document.getElementById('add-money-btn').addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById('add-money-form').style.display = 'block';
    
})

document.getElementById('send-money-btn').addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById('send-money-form').style.display = 'block';
    
})

document.getElementById('transfer-money-btn').addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById('transfer-money-form').style.display = 'block';
    
})

document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById('get-bonus-form').style.display = 'block';
    
})

document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById('pay-bill-form').style.display = 'block';
    
})

document.getElementById('transaction-btn').addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById('transaction-history').style.display = 'block';
    
})



