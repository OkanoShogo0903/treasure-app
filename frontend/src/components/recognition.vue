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

		<v-layout text-center wrap >
			<v-flex v-for="res in responses" class="subheading mx-3" xs6>
				<span class="mr-2">	{{ res.question }} </span>
				<span class="mr-2">	{{ res.text }} </span>
			</v-flex>
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
	this.request("POST", "http://localhost:1145/speech", result)
}
recognition.onerror = function(event) {
}

export default {
  data: () => ({
    responses: [
      {
				question: 'keyboard',
        text: 'キーボード (keyboard) は、鍵盤を意味する語。 キーボード (楽器) - 鍵盤楽器の鍵盤のことだが、もっぱらシンセサイザーと一体化されているそれを指すことが多い。MIDI信号を送信するだけのMIDIキーボードといったものもある。 キーボード (コンピュータ) - コンピュータへの入力装置。',
      },
    ],
  }),
  methods: {
    recognitionToggle () {
      recognition.start();
    },
		request(method, url, body_text) {
			console.log(JSON.stringify({text: body_text}))

			let params = new URLSearchParams();
			params.append('text', body_text);

			axios.post(url, {text: body_text})
			.then(res => {
				console.log(res.status);
				console.log(res.data);
				this.addResult(JSON.stringify({text: res.data.text, question: body_text}))
			})
			.catch(error => {
					console.log(error);
	question		});
		},
		addResult(json_res){
			this.responses.push(json_res)
		}
  },
  created(){

    //request("POST", "http://localhost:1145/speech", "エコー キーボード調べて")
    this.request("POST", "http://localhost:1145/speech", "ボブ キーボード")
  },
}

</script>
