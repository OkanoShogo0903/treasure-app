package main

import (
	"fmt"

	"./controller"
	"./model"

	"github.com/gin-gonic/gin"
)

func main() {
	speech_result := model.New()
	router := gin.Default()

	// サーバサイドレンダリングっていうのがあるらしい
	router.POST("/speech", controller.SpeechPost(speech_result))

	router.Run(":1145")
}

func ReceiveRecognition(c *gin.Context) {
	fmt.Println(c)
	c.Request.ParseForm()
	fmt.Println(c.Request.Form["text"])
}
