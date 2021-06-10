console.log('This is tut 16');
let element=document.createElement('li');
let text=document.createTextNode(' I am a Text Node');
element.appendChild(text);
//Add class name to element
element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');
// element.innerHTML='<b>Hello how are you<b>';


let ul=document.querySelector('ul.this');
console.log(ul);
ul.appendChild(element);
console.log(element);

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
tnode=document.createTextNode('This is a text node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));

myul.removeChild(document.getElementById('lui'));
console.log(elem2);
let pr=elem2.getAttribute('id');
console.log(pr);
let mr=elem2.hasAttribute('id');
console.log(mr);
let rr=elem2.removeAttribute('id');
elem2.setAttribute('title','Hello');


ele=document.createElement('h3');
txt=document.createTextNode('Go to Pune');
ele.id='ele';
ele.className='ele';
ele.appendChild(txt);
ahr=document.createElement('a');
ahr.setAttribute('href','http://www.youtube.com');
ahr.appendChild(ele);
ul.appendChild(ahr);

