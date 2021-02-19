document.querySelectorAll("h1, h2").forEach(function(h2){
    h2.onclick = function() {
        //let voices = speechSynthesis.getVoices();

        let msg = new SpeechSynthesisUtterance(this.innerText);

        msg.pitch = 1.7;


        //let index = getRandomInt(0, voices.length);

        //msg.voice = voices[index];

        speechSynthesis.speak(msg);
    }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}