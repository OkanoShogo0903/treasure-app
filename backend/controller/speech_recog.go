package controller

import (
	"net/http"

	"../model"

	"github.com/gin-gonic/gin"
)

type SpeechPostRequest struct {
	text string `json:"response_text"`
}

func SpeechPost(post *model.SpeechResult) gin.HandlerFunc {
	return func(c *gin.Context) {
		//requestBody := SpeechPostRequest{}
		//c.Bind(&requestBody)
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Header("Access-Control-Max-Age", "86400")
		c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		result := SpeechPostRequest{"It is response text"}
		c.JSON(http.StatusOK, result) // resultは構造体のリスト
	}
}
