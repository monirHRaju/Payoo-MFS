document.getElementById('loginButton').addEventListener('click', function(event){
    event.preventDefault()
    const mobile = 1234567890;
    const pin = 1234;

    const mobileNumber = document.getElementById('mobileNumber').value
    const pinNumber = document.getElementById('pinNumber').value
    
    const mobileConverted = parseInt(mobileNumber)
    const pinConverted = parseInt(pinNumber)

    if(mobileConverted === mobile && pinConverted === pin){
        window.location.href = './home.html'
    } else 
    console.log('invalid Mobile')
})



// global scripts
