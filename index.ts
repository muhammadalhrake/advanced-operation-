// Import stylesheets
import './style.css';
import { secondGeeneratS } from './secondNumber';
import { shuffle } from './answers';
function set2(f: string, l: string) {
  let mySet2 = new Set<string>();
  mySet2
    .add(f + f)
    .add(f + l)
    .add(l + f)
    .add(l + l);
  return mySet2;
}

function set3(f: string, s: string, th: string) {
  const numbers = [f, s, th];
  let first = set2(f, s);
  let second = set2(s, th);
  let therd = set2(f, th);
  let mySet3 = new Set<string>();
  for (let number of numbers) {
    first.forEach((item1) => mySet3.add(`${number.toString()}` + item1));
    second.forEach((item2) => mySet3.add(`${number.toString()}` + item2));
    therd.forEach((item3) => mySet3.add(`${number.toString()}` + item3));
  }
  return mySet3;
}
function set4(f: string, s: string, th: string, forth: string) {
  const numbers = [f, s, th, forth];
  let first = set3(f, s, th);
  let second = set3(f, s, forth);
  let therd = set3(f, th, forth);
  let forthy = set3(s, th, forth);
  let mySet4 = new Set<string>();
  for (let number of numbers) {
    first.forEach((item1) => mySet4.add(`${number.toString()}` + item1));
    second.forEach((item2) => mySet4.add(`${number.toString()}` + item2));
    therd.forEach((item3) => mySet4.add(`${number.toString()}` + item3));
    forthy.forEach((item4) => mySet4.add(`${number.toString()}` + item4));
  }
  return mySet4;
}
function set5(f: string, s: string, th: string, forth: string, five: string) {
  const numbers = [f, s, th, forth, five];
  let first = set4(f, s, th, forth);
  let second = set4(f, s, th, five);
  let therd = set4(f, th, forth, five);
  let forthy = set4(s, th, forth, five);
  let fivePoss = set4(f, s, forth, five);
  let mySet5 = new Set<string>();
  for (let number of numbers) {
    first.forEach((item1) => mySet5.add(`${number.toString()}` + item1));
    second.forEach((item2) => mySet5.add(`${number.toString()}` + item2));
    therd.forEach((item3) => mySet5.add(`${number.toString()}` + item3));
    forthy.forEach((item4) => mySet5.add(`${number.toString()}` + item4));
    fivePoss.forEach((item5) => mySet5.add(`${number.toString()}` + item5));
  }
  return mySet5;
}
let arr = new Array();
//set3('1','2','4').forEach(item=>arr.push(item))
function setDigit(digit: number, numbers: string[], lastdigitSet: Set<string>) {
  const baseDigits = numbers.length;
  let mySet;
  if (lastdigitSet.size == 0) {
    baseDigits == 2
      ? (mySet = set2(numbers[0], numbers[1]))
      : baseDigits == 3
      ? (mySet = set3(numbers[0], numbers[1], numbers[2]))
      : baseDigits == 4
      ? (mySet = set4(numbers[0], numbers[1], numbers[2], numbers[3]))
      : (mySet = set5(
          numbers[0],
          numbers[1],
          numbers[2],
          numbers[3],
          numbers[4]
        ));
  } else {
    mySet = lastdigitSet;
  }
  let mySetDigit = new Set<string>();
  if (digit - baseDigits == 0) {
    if (lastdigitSet.size == 0) {
      mySetDigit = mySet;
    } else {
      mySetDigit = lastdigitSet;
    }
  } else {
    for (let number of numbers) {
      mySet.forEach((item) => mySetDigit.add(`${number.toString()}` + item));
    }
    return setDigit(digit - 1, numbers, mySetDigit);
  }
  return mySetDigit;
}

/* set.forEach(item=>console.log(item)) */
//let rand =  Array.from(set);
//console.log(rand)

function fill(count: number, rand: any[]) {
  let arr = [];
  if (arr.length == 0) {
    arr = rand;
  }
  let myArr = [];
  for (let i = 0; i < count; ) {
    if (arr.length == 0) {
      arr = rand;
    }
    for (let j = 0; j < arr.length && i < count; j++) {
      const num = arr[j];
      if (!num.startsWith('0')) {
        myArr.push(num);
        //console.log(arr.filter((item) => item != num),num)
        //console.log(myArr)
        i++;
      }
    }
  }
  return myArr;
}

//console.log(fill(50,rand).filter((country) => !country.startsWith("0")))
//console.log(40, rand);
//console.log(fill(50,rand));
//console.log(set.size,rand.length)
//setDigit(9,['1','2','3','4','5']).forEach(item=>console.log(item))

function mainCreatingFirstNumber(
  count: number,
  numbers: string[],
  digits: number
) {
  let set = new Set<string>();
  let rand = [];
  //set.add('4').add("447").add("44").add("444")
  //set = set2('1','2')
  set = setDigit(digits, numbers, set);
  set.forEach((item) => {
    rand.push(item);
  });
  shuffle(rand);
  const myFinalFirstNumber = fill(count, rand);
  return myFinalFirstNumber;
}

const myNumber = mainCreatingFirstNumber(40, ['0', '1', '2', '3', '4'], 5);

// console.log(myNumber);
// console.log(myNumber[0][1]);
//console.log(secondGeeneratS([4,3,2,1],'easy',6))
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
