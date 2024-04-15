// const numbers = [1, 2, 3, 4, 5, 6];

// let newArray = numbers.map((element,index)=>{
//     return element*2
// })
// console.log(newArray)

const numbers = [1, 2, 3, 4, 5, 6];
// let x;

let newArray = numbers.map((element, index) => {
  let x = element * 2;
  console.log(x, index);
});
console.log(newArray);
