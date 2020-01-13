var recognition;

document.addEventListener("DOMContentLoaded", function(event) {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        // speech recognition API supported
        SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new window.SpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.onresult = (event) => {
              var current = event.resultIndex;
              var transcript = event.results[current][0].transcript;
              document.getElementById('texto').innerText += transcript;
                console.log(transcript)
        }
        recognition.onspeechend = function() {
          recognition.stop();
          console.log('Speech recognition has stopped.');
        }

        recognition.onerror = function(event) {
          if(event.error == 'no-speech') {
            console.log('No speech was detected. Try again.');
          };
        }

    }
    else {
        // speech recognition API not supported
        console.log('PUES NA')
    }
});


function reconoce() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

function cancela() {
  recognition.abort();
  console.log('Speech recognition aborted.');
}

