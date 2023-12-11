let age='20';
console.log(typeof age );



// let agestr=age.toString();
// console.log(agestr);

let ageFloat=parseFloat(age);
console.log(ageFloat);

let ageUnary=+age;
console.log(typeof(ageUnary));

let ageBigInt=BigInt(age);
console.log(typeof(ageBigInt));

let ageNum= parseInt(ageBigInt);
console.log(typeof(ageNum));

// console.log(0.1+0.2)

//conversion of Boolean to any other type of data type
let isTutor=true;
console.log(typeof isTutor);

let isTutorNum=parseInt(isTutor);
console.log(typeof isTutorNum);

//The story of NaN
console.log(typeof (NaN));
console.log(Number.isNaN(NaN));

//We use NaN to do interesting calculations
console.log(10*'a');

//operators

let mrMoney=20;
//pre decrement of mrMoney= mrMoney-1
console.log(mrMoney--)
console.log(mrMoney);

//loops:for,while, do while, for in, for of
//1...10
for(let first=0;first<=10;first++){
    console.log(first)
}

//assignment operators
let count=321;
//count=count+1;//
count += 1;
console.log(count)