var xmlhttp;
function loadXMLDoc()
{
    xmlhttp=null;

    let url = 'http://blog_api.sunxinall.com/viewquestionall';

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
        xmlhttp.open("GET",url,true);
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
                createDiv(len,object[len].Question,object[len].Option_A,object[len].Option_B,object[len].Option_C,object[len].Option_D,object[len].Option_E,object[len].Option_F,object[len].Option_G);
            }

            // for (let len=0;len<10;len++){
            //     createDiv(len,object[len].Question,object[len].Option_A,object[len].Option_B,object[len].Option_C,object[len].Option_D,object[len].Option_E,object[len].Option_F,object[len].Option_G);
            // }

        }
        else
        {
            alert("Problem retrieving data:" + xmlhttp.statusText);
        }
    }
}

function createDiv(id,question,optionA,optionB,optionC,optionD,optionE,optionF,optionG,answer1,answer2,answer3,answer4,answer5,answer6,answer7) {

    document.write('<div id="div">');

    let title = "<a >"+"第"+id+"题"+"</a>";
    document.write(title);

    document.write('<br>');

    let textarea = "<textarea>"+question+"</textarea>";
    document.write(textarea);

    document.write('<br>');

    document.write('<form id="option_form">');

    if (optionA !== 'NULL' && optionA !== '')
    {
        let option_a = "<p><input type=\"checkbox\">A: "+optionA+"</p>";
        document.write(option_a);
    }

    if (optionB !== 'NULL' && optionB !== '')
    {
        let option_b = "<p><input type=\"checkbox\">B: "+optionB+"</p>";
        document.write(option_b);
    }

    if (optionC !== 'NULL' && optionC !== '')
    {
        let option_c = "<p><input type=\"checkbox\">C: "+optionC+"</p>";
        document.write(option_c);
    }

    if (optionD !== 'NULL' && optionD !== '')
    {
        let option_d = "<p><input type=\"checkbox\">D: "+optionD+"</p>";
        document.write(option_d);
    }

    if (optionE !== 'NULL' && optionE !== '')
    {
        let option_e = "<p><input type=\"checkbox\">E: "+optionE+"</p>";
        document.write(option_e);
    }

    if (optionF !== 'NULL' && optionF !== '')
    {
        let option_f = "<p><input type=\"checkbox\">F: "+optionF+"</p>";
        document.write(option_f);
    }

    if (optionG !== 'NULL' && optionG !== '') {
        let option_g = "<p><input type=\"checkbox\">G: "+optionG+"</p>";
        document.write(option_g);
    }

    document.write('</form>');

    document.write('</div>');

    document.write('<hr>');

}