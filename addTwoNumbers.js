
var addTwoNumbers = function(l1, l2) {
    const firstNumber = l1.reverse().join('');
    const secondNumber = l2.reverse().join('');
    const newNumber = parseInt(firstNumber) + parseInt(secondNumber);
    const outPutArray = newNumber.toString().split('').reverse();
    return outPutArray;
};
