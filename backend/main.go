package main

import (
	"./controller"
	"./model"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

/*
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
*/
func main() {
	speech_result := model.New()
	router := gin.Default()

	router.Use(cors.Default())

	// サーバサイドレンダリングっていうのがあるらしい
	router.POST("/speech", controller.SpeechPost(speech_result))

	router.Run(":1145")
}
