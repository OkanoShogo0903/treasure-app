<template>
  <v-container>
		<v-layout justify-center>
			<v-card-title class="font-weight-bold">音声認識によって調べものができるサービスです</v-card-title>
		</v-layout>
    <v-layout text-center wrap >
      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">Let speak something!</h2>
			<v-btn id="startSpeech" class="headline font-weight-bold mb-3" @click="recognitionToggle()">Recognition</v-btn>
      </v-flex>
    </v-layout>
		<v-layout justify-center>
			<a
				v-for="(res, i) in responses"
				:key="i"
				class="subheading mx-3"
				target="_blank"
			>
				{{ res.text }}
			</a>
		</v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
//import vuetify from './plugins/vuetify';

const successHandler = function(text) {
  document.getElementById("success").textContent = JSON.stringify(text);
}
const errorHandler = function(error) {
  document.getElementById("error").textContent = `${error.name}: ${error.message}`;
}

const request = function(method, url, body_text) {
  console.log(JSON.stringify({text: body_text}))

  let params = new URLSearchParams();
  params.append('text', body_text);

  axios.post(url, {text: body_text})
  .then(res => {
    console.log(res.status);
    console.log(res.data);

		console.log("add result complete 1")
		addResult(res.data)
		console.log("add result complete 2")

		//Vue.set(this, res.data);
		//this.$emit('GET_AJAX_COMPLETE');
  })
  .catch(error => {
      console.log(error);
  });
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
  request("POST", "http://localhost:1145/speech", result)
	//responses.push(addData);
  //alert(result);
}

recognition.onerror = function(event) {
}

export default {
  data: () => ({
    responses: [
      {
        text: 'vuetify-loader',
      },
      {
        text: 'github',
      },
    ],
  }),
  methods: {
    recognitionToggle () {
      recognition.start();
    },
		addResult(text){
			console.log("add responses!!")
			this.responses[0].text = text
			console.log(this.responses[0].text);
			console.log(this.responses[1].text);
		}
  },
  created(){
    //request("POST", "http://localhost:1145/speech", "エコー キーボード調べて")
    this.responses[0].text = "000"
    this.responses[1].text = request("POST", "http://localhost:1145/speech", "ボブ キーボード")
    console.log(this.responses[0].text);
    console.log(this.responses[1].text);
  },
}

</script>
