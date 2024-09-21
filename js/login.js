// document.getElementById('button-login').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('login button e chaap maros ken halarpo');

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     if(phoneNumber === '01735205584' && pinNumber === '2403'){
//         console.log('You are logged in');
//     }
//     else{
//         alert('Kirre hacker bhai ar koto')
//     }
// })

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if (phoneNumber === '01735205584' && pinNumber === '2403') {
        console.log('You are logged in');
        window.location.href = '/home.html'
    }
    else {
        alert('Kirre hacker bhai ar koto')
    }
});