// Import stylesheets
import './style.css';
function set2(f:string,l:string){
  let mySet2=new Set<string>()
  mySet2.add(f+f).add(f+l).add(l+f).add(l+l);
  return mySet2
}


function set3(f:string,s:string,th:string){
  let first=set2(f,s)
  let second=set2(s,th);
  let therd=set2(f,th)
  let mySet3=new Set<string>()
  for(let i=1;i<=3;i++){
    let count 
    (i==1)?count=f:(i==2)?count=s:count=th
    first.forEach(item1=>mySet3.add(`${count.toString()}`+item1))
    second.forEach(item2=>mySet3.add(`${count.toString()}`+item2))
    therd.forEach(item3=>mySet3.add(`${count.toString()}`+item3))
  }
  return mySet3
}
function set4(f:string,s:string,th:string,forth:string){
  let first=set3(f,s,th);
  let second=set3(f,s,forth);
  let therd=set3(f,th,forth);
  let forthy=set3(s,th,forth);
  let mySet4=new Set<string>();
  for(let i=1;i<=4;i++){
    let count
    (i==1)?count=f:(i==2)?count=s:(i==3)?count=th:count=forth
    first.forEach(item1=>mySet4.add(`${count.toString()}`+item1))
    second.forEach(item2=>mySet4.add(`${count.toString()}`+item2))
    therd.forEach(item3=>mySet4.add(`${count.toString()}`+item3))
    forthy.forEach(item4=>mySet4.add(`${count.toString()}`+item4))
  }
  return mySet4
}
let arr=[]
//set3('1','2','4').forEach(item=>arr.push(item))
function setDigit(digit:number){
  let mySetDigit=new Set<string>();
  let the =set4('5','6','7','8')
  for(let i=0 ;i<digit-4;i++){
    
    for( let j=5;j<=8;j++){
      the.forEach(item=>mySetDigit.add(`${j.toString()}`+item))
      console.log(i)
    }
    the.clear();
    the=mySetDigit
    //the.forEach(item=>console.log(item))
    if(!(i==digit-5)){
      mySetDigit.clear() 
    }
  }
  return mySetDigit
}
setDigit(6).forEach(item=>arr.push(item))
console.log(arr);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;