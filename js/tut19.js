console.log('Welcome to tut 19');

link=document.links;
str='ama'; 
Array.from(link).forEach(function (elements) {
href=elements.href.toString();
if(href.includes(str))
{
console.log(href);
}

})