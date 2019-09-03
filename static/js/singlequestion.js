let xmlhttp;

function singlequestion() {
    xmlhttp=null;

    let url = 'http://blog_api.sunxinall.com/singlequestion';

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

        xmlhttp.onreadystatechange=state_Change;

        // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xmlhttp.open("POST",url,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function state_Change()
{
    if (xmlhttp.readyState === 4)
    {// 4 = "loaded"
        if (xmlhttp.status === 200)
        {// 200 = "OK"
            // var txt = document.getElementById('txt');
            let jsontxt = xmlhttp.responseText;
            let object =eval("("+jsontxt+")");

            console.log(object);

            for (let len in object){
                createDiv(
                    parseFloat(len)+1,
                    object[len].Question,
                    object[len].Option_A,
                    object[len].Option_B,
                    object[len].Option_C,
                    object[len].Option_D,
                    object[len].Option_E,
                    object[len].Option_F,
                    object[len].Option_G,
                    object[len].Correct_Answer_1,
                    object[len].Correct_Answer_2,
                    object[len].Correct_Answer_3,
                    object[len].Correct_Answer_4,
                    object[len].Correct_Answer_5,
                    object[len].Correct_Answer_6,
                    object[len].Correct_Answer_7
                );
            }

        }
        else
        {
            alert("Problem retrieving data:" + xmlhttp.statusText);
        }
    }
}
