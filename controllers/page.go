package controllers

import "github.com/astaxie/beego"

type PageController struct {
	beego.Controller
}

func (c *PageController) Index()  {
	c.TplName = "index.html"
}

func (c *PageController) Login()  {
	c.TplName = "login.html"
}


func (c *PageController) About()  {
	c.TplName = "about.html"
}

func (c *PageController) Album()  {
	c.TplName = "album.html"
}

func (c *PageController) Details()  {
	c.TplName = "details.html"
}

func (c *PageController) Leacots()  {
	c.TplName = "leacots.html"
}

func (c *PageController) Whisper()  {
	c.TplName = "whisper.html"
}

func (c *PageController) Enter_Question()  {
	c.TplName = "Enter_Question.html"
}