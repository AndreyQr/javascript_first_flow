let number = Number(prompt("Введите число в диапазоне от 0 до 999"));
function getNumber(number) {
    if (!Number.isInteger(number) || (number)<=0 || (number)>999) {
        console.log ("Введите число в диапазоне от 0 до 999");
        return
    };
     return {
         firstDigit: Math.floor(number/100),
         secondDigit: Math.floor(number/10%10),
         thirdDigit: Math.floor(number % 10),
    };   
}
console.log(getNumber(number));