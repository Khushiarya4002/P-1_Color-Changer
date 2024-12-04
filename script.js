const buttons = document.querySelectorAll('.button')
//console.log(buttons);

const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'Pink') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id === 'Yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'Blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'Silver') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'maroon') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'Black') {
            body.style.backgroundColor = e.target.id
        }


    })

});
