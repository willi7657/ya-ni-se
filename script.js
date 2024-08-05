const cielo = document.querySelector('.cielo');

for (let i = 0; i < 1000; i++) {
	const estrella = document.createElement('div');
	estrella.classList.add('estrella');
	cielo.appendChild(estrella);
	estrella.style.top = `${Math.random() * 100}%`;
	estrella.style.right = `${Math.random() * 100}%`;
	estrella.style.animationDelay = `${Math.random() * 17}s`;
}
const audio = document.getElementById('musica');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

playButton.addEventListener('click', () => {
	audio.play();
});

stopButton.addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
});