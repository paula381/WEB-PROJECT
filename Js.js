const openModalpopButtons = document.querySelectorAll('[data-modalpop-target]')
const closeModalpopButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalpopButtons.forEach(button => {
button.addEventListener('click', () => {
    const modalpop = document.querySelector(button.dataset.modalpopTarget)
    openModalpop(modalpop)
})
})

closeModalpopButtons.forEach(button => {
    button.addEventListener('click', () => {
    const modalpop = button.closest('.modalpop')
        closeModalpop(modalpop)
    })
    })
    

function openModalpop(modalpop) {
    if (modalpop == null) return
    modalpop.classList.add('active')
    overlay.classList.add('active')
}

function closeModalpop(modalpop) {
    if (modalpop == null) return
    modalpop.classList.remove('active')
    overlay.classList.remove('active')
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}







const counters = document.querySelectorAll('.counter');
const speed = 10; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		//console.log(inc);
		//console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 200);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


/* Start of Gallery Script*/
const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.5;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  // Reset the opacity
  img.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
/* End of Gallery Script*/