function func1() {

	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			const error = true;
			if (!error) {
				console.log("Your Promise has been resolved");
				resolve();
			} else {
				console.log("Your Promise has been rejected");
				reject('Sorry not fullfilled');
			}

		}, 2000);
	})
}


func1().then(function () {
	console.log("Mandar :Thanks for resolving");
}).catch(function (string) {

	console.log("Mandar :Very Bad bro " + string);
})