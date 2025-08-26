// reusable functions
const validPin = 1234;
const transactionData = [
    {
        name : 'Cash In',
        date : new Date().toLocaleDateString()
    },
    {
        name : 'Cash Out',
        date : new Date().toLocaleDateString()
    }
];


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

function getElement(id){
    const element = document.getElementById(id)
    return element;
}

function getElements(className){
    const elements = document.getElementsByClassName(className)
    return elements;
}

function toggleForm(id){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';
}

function toggleButton(id){
    //deactivate button style with class
    const buttons = getElements('button')
    for(const btn of buttons){
    btn.classList.remove('active-btn');
     }
    //activate button style with class
    const element = getElement(id)
    element.classList.add('active-btn');
}

//private functions form submission
document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault()

    const bank = getValue('add-bank')
    const accountNumber = getValue('add-account')
    const amount = getValueNumber('add-amount');
    const pin = getValueNumber('add-pin')
    // console.log(bank, accountNumber, amount, pin)

    const availableBalance = getInnerTextNumber('balance')
    if(accountNumber.length < 11){
        alert('invalid account number')
        return
    }
    if(pin !== validPin){
        alert('invalid pin')
        return
    }
    if(amount <= 0 ){
        alert('amount must be greater than 0')
    }

    const newAvailableBalance = availableBalance + amount;


    setAvailableBalance(newAvailableBalance)

    const data = {
        name : 'Add Money',
        date : new Date().toLocaleDateString()
    }
    transactionData.push(data);
    // console.log(transactionData)
})

document.getElementById('withdraw-money').addEventListener('click', function(e){
    e.preventDefault()
    
    const accountNumber = getValue('agent-number')
    const amount = getValueNumber('cashout-amount');
    const pin = getValueNumber('cashout-pin');
    const availableBalance = getInnerTextNumber('balance');

   if(amount <= 0 || amount > availableBalance ){
        alert('Invalid amount')
        return
    }


    if(accountNumber.length < 11){
        alert('invalid account number')
        return
    }
    if(pin !== validPin){
        alert('invalid pin')
        return
    }
    

    const newAvailableBalance = availableBalance - amount;


    setAvailableBalance(newAvailableBalance)


   const data = {
        name : 'Cash Out',
        date : new Date().toLocaleDateString()
    }
    transactionData.push(data);
    // console.log(transactionData)


})

//homepage auto load latest payments
const latestPaymentContainer = getElement('latest-payment-container');
    latestPaymentContainer.innerText = '';
    transactionData.reverse();
    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="bg-white p-4 rounded-2xl flex justify-between items-center mb-4">
                    <div class="flex gap-6 items-center">
                        <div>
                            <img src="./assets/wallet1.png" class="bg-slate-200 p-5 rounded-full" alt="">
                        </div>
                        <div>
                            <h3 class="font-semibold text-[16px]">${data.name}</h3>
                            <p class="text-[12px] text-gray-500">${data.date}</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
        `

        latestPaymentContainer.appendChild(div);
    }

// append all transactionData to transaction section first the toggle. toggle feature is added to the bottom
document.getElementById('transaction-btn').addEventListener('click', function(){

    const transactionContainer = getElement('transaction-container');
    transactionContainer.innerText = '';

    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="bg-white p-4 rounded-2xl flex justify-between items-center mb-4">
                    <div class="flex gap-6 items-center">
                        <div>
                            <img src="./assets/wallet1.png" class="bg-slate-200 p-5 rounded-full" alt="">
                        </div>
                        <div>
                            <h3 class="font-semibold text-[16px]">${data.name}</h3>
                            <p class="text-[12px] text-gray-500">${data.date}</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
        `

        transactionContainer.appendChild(div);
    }

})


//form display functions
document.getElementById('add-money-btn').addEventListener('click', function(){
//    form show/hide
    toggleForm('add-money-form')
    
    //toggle button activation
    toggleButton('add-money-btn')
})

document.getElementById('send-money-btn').addEventListener('click', function(){
    toggleForm('send-money-form')
    
    //toggle button activation
    toggleButton('send-money-btn')
})

document.getElementById('transfer-money-btn').addEventListener('click', function(){
    toggleForm('transfer-money-form');

    //toggle button activation
    toggleButton('transfer-money-btn')
    
})

document.getElementById('get-bonus-btn').addEventListener('click', function(){
    toggleForm('get-bonus-form');
    
    //toggle button activation
    toggleButton('get-bonus-btn')
})

document.getElementById('pay-bill-btn').addEventListener('click', function(){
    toggleForm('pay-bill-form');

    //toggle button activation
    toggleButton('pay-bill-btn')
    
})

document.getElementById('transaction-btn').addEventListener('click', function(){
    toggleForm('transaction-history')

    //toggle button activation
   toggleButton('transaction-btn')

   

})



