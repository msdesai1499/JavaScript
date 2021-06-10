console.log('This is tut 24');

let today=new Date();
console.log(typeof(today));
let otherDate=new Date('06/29/2000');
otherDate=new Date('June 29 2000');
otherDate=new Date('8-4-2003 04:54:08');//Format MM/DD//YY
// console.log(otherDate); 
let day=otherDate.getDay();
day=otherDate.getDate();
day=otherDate.getMinutes();
day=otherDate.getSeconds();
day=otherDate.getHours();
day=otherDate.getTime();
day=otherDate.getMilliseconds();
day=otherDate.getMonth();
console.log(day);
otherDate.setDate(23);
otherDate.setMonth(1);
otherDate.setFullYear(1966);
otherDate.setMinutes(44);
otherDate.setHours(18);
otherDate.setSeconds(29);
console.log(otherDate);