package routers

import (
	"github.com/sx202/blog/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.PageController{},"*:Index")
	beego.Router("/index.html", &controllers.PageController{},"*:Index")

	beego.Router("/about.html", &controllers.PageController{},"*:About")
	beego.Router("/album.html", &controllers.PageController{},"*:Album")
	beego.Router("/details.html", &controllers.PageController{},"*:Details")
	beego.Router("/leacots.html", &controllers.PageController{},"*:Leacots")
	beego.Router("/whisper.html", &controllers.PageController{},"*:Whisper")

	beego.Router("/login", &controllers.PageController{},"*:Login")
	beego.Router("/login.html", &controllers.PageController{},"*:Login")
	beego.Router("/from_submit", &controllers.LoginPage{},"*:LoginPageSubmit")


	beego.Router("/Enter_Question", &controllers.PageController{},"*:Enter_Question")
	beego.Router("/Enter_Question_Submit", &controllers.Enter_Question{},"*:Enter_Question_Page")



}
