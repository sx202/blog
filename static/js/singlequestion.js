

function singlequestion() {
    let xmlhttp;
    xmlhttp=null;

    let url = 'http://blog_api.sunxinall.com/test';

    if (window.XMLHttpRequest)
    {// code for Firefox, Mozilla, IE7, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp!==null)
    {

        xmlhttp.onreadystatechange=function ()
        {
            if (xmlhttp.readyState === 4)
            {// 4 = "loaded"
                if (xmlhttp.status === 200)
                {
                    let txt = xmlhttp.responseText;
                    console.log(txt);
                }
                else
                {
                    alert("Problem retrieving data:" + xmlhttp.statusText);
                }
            }
        };

        // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xmlhttp.open("POST",url,true);
        xmlhttp.send("1");
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}


