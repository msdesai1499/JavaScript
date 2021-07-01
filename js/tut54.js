console.log('This is tut 54');

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/37827-4033.mp3');

function ringBell() {
	audio.play();

}

function setAlarm(e) {
	e.preventDefault();

	console.log("Setting Alarm ...");
	const alarm = document.getElementById('alarm');
	alarmDate = new Date(alarm.value);
	console.log(alarmDate);

	now = new Date();

	let timeToAlarm = alarmDate - now;

	console.log(now);
	console.log(timeToAlarm);

	// 2021-06-30 19:40:20

	if (timeToAlarm >= 0) {
		setTimeout(() => {
			ringBell();
		}, timeToAlarm);
	}
}