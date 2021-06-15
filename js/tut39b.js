console.log('This is tut 37');


const students = [
	{
		name: "Mandar", subject: "JavaScript"
	},
	{
		name: "Mahesh", subject: "Machine Learning"
	}
]

function enrollStudent(student) {

	return new Promise(function (resolve, reject) {

		setTimeout(function () {
			students.push(student);
			console.log("Student has been enrolled");
			const error = false;
			if (!error) {
				resolve();
			}
			else {
				reject();
			}
		}, 3000);
	})

}
function getStudents() {
	setTimeout(function () {
		let str = "";
		students.forEach(function (student) {
			str += `<li>${student.name}</li>`
		})
		document.getElementById('students').innerHTML = str;
		console.log("Student has been Fetched");
	}, 1000);

}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
	console.log('Some error occured');
});


//inside then - resolved
//inside catch - reject

