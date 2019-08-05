package controllers

import "github.com/astaxie/beego"

type LoginPage struct {
	beego.Controller
}

type user struct {
	username string `form:"username"`
	password string `form:"password"`
}

func (c *LoginPage) LoginPageSubmit()  {
	u :=user{}
	c.ParseForm(&u)
	c.TplName = "index.html"
}