const counters = document.querySelectorAll('.counter');
const speed = 700; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target'.toLocaleString("pt-BR"));
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = parseInt(target) / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + parseInt(inc);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target.toLocaleString("pt-BR");
		}
	};
	updateCount();
});
