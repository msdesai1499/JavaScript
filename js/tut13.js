console.log('This is tut 13');
a='u';

for(let i=0;i<document.links.length;i++)
{
	let c=document.links[i].href.toString();
	if(c.includes(a)){
		console.log(c);
	}
	
}