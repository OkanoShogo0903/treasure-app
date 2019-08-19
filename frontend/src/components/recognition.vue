<template>
  <v-container>
		<v-layout justify-center>
			<!--
			<v-card-title class="font-weight-bold">音声認識によって調べものができるサービスです</v-card-title>
			-->
		</v-layout>
    <v-layout text-center wrap >
      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">"ボブ"と呼びかけてから、調べたい単語を質問してみてください</h2>
			<v-btn id="startSpeech" class="headline font-weight-bold mb-3" @click="recognitionToggle()">Recognition</v-btn>
      </v-flex>
    </v-layout>

		<br>

		<v-layout text-center wrap v-for="res in responses">
		<v-card
			color="#385F73"
			dark
		>
			<v-card-text class="white--text" >
				<div class="headline" style="font-weight:bold;">{{ res.question }}</div>
				<br>
				<div style="display:flex;">
					<div class="title" style="margin-right:auto;">{{ res.text }}</div>
				<br>
				</div>
			</v-card-text>
		</v-card>
		</v-layout>

  </v-container>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'

const speechRecognition = () => {
  if ("SpeechRecognition" in window) {
    return new SpeechRecognition();
  } else if ("webkitSpeechRecognition" in window) {
    return new webkitSpeechRecognition();
  } else {
    return undefined;
  }
}
//const recognition = &speechRecognition();

export default {
  data: () => ({
    responses: [
    ],
		recognition : speechRecognition(),
  }),
  methods: {
    recognitionToggle () {
      this.recognition.start();
    },
		request(method, url, body_text) {
			console.log(JSON.stringify({text: body_text}))

			let params = new URLSearchParams();
			params.append('text', body_text);

			axios.post(url, {text: body_text})
			.then(res => {
				console.log(res.status);
				console.log(res.data);
				this.addResult(res.data.text, body_text)
			})
			.catch(error => {
					console.log(error);
			});
		},
		addResult(text, question){
			this.responses.unshift({text: text,question: question})
			console.log(this.responses);
		}
  },
  created(){
		this.recognition.lang = "ja-JP";
		this.recognition.onresult = function(event) {
			let result = event.results[0][0].transcript;
			this.request("POST", "http://localhost:1145/speech", result)
		}

    //request("POST", "http://localhost:1145/speech", "エコー キーボード調べて")
    this.request("POST", "http://localhost:1145/speech", "ボブ タピオカ")
    this.request("POST", "http://localhost:1145/speech", "ボブ マウス")
  },
}

</script>
