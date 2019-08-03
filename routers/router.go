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






}
