let body = document.querySelector('body');
let specials = document.querySelectorAll('.backspace,.capslock, .tab ,.enter, .leftshift, .rightshift, .space');
let buttons = document.querySelectorAll('.button');
let add = document.getElementById('area');
let container = document.querySelector('.container')
let button = document.querySelectorAll('button');
let str = '';
let checkerS = false;
let count = 0;

button[0].onclick = function(){
    container.style.display = 'flex';
    button[0].style.display = 'none';
    button[1].style.display = 'none';
    body.classList.add('ukr')
  add.placeholder='Введіть текст...'
    buttons[13].innerHTML = 'й'
    buttons[14].innerHTML = 'ц'
    buttons[15].innerHTML = 'у'
    buttons[16].innerHTML = 'к'
    buttons[17].innerHTML = 'е'
    buttons[18].innerHTML = 'н'
    buttons[19].innerHTML = 'г'
    buttons[20].innerHTML = 'ш'
    buttons[21].innerHTML = 'щ'
    buttons[22].innerHTML = 'з'
    buttons[23].innerHTML = 'х'
    buttons[24].innerHTML = 'ї'
    buttons[25].innerHTML = '/'
    buttons[26].innerHTML = 'ф'
    buttons[27].innerHTML = 'і'
    buttons[28].innerHTML = 'в'
    buttons[29].innerHTML = 'а'
    buttons[30].innerHTML = 'п'
    buttons[31].innerHTML = 'р'
    buttons[32].innerHTML = 'о'
    buttons[33].innerHTML = 'л'
    buttons[34].innerHTML = 'д'
    buttons[35].innerHTML = 'ж'
    buttons[36].innerHTML = 'є'
    buttons[37].innerHTML = 'я'
    buttons[38].innerHTML = 'ч'
    buttons[39].innerHTML = 'с'
    buttons[40].innerHTML = 'м'
    buttons[41].innerHTML = 'и'
    buttons[42].innerHTML = 'т'
    buttons[43].innerHTML = 'ь'
    buttons[44].innerHTML = 'б'
    buttons[45].innerHTML = 'ю'
    buttons[46].innerHTML = '.'   
}

button[1].onclick = function(){
    container.style.display = 'flex';
    button[0].style.display = 'none';
    button[1].style.display = 'none';
    body.classList.add('eng')
}

window.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key == ' ') {
        specials[6].classList.add('grey')
        str += ' '
        add.value = str;
    }
    else if (event.key == 'Enter') {
        specials[3].classList.add('grey')
        str += '\n'
        add.value = str;
    }
    else if (event.key == 'Tab') {
        specials[1].classList.add('grey')
        str += '\t'
        add.value = str;
    }
    else if (event.key == 'Backspace') {
        specials[0].classList.add('grey')
        str = str.slice(0, this.length - 1)
        add.value = str;
    }
    else if (event.key == 'CapsLock') {
        specials[2].classList.add('grey')
        count++;
        if (count == 2) {
            specials[2].classList.remove('grey')
            count = 0;
        }
    }
    else if (event.code == 'ShiftLeft') {
        specials[4].classList.add('grey')
        console.log(buttons)
        checkerS = true;
    }
    else if (event.code == 'ShiftRight') {
        specials[5].classList.add('grey')
        console.log(buttons)
        checkerS = true;
    }
        
    else if (count == 1 ||checkerS) {
        buttons.forEach(element => {
            if (element.innerHTML == event.key.toLowerCase()) {
                element.classList.add('grey')
                str += event.key.toUpperCase();
                add.value = str;
            }
        });
    }
        
    else {
        buttons.forEach(element => {
            if (element.innerHTML == event.key) {
                element.classList.add('grey')
                str += event.key;
                add.value = str;
            }
        });
    }
})

window.addEventListener('keyup', function (event) {
    if (event.key == ' ') {
        specials[6].classList.remove('grey')
    }
    else if (event.key == 'Enter') {
        specials[3].classList.remove('grey')
    }
    else if (event.key == 'Tab') {
        specials[1].classList.remove('grey')
    }
    else if (event.key == 'Backspace') {
        specials[0].classList.remove('grey')
    }
    else if (event.code == 'ShiftLeft') {
        specials[4].classList.remove('grey')
        checkerS = false;
    }
    else if (event.code == 'ShiftRight') {
        specials[5].classList.remove('grey')
        checkerS = false;
    }
        
    else if (count == 1 ||checkerS) {
        buttons.forEach(element => {
            if (element.innerHTML == event.key.toLowerCase()) {
                element.classList.remove('grey')
            }
        });
    }
        
    else {
        buttons.forEach(element => {
            if (element.innerHTML == event.key) {
                element.classList.remove('grey')
            }
        })
    }
});
