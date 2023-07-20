const bunnyAudio = new Audio('/src/assets/sounds/bunny.mp3');
const ppAudio = new Audio('/src/assets/sounds/pp.mp3');
const sunsetAudio = new Audio('/src/assets/sounds/sunset.mp3');
const wavesAudio = new Audio('/src/assets/sounds/waves.mp3');

bunnyAudio.loop = true;
ppAudio.loop = true;
sunsetAudio.loop = true;
wavesAudio.loop = true;

export { bunnyAudio, ppAudio, sunsetAudio, wavesAudio }