<template>
<body>
  <button id="startSpeech" @click="recognitionToggle()">Recognition</button>
</body>
</template>

<script>
import axios from 'axios';

const successHandler = function(text) {
  document.getElementById("success").textContent = JSON.stringify(text);
}
const errorHandler = function(error) {
  document.getElementById("error").textContent = `${error.name}: ${error.message}`;
}

const request = function(method, url, body_text) {
  axios({
      url    : url,
      method : method,
      headers: {
        "Content-Type": "application/json",
      },
      body : {text: body_text}, 
  })
  /* 
        "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      data   : { text : body_text }
  */
  .then(res => {
    console.log(res.status);
  })
  .catch(error => {
      console.log(error);
  });
  /*
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.state.token}`
    },
    body: JSON.stringify({body: body_text})
  })
  */
};

const speechRecognition = () => {
  if ("SpeechRecognition" in window) {
    return new SpeechRecognition();
  } else if ("webkitSpeechRecognition" in window) {
    return new webkitSpeechRecognition();
  } else {
    return undefined;
  }
}

const recognition = speechRecognition();

recognition.lang = "ja-JP";
recognition.onstart = function() {
}

recognition.onresult = function(event) {
  let result = event.results[0][0].transcript;
  this.words = request("POST", "http://localhost:1145/speech", result)
  alert(result);
}

recognition.onerror = function(event) {
}

let is_active = false;
export default {
  methods: {
    recognitionToggle () {
      if ( is_active === false ) {
        is_active = true;
        recognition.start();
      }
      else{
        is_active = false;
      }
    }
  }
}
</script>
