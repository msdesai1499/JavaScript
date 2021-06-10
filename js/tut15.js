console.log('This is tut 15');
let cont=document.querySelector('.no');
cont=document.querySelector('.container');
let nodetype=cont.childNodes[1].nodeType;
let nodename=cont.childNodes[1].nodeName;
console.log(nodename);
console.log(nodetype);
// Node types 
//1-Element 
// 2-Attribute
// 3-Text Node
// 8.Comment
// 9.Document
// 10.docType
// console.log(cont.children);
// console.log(cont.childNodes);

let container=document.querySelector('.container');
// console.log(container.children[1].children[0].children[0]);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
 console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
