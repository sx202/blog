package controllers

import (
	"database/sql"
	"github.com/astaxie/beego"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"strings"
)

type LoginPage struct {
	beego.Controller
}

func (c *LoginPage) LoginPageSubmit()  {

	UserName := strings.TrimSpace(c.GetString("username"))
	PassWord := strings.TrimSpace(c.GetString("password"))

	db,err := sql.Open("sqlite3","./database/blog.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows,err := db.Query("select username,password from blog_user")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var username string
		var password string
		err=rows.Scan(&username,&password)

		if err != nil {
			log.Fatal(err)
		}
		//fmt.Println(UserName,PassWord)
		if username == UserName {
			if password == PassWord{
				c.Data["USERNAME"] = UserName
				c.TplName = "index.html"
			}else {
				c.Data["error"] = "登录密码错误，请重新输入！"
				c.TplName = "login.html"
			}
		}

	}
}