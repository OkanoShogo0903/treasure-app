package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"../model"

	"github.com/gin-gonic/gin"
)

type SpeechPostRequest struct {
	Text string `json:"text"`
}

func request2WordApi(word *string) (*string, error) {
	//fmt.Println(*word)
	url := "http://wikipedia.simpleapi.net/api?keyword=" + *word + "&output=json"

	url = strings.Join(strings.Fields(url), "")
	fmt.Println(url)
	res, err := Get(url)
	if err != nil {
		return nil, err
	}
	return res, nil
}

type Wikipedia struct {
	Body string
}

func Get(url string) (*string, error) {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("1")
		return nil, err
	}
	byteArray, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("2")
		return nil, err
	}

	var wikis []Wikipedia
	err = json.Unmarshal(byteArray, &wikis)
	if err != nil {
		fmt.Println("3")
		return nil, err
	}
	//fmt.Println(wikis["Body"])
	for i := range wikis {
		fmt.Println(wikis[i].Body)
	}

	if len(wikis) > 0 {
		fmt.Println("4")
		return &wikis[0].Body, nil
	}
	return nil, nil
}

func SpeechPost(r *model.SpeechResult) gin.HandlerFunc {
	return func(c *gin.Context) {
		// TODO: CORSについて、どれだけの範囲を許可するかを決める、またはHelpに投稿してみる。
		fmt.Println("SpeechPost!!!")
		//var r SpeechPostRequest
		if err := c.BindJSON(&r); err != nil {
			panic(err)
		}

		// wakeupワード以降の文字列を得る
		wake := []rune("ボブ")
		rs := []rune(r.Text)
		search_index := strings.IndexRune(r.Text, 1) + len(wake) + 1
		want_search := string(rs[search_index:])

		// 名詞の切り出し、ほしくない?
		fmt.Println(search_index)
		fmt.Println(want_search)

		p, err := request2WordApi(&want_search)
		if err != nil {
			fmt.Printf("%+v", err)
			//c.JSON(http.StatusOK, gin.H{"text": "err nil"})
			c.JSON(http.StatusInternalServerError, gin.H{"text": "err"})
			return
		}
		if p == nil {
			//c.Header("404", "err404")
			//c.JSON(http.StatusBadRequest, gin.H{"text": "err"})
			fmt.Printf("%+v", err)
			c.JSON(http.StatusOK, gin.H{"text": "検索候補が見つかりませんでした"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"text": p})
	}
}
