/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numeralOutput = '';
    integerString = num.toString();
    var numArray = integerString.split("").map((number) => {return Number(number)})
    
    switch (numArray.length){
        case 4: fourDigitNum(numArray);
                break;
        case 3: threeDigitNum(numArray);
                break;
        case 2: twoDigitNum(numArray);
                break;
        case 1: singleDigitNum(numArray[0]);
                break;
    }
    
    function fourDigitNum(arr){
        
        let firstDigit = arr[0];
        
        for (let i = 0; i < firstDigit; i++){
            numeralOutput += 'M';
        }
        
        let threeDigitArray = arr.shift();
        
        threeDigitNum(threeDigitArray);
    }
    
    function threeDigitNum(arr){
        
        let firstDigit = arr[0];
        let twoDigitArray = arr.shift();
        
        if (firstDigit == 9){
            numeralOutput += 'CM';
            twoDigitNum(twoDigitArray);
        } else if (firstDigit == 4){
            numeralOutput += 'CD';
            twoDigitNum(twoDigitArray);
        } else if (firstDigit == 5){
            numeralOutput += 'D'
            twoDigitNum(twoDigitArray);
        } else if (firstDigit < 4){
            for (let i = 0; i < firstDigit; i++){
                numeralOutput += 'C';
            }
            twoDigitNum(twoDigitArray);
        } else if (firstDigit > 5){
            numeralOutput += 'D';
            for (let i = 5; i<firstDigit; i++){
                numeralOutput += 'C'
            }
            twoDigitNum(twoDigitArray);
        }
    }
    
    function twoDigitNum(arr){
        let firstDigit = arr[0];
        let singleDigit = arr[1];
        
        if (firstDigit == 9){
            numeralOutput += 'XC';
            singleDigitNum(singleDigit);
        } else if (firstDigit == 4){
            numeralOutput += 'XL';
            singleDigitNum(singleDigit);
        } else if (firstDigit == 5){
            numeralOutput += 'L'
            singleDigitNum(singleDigit);
        } else if (firstDigit < 4){
            for (let i = 0; i < firstDigit; i++){
                numeralOutput += 'X';
            }
            singleDigitNum(singleDigit);
        } else if (firstDigit > 5){
            numeralOutput += 'L';
            for (let i = 5; i<firstDigit; i++){
                numeralOutput += 'X'
            }
            singleDigitNum(singleDigit);
        }
    }
    
    function singleDigitNum(singleDigit){
        if (singleDigit == 9){
            numeralOutput += 'IX'
            return numeralOutput;
        } else if (singleDigit == 4){
            numeralOutput += 'IV';
            return numeralOutput;
        } else if (singleDigit == 5){
            numeralOutput += 'V';
            return numeralOutput;
        } else if (singleDigit < 4){
            for (let i = 0; i < singleDigit; i++){
                numeralOutput += 'I';
            }
            return numeralOutput;
        } else if (singleDigit > 5){
            numeralOutput += 'V';
            for (let i = 5; i < singleDigit; i++){
                numeralOutput += 'I';
            }
            return numeralOutput;
        }
    }
        
    }
