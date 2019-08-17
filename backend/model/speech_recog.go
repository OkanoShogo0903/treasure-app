package model

type SpeechResult struct {
	text string `json:"speech"`
}

func New() *SpeechResult {
	return &SpeechResult{}
}
