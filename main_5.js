
'use strict'
let choice = prompt("Введите нужную операцию: sum, diff, mult, quot");
/**
 *
 *
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation поддерживаются значения "sum","diff","mult","quot"
 */
function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "sum":
            function getSum() {            
                return arg1 + arg2;
            }
            let resultsum = getSum();
            alert("Сумма = " + resultsum);
            break;
        case "diff":
            function getDiff() {
                return arg1 - arg2;
            }
            let resultdiff = getDiff();
            alert("Разница = " + resultdiff);
            break;
        case "mult":   
            function getProd() {
                return arg1 * arg2;
            }
            let resultmultiplication = getProd();
            alert("Произведение = " + resultmultiplication);
            break;
        case "quot":
            function getQuotient() {
                return arg1 / arg2;
            }
            let resultdivision = getQuotient();
            alert("Частное = " + resultdivision);
            break;
        default:
            alert("Введите предложенное из списка");
    }
}
mathOperation(35,7,choice);