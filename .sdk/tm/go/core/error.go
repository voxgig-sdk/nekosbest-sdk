package core

type NekosbestError struct {
	IsNekosbestError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNekosbestError(code string, msg string, ctx *Context) *NekosbestError {
	return &NekosbestError{
		IsNekosbestError: true,
		Sdk:              "Nekosbest",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NekosbestError) Error() string {
	return e.Msg
}
