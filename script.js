const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');

const minutesEl = document.getElementById('minutes');

const secondsEl = document.getElementById('seconds');

const newYears = '15 sep 2021';

function countDown() {
	const newYearDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);

	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds % 60);

	daysEl.innerHTML = formatTime(days);
	hoursEl.innerHTML = formatTime(hours);
	minutesEl.innerHTML = formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);
}

setInterval(countDown, 1000);
countDown();

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}
