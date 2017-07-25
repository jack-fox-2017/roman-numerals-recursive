function to_roman(input) {
  // start your code here
let roman_arr = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
let arabic_arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
let tamp = "";

	for (let i = arabic_arr.length; i >= 0; i--) {
		if(input === 0) {
		return tamp;
		}else if(input >= arabic_arr[i]) {
return tamp += roman_arr[i] + to_roman(input - arabic_arr[i]);   
		}
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
