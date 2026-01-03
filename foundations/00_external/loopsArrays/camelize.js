function camelize(str) {
    splitStr = str.split('-');
    let camelized = "";
    for (let i = 0; i < splitStr.length; i++) {
        if (i > 0) {
            camelized += `${splitStr[i].slice(0, 1).toUpperCase()}${splitStr[i].slice(1)}`
        } else {
            camelized += splitStr[i];
        }
    }
    return camelized;
}

bgColor = 'background-color';

resultOne = camelize("background-color") == 'backgroundColor';
resultTwo = camelize("list-style-image") == 'listStyleImage';
resultThree = camelize("-webkit-transition") == 'WebkitTransition';

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
