var romanAngka = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]
  function to_roman(input) {
    if (input > 0) {
      // console.log(input);
      for (var i = 0; i < romanAngka.length; i++) {
        if (input >= romanAngka[i][0]) {
          // console.log(romanAngka);
          return romanAngka[i][1] + to_roman(input - romanAngka[i][0])
        }
      }
    } else {
      return ''
    }
  }

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('2     | II       | ', to_roman(2))
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('6     | VI       | ', to_roman(6))
console.log('13    | XIII     | ', to_roman(13))
console.log('20    | XX       | ', to_roman(20))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
