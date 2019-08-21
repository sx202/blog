// var xmlhttp;
// function loadXMLDoc()
// {
//     xmlhttp=null;
//
//     let url = 'http://blog_api.sunxinall.com/viewquestionall'
//
//     if (window.XMLHttpRequest)
//     {// code for Firefox, Mozilla, IE7, etc.
//         xmlhttp=new XMLHttpRequest();
//     }
//     else if (window.ActiveXObject)
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     if (xmlhttp!=null)
//     {
//
//         xmlhttp.onreadystatechange=state_Change;
//
//         // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//         xmlhttp.open("GET",url,true);
//         xmlhttp.send(null);
//     }
//     else
//     {
//         alert("Your browser does not support XMLHTTP.");
//     }
// }
//
// function state_Change()
// {
//     if (xmlhttp.readyState === 4)
//     {// 4 = "loaded"
//         if (xmlhttp.status === 200)
//         {// 200 = "OK"
//             // var txt = document.getElementById('txt');
//             let jsontxt = xmlhttp.responseText;
//             let object =eval("("+jsontxt+")");
//             let id = object.user_11111.Username;
//
//             // document.getElementById('txt').innerHTML=xmlhttp.getResponseHeader();
//             document.getElementById('txt').innerHTML=id;
//             // txt.innerText =  console.log(jsontxt);
//
//         }
//         else
//         {
//             alert("Problem retrieving data:" + xmlhttp.statusText);
//         }
//     }
// }

function createDiv(id,question,optionA,optionB,optionC,optionD,optionE,optionF,optionG,answer1,answer2,answer3,answer4,answer5,answer6,answer7) {

    document.write('<div id=\"div\">');

    document.write('<a id=\"a\"></a>');
    document.getElementById('a').innerHTML='第'+id+'题';

    document.write('<br>')

    document.write('<textarea id=\"textarea\"></textarea>');
    document.getElementById('textarea').innerHTML=question;

    document.write('<p id="optionA"><input id="checkA" type="checkbox"></p>');
    document.getElementById('optionA').innerHTML='A:'+optionA;




    document.write('</div>');

}