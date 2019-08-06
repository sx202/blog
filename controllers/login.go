package controllers

import (
	"github.com/astaxie/beego"
	"strings"
)

type LoginPage struct {
	beego.Controller
}


func (c *LoginPage) LoginPageSubmit()  {


	UserName := strings.TrimSpace(c.GetString("username"))
	//PassWord := strings.TrimSpace(c.GetString("password"))
	if UserName == "sunxin" {
		c.TplName = "index.html"
		c.Data["USERNAME"] = UserName
	}else {
		c.TplName = "about.html"
	}

}