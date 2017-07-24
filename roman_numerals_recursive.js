var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

function to_roman(input) {
  // start your code here
  if(input == 0){
    return ""  //kenapa tidak 0 atau input karena pada step akhir akan menghasilkan nilai 0. jika return di deklarasikan 0 maka 4 = IV0
  } else {
    for(let i = 0; i < number.length; i++){
      if(input >= number[i]){
        return roman[i] + to_roman(input - number[i]);
      }
    }
  }
  return to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
