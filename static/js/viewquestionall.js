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

function createDiv(id,question,optionA,optionB,optionC,optionD,optionE,optionF,optionG,answer1,answer2,answer3,answer4,answer5,answer6,answer7) {

    let option = [
        optionA,
        optionB,
        optionC,
        optionD,
        optionE,
        optionF,
        optionG
    ];

    let answer = [
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7
    ];

    let num = [
        "A: ",
        "B: ",
        "C: ",
        "D: ",
        "E: ",
        "F: ",
        "G: ",
    ];

    let answerNums = 0;
    for (let ai=0;ai<answer.length;ai++){
        if (answer[ai] === "NULL"){
            answerNums=answerNums+1;
        }
    }

    document.write('<div id="div">');

    let title = "<p >"+"第"+id+"题"+"</p>";
    document.write(title);


    // let textarea = "<textarea  id='a' style='height: auto;width: 80%'>"+question+"</textarea>";
    let textarea = "<pre>"+question+"</pre>";
    document.write(textarea);


    // document.write('<br>');

    document.write('<form id="option_form">');

    let option_title = "<p>选项</p>";
    document.write(option_title);

    for (let i=0;i<option.length;i++){
        if (option[i] !== 'NULL' && option[i] !== '')
        {
            if (answerNums >5){
                let option_a = "<p><input type=\"radio\" name='option'/>" + num[i] + option[i] + "</p>";
                document.write(option_a);
            }else {
                let option_a = "<p><input type=\"checkbox\" />" + num[i] + option[i] + "</p>";
                document.write(option_a);
            }
        }
    }

    document.write('</form>');

    document.write('</div>');

    document.write('<hr>');

}