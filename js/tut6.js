console.log('We are at tut6');
const name='Mandar';
const greeting='Hello how are you';
console.log(greeting+' '+name);

let html;
html='<h1>This is Heading</h1>'+
'<p>This is my Para</p>';
html=html.concat('this ','str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[0]);
console.log(html[1]);

console.log(html.indexOf('T'));
console.log(html.lastIndexOf('T'));
console.log(html.charAt(5));
console.log(html.endsWith('str2'));
console.log(html.includes('ding'));
console.log(html.substring(0,7));
console.log(html.slice(-4));
console.log(html.split(' '));

console.log(html.replace('This','it'));

let fruit1='Orange\'';
let fruit2='Mango';
let myHtml=`Hello ${name}
<h1>This is Heading</h1>
<p>You like ${fruit1} and ${fruit2}</p>
`;
document.body.innerHTML=myHtml;

// let myCOde=`<h1>Hello How Are You</h1>
// <h2>I am Fine</h2>`;
// document.body.innerHTML=myCOde;






