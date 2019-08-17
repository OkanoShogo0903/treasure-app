<template>
  <div class="container">
    <h2 class="content__section header text-center">
      Almighty
    </h2>
    <p class="bg-success text-center">Formにテキストいれてボタン押すとそれが投稿として処理される仕様</p>

    <recognition></recognition>

    <!-- Form -->
    <div class="col-md-8">
      title
      <input type="text" v-model="form_title">
      body
      <input type="text" v-model="form_text">

      <button @click="run()">Send</button>
    </div>

    <!-- SandBox -->
    <div class="well well-lg col-md-10 col-md-offset-1">
      <div class="col-md-5">
        <h3>#1 Success</h3>
        <textarea rows="10" cols="50" id="success" disabled></textarea>
      </div>
      <div class="col-md-5">
        <h3>#2 Error</h3>
        <textarea rows="10" cols="50" id="error" style="color:red" disabled></textarea>
      </div>
    </div>
  </div>
</template>


<script>
import recognition from './components/recognition'

/*
const request = function(method, url, body={}) {
  // プロミス : 非同期通信をやるやつ
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  let options = {}
  if (method === "POST"){
    options = {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: headers,
      body: JSON.stringify(body), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    }
  }

  return fetch(url, options)
    .then(function(res){
      if (res.ok){ // 2xx
        //console.log(res.json())
        //console.log(res.text())
        return res.text()
        //return JSON.parse(res.text());
      }
      if (res.status === 504){
        throw new Error("504 error")
      }
      throw new Error("4xx error")
    })
    .then(function(text){
      try{
        return JSON.parse(text)
      }
      catch(e){
        if ( e.name === "SyntaxError" ){
          throw new Error("json error")
        }
      }
    });
}
*/
export default {
  components: {
    //myheader
    recognition
  },
  data () {
    return {
      article: 'default_article!',
      form_title: 'default_title',
      form_text: 'default_body',
    }
  },
  methods: {
    run () {
      // TODO: this.article_titles
      //this.article_texts = request("POST", "http://localhost:1991/articles", {"title": this.form_title, "body": this.form_text, "tag_ids":[1, 2] }).then(successHandler).catch(errorHandler)
    }
  },
  created () {
      // GET 2xx
      //this.articles = request("GET", "http://localhost:1991/articles").then(successHandler).catch(errorHandler)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  margin: 40px 0 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
