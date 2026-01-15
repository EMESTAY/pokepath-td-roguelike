export class Utility {
	numberDot(num, lang = 0) {
		if ([0, 6, 7].includes(lang)) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		else if (lang === 2) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		else return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	minutsToTime(min) {
		const h = Math.floor(min/60)
		const m = min - (h*60);
		return `${h}:${m.toString().padStart(2, '0')}`;
	}

	isBetweenHours(start, end) {
	    const now = new Date();
	    const hour = now.getHours();
	    return hour >= start && hour < end;
	}

	chrono(speed = 1) {
	    let centesimas = 0; 
	    let intervalId = null;

	    function showTime() {
	        const totalSegundos = Math.floor(centesimas / 100);

	        const horas = Math.floor(totalSegundos / 3600);
	        const minutos = Math.floor((totalSegundos % 3600) / 60);
	        const segundos = totalSegundos % 60;
	        const cs = centesimas % 100;

	        document.getElementById('ui-chrono').innerText =
	            `${horas.toString().padStart(2, '0')}:` +
	            `${minutos.toString().padStart(2, '0')}:` +
	            `${segundos.toString().padStart(2, '0')}.` +
	            cs.toString().padStart(2, '0');
	    }

	    function startInterval() {
	        intervalId = setInterval(() => {
	            centesimas++;
	            showTime();
	        }, 10 / speed); 
	    }

	    return {
	        start() {
	            if (!intervalId) startInterval();
	        },

	        stop() {
	            clearInterval(intervalId);
	            intervalId = null;
	        },

	        restart() {
	            this.stop();
	            centesimas = 0;
	            showTime();
	        },

	        speedChange(newSpeed) {
	            speed = newSpeed;
	            if (intervalId) {
	                this.stop();
	                this.start();
	            }
	        }
	    };
	}
}
