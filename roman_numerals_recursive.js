function to_roman(input,temp) {
  // start your code here
  if(temp===undefined){var temp =[];}
  var digit = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

  for (var i = 0; i < digit.length; i++) {
    if(digit[i]<=input) {
        temp.push(roman[i]);
        input = input - digit[i];
    }
  }
  if(input !== 0){
    return to_roman(input,temp);
  } else {
    joinTemp = temp.join('');
    return joinTemp;
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
