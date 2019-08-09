package controllers

import (
	"database/sql"
	"github.com/astaxie/beego"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

type Enter_Question struct {
	beego.Controller
}

func (c *Enter_Question) Enter_Question_Page() {

	Question := c.GetString("question")

	Option_a := c.GetString("option_a")
	Option_b := c.GetString("option_b")
	Option_c := c.GetString("option_c")
	Option_d := c.GetString("option_d")
	Option_e := c.GetString("option_e")
	Option_f := c.GetString("option_f")
	Option_g := c.GetString("option_g")

	Answer_a := c.GetString("answer_a")
	Answer_b := c.GetString("answer_b")
	Answer_c := c.GetString("answer_c")
	Answer_d := c.GetString("answer_d")
	Answer_e := c.GetString("answer_e")
	Answer_f := c.GetString("answer_f")
	Answer_g := c.GetString("answer_g")


if Question == "" {
	c.Data["Enter_Question_Error"] = "题目不能为空，请重新输入！"
	c.TplName = "Enter_Question.html"
}else {
	if Option_a == "" {
		c.Data["Enter_Question_Error"] = "选项不能为空，请重新输入！"
		c.TplName = "Enter_Question.html"
	}else {
		if Option_b == "" {
			c.Data["Enter_Question_Error"] = "选项不能为空，请重新输入！"
			c.TplName = "Enter_Question.html"
		}else {
			if Option_c == "" {
				c.Data["Enter_Question_Error"] = "选项不能为空，请重新输入！"
				c.TplName = "Enter_Question.html"
			}else {
				if Option_d == "" {
					c.Data["Enter_Question_Error"] = "选项不能为空，请重新输入！"
					c.TplName = "Enter_Question.html"
				}else {
					if Answer_a == "" {
						c.Data["Enter_Question_Error"] = "至少需要一个答案，请重新输入！"
						c.TplName = "Enter_Question.html"
					}else {
						if Option_e == "" {
							Option_e="NULL"
						}

						if Option_e == "" {
							Option_e="NULL"
						}

						if Option_e == "" {
							Option_e="NULL"
						}

						if Answer_b == "" {
							Answer_b="NULL"
						}

						if Answer_c == "" {
							Answer_c="NULL"
						}

						if Answer_d == "" {
							Answer_d="NULL"
						}

						if Answer_e == "" {
							Answer_e="NULL"
						}

						if Answer_f == "" {
							Answer_f="NULL"
						}

						if Answer_g == "" {
							Answer_g="NULL"
						}

						db,err := sql.Open("sqlite3","./database/blog.db")
						if err != nil {
							log.Fatal(err)
						}
						defer db.Close()

						tx, err := db.Begin()
						if err != nil {
							log.Fatal(err)
						}
						stmt, err := tx.Prepare("insert into question_063(Question,Option_A,Option_B,Option_C,Option_D,Option_E,Option_F,Option_G,Correct_Answer_1,Correct_Answer_2,Correct_Answer_3,Correct_Answer_4,Correct_Answer_5,Correct_Answer_6,Correct_Answer_7) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)")
						if err != nil {
							log.Fatal(err)
						}
						defer stmt.Close()

						_, err = stmt.Exec(&Question,&Option_a,&Option_b,&Option_c,&Option_d,&Option_e,&Option_f,&Option_g,&Answer_a,&Answer_b,&Answer_c,&Answer_d,&Answer_e,&Answer_f,&Answer_g)
						if err != nil {
							log.Fatal(err)
						}

						tx.Commit()

						c.TplName = "Enter_Question.html"
					}
				}
			}
		}
	}
}

}
