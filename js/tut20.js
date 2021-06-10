console.log('This is tut 20');

let impArray=['Tomato','Potato','Brinjal'];

// localStorage.setItem('FName','Mandar');//Add a key value inside local storage
// localStorage.setItem('LName','Desai');
// localStorage.setItem('vegetables',JSON.stringify(impArray));
// localStorage.clear();
//CLears the entire local Storage

// localStorage.removeItem('FName');//Removes particular Key value pair

let name=JSON.parse(localStorage.getItem('vegetables'));//Retrieve an item form the local storage
console.log(name[0]);


// sessionStorage.setItem('FNamesession','Mandar');//Add a key value inside local storage
// sessionStorage.setItem('LNamesession','Desai');
// sessionStorage.setItem('vegetablessession',JSON.stringify(impArray));
