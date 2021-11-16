// Import stylesheets
import './style.css';
function set2(f:string,l:string){
  let mySet2=new Set<string>()
  mySet2.add(f+f).add(f+l).add(l+f).add(l+l);
  return mySet2
}


function set3(f:string,s:string,th:string){
  const numbers=[f,s,th]
  let first=set2(f,s)
  let second=set2(s,th);
  let therd=set2(f,th)
  let mySet3=new Set<string>()
  for(let number of numbers){
    first.forEach(item1=>mySet3.add(`${number.toString()}`+item1))
    second.forEach(item2=>mySet3.add(`${number.toString()}`+item2))
    therd.forEach(item3=>mySet3.add(`${number.toString()}`+item3))
  }
  return mySet3
}
function set4(f:string,s:string,th:string,forth:string){
  const numbers=[f,s,th,forth]
  let first=set3(f,s,th);
  let second=set3(f,s,forth);
  let therd=set3(f,th,forth);
  let forthy=set3(s,th,forth);
  let mySet4=new Set<string>();
  for(let number of numbers){
    first.forEach(item1=>mySet4.add(`${number.toString()}`+item1))
    second.forEach(item2=>mySet4.add(`${number.toString()}`+item2))
    therd.forEach(item3=>mySet4.add(`${number.toString()}`+item3))
    forthy.forEach(item4=>mySet4.add(`${number.toString()}`+item4))
  }
  return mySet4
}
function set5(f:string,s:string,th:string,forth:string,five:string ){
  const numbers=[f,s,th,forth,five]
  let first=set4(f,s,th,forth);
  let second=set4(f,s,th,five);
  let therd=set4(f,th,forth,five);
  let forthy=set4(s,th,forth,five);
  let fivePoss=set4(f,s,forth,five);
  let mySet5=new Set<string>();
  for(let number of numbers){
    first.forEach(item1=>mySet5.add(`${number.toString()}`+item1))
    second.forEach(item2=>mySet5.add(`${number.toString()}`+item2))
    therd.forEach(item3=>mySet5.add(`${number.toString()}`+item3))
    forthy.forEach(item4=>mySet5.add(`${number.toString()}`+item4))
    fivePoss.forEach(item5=>mySet5.add(`${number.toString()}`+item5))
  }
  return mySet5
}
let arr=new Array()
//set3('1','2','4').forEach(item=>arr.push(item))
function setDigit(digit:number,numbers:string[]){
  const baseDigits= numbers.length;
  let mySetDigit=new Set<string>();
  let mySet
  (baseDigits==2)?mySet=set2(numbers[0],numbers[1]):(baseDigits==3)?mySet=set3(numbers[0],numbers[1],numbers[2]):(baseDigits==4)?mySet=set4(numbers[0],numbers[1],numbers[2],numbers[3]):mySet=set5(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4])
  for(let i=0 ;i<digit-baseDigits;i++){
    
    for( let number of numbers){
      mySet.forEach(item=>mySetDigit.add(`${number.toString()}`+item))
      
    }
  }
  return mySetDigit
}
let set= new Set()
set.add('4').add("4").add("44").add("444")
console.log(set.size)
console.log(setDigit(9,['1','2','3','4','5']).size)
setDigit(9,['1','2','3','4','5']).forEach(item=>console.log(item))
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;