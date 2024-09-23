document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if (phoneNumber === '01735205584' && pinNumber === '1234') {
        console.log('You are logged in');
        window.location.href = '/home.html'
    }
    else {
        alert('Kirre hacker bhai ar koto')
    }
});