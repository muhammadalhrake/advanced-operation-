import random from 'random';

export function secondGeeneratS(
  firstNumber: number[],
  level: string,
  secondDigits: number
) {
  let secondNumber = [];
  let index = firstNumber.length - 1;
  for (let i = secondDigits - 1; i >= 0; i--) {
    if (level == 'easy') {
      if (firstNumber[index]) {
        //if the number in first is avaliabel in this digit
        if (i == 0) {
          //last number of second
          secondNumber.push(between(1, 9 - firstNumber[index])); //between 1 and digit from first number
        } else {
          secondNumber.push(between(0, 9 - firstNumber[index])); //between 0 and digit of first number
        }
      } else {
        if (i == 0) {
          secondNumber.push(between(1, 9));
        } else {
          secondNumber.push(between(0, 9));
        }
      }
    } else {
      if (firstNumber[index]) {
        //if the number in first is avaliabel in this digit
        secondNumber.push(between(10-firstNumber[index],9)); //between 10-first number  and 9
        
      } else {
        if (i == 0) {
          secondNumber.push(between(1, 9));
        } else {
          secondNumber.push(between(0, 9));
        }
      }
    }
  }
  return secondNumber
}

function between(min: number, max: number) {
  return random.int(min, max);
}
