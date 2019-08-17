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
  console.log("here")
  console.log(body_text)
  console.log(JSON.stringify({text: body_text}))

  let params = new URLSearchParams();
  params.append('text', body_text);

  //axios.post(url, params)
  axios.post(url, {text: body_text})

  /*
  axios({
      url    : url,
      method : method,
      headers: {
        "Content-Type": "text/plain",
      },
      body : body_text, 
  })

  */

  /* 

      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({text: body_text})


      body : JSON.parse(body_text), 

      "Content-Type": "text/plain",
      mode: 'cors',
      data   : { text : body_text }
  */
  .then(res => {
    console.log(res.status);
    console.log(res.data);
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
  //alert(result);
}

recognition.onerror = function(event) {
}

export default {
  methods: {
    recognitionToggle () {
      recognition.start();
    }
  },
  created(){
    //request("POST", "http://localhost:1145/speech", "エコー キーボード調べて")
    request("POST", "http://localhost:1145/speech", "ボブ キーボード")
  }
}
</script>
