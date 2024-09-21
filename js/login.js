document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button e chaap maros ken halarpo');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})