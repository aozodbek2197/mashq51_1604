// 1-mashq
let arr = [1,2,3,4,6];
let count = arr.filter(x => x % 2 === 0).length;
console.log(count);
// 2-mashq
let str = "I love javascript";
let words = str.split(" ");
let longest = words.reduce((a,b)=> a.length>b.length?a:b);
console.log(longest);
// 3-mashq
let str = "I love javascript";
let words = str.split(" ");
let longest = words.reduce((a,b)=> a.length>b.length?a:b);
console.log(longest);
// 4-mashq
let arr = [1,2,3];
let res = [];

for(let i = arr.length-1; i>=0; i--){
  res.push(arr[i]);
}
console.log(res);
// 5-mashq
let arr = [0,1,0,3,12];
let res = arr.filter(x=>x!==0).concat(arr.filter(x=>x===0));
console.log(res);
