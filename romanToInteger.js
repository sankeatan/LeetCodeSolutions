/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var integerOutput = 0;
    const numeralArray = s.split('');
    for (var i = 0; i < numeralArray.length; i++) {
        switch(numeralArray[i]) {
            case 'M': 
                integerOutput += 1000;
                break;
                
            case 'D':
                integerOutput += 500;
                break;
                
            case 'C':
                if(numeralArray[i+1] == 'D'){
                    integerOutput += 400;
                    i++;
                } else if(numeralArray[i+1] == 'M'){
                    integerOutput += 900;
                    i++
                } else {
                    integerOutput += 100;
                }
                break;
                
            case 'L':
                integerOutput += 50;
                break;
                
            case 'X':
                if(numeralArray[i+1] == 'L'){
                    integerOutput += 40;
                    i++;
                } else if(numeralArray[i+1] == 'C'){
                    integerOutput += 90;
                    i++
                } else {
                    integerOutput += 10;
                }
                break;
            case 'V':
                integerOutput += 5;
                break;
                
            case 'I':
                if(numeralArray[i+1] == 'V'){
                    integerOutput += 4;
                    i++;
                } else if(numeralArray[i+1] == 'X'){
                    integerOutput += 9;
                    i++
                } else {
                    integerOutput += 1;
                }
                break;
        }
    }
    return integerOutput;    
};
