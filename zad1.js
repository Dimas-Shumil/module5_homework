let x = +prompt('Введите число');
if (window.isNaN(x)) {
    console.log('Упс, кажется, вы ошиблись')
} else {
    if (x % 2 == 0) {
        console.log(x + ' - это четное число')
    } else {
        console.log(x + ' - это не четное число')
    }
}
