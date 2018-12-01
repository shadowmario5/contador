const getRemainTime = deadline => {

	let now = new Date(),
		remainTime = (new Date(deadline) - now + 1000) / 1000,
		remainSecods = ('0'+ Math.floor(remainTime % 60)).slice(-2),
		remainMinutes = ('0'+ Math.floor(remainTime / 60 % 60)).slice(-2),
		remainHours = ('0'+ Math.floor(remainTime / 3600 % 24)).slice(-2),
		remainDays = Math.floor(remainTime / (3600 * 24));

	return {

		remainTime,
		remainSecods,
		remainMinutes,
		remainHours,
		remainDays,
	
	}
};

const countdown = (deadline, elem, finalMessage) => {

	const el = document.getElementById(elem);

	const timerUpdate = setInterval( () => {
		let t = getRemainTime(deadline);
		el.innerHTML = `${t.remainDays}Dias: ${t.remainHours}Horas: ${t.remainMinutes}Minutos: ${t.remainSecods}Segundos`;


		if(t.remainTime <=1){

			clearInterval(timerUpdate);
			el.innerHTML = finalMessage;
		}

	}, 1000)
};

countdown('Nov 21 2018 13:20:15 GMT-0600', 'Contador', 'La cuenta termino')