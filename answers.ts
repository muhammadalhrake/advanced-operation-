import { between } from './secondNumber';

export function getAns(first: number, second: number) {
  const firstNum = first + second;
  const secondNum = secondNumberOfAns(firstNum); //to do second number
  const digitOfFirst = firstNum.toString().length;
  const therd = therdNumberOfAns(firstNum,secondNum,digitOfFirst)
  const fourth = forthNumberOfAns(firstNum,secondNum,therd,digitOfFirst)
  let answers = [firstNum.toString(), secondNum.toString(), therd.toString(), fourth.toString()];
  let shuffleAns=[];
  shuffle(answers).forEach(item=>shuffleAns.push(+item))
  return shuffleAns as number[]
}
export function shuffle(a: string[]) {
  let array = [...a];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function secondNumberOfAns(firstNUmberOfAns: number) {
  let first = firstNUmberOfAns.toString().split('');
  let second = +shuffle(first).join('');
  if(first.reduce((acc, next) => (acc == next ? acc : 0), first[0])){
    return between(
      +new Array(first.length).fill(1).join(''),
      +new Array(first.length).fill(9).join('')
    );
  }
  if (second != firstNUmberOfAns) {
    return second;
  } else {
    return secondNumberOfAns(second);
  }
}
function therdNumberOfAns(first: number, second: number, digitOfFirst: number) {
  const therd = between(
    +new Array(digitOfFirst).fill(1).join(''),
    +new Array(digitOfFirst).fill(9).join('')
  );
  if (therd != first && therd != second) {
    return therd;
  } else {
    return therdNumberOfAns(first, second, digitOfFirst);
  }
}
function forthNumberOfAns(
  first: number,
  second: number,
  therd: number,
  digitOfFirst: number
) {
  const forth = between(
    +new Array(digitOfFirst).fill(1).join(''),
    +new Array(digitOfFirst).fill(9).join('')
  );
  if (forth != first && forth != second && forth != therd) {
    return forth;
  } else {
    return forthNumberOfAns(first, second, therd, digitOfFirst);
  }
}
