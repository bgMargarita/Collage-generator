function prepareCanvas() {
    var body = document.getElementsByTagName('body')[0];
    var x = document.createElement("canvas");
    x.setAttribute('id', 'viewport');
    document.body.appendChild(x);

}

function refreshPage() {
    var btn = document.createElement('input')
    btn.id = 'b1';
    btn.type = 'button';
    btn.value = 'Update';
    btn.style = 'z-index:2';
    btn.onclick = function () {
        window.location.reload();
    };
    document.body.appendChild(btn);

}

function makeCollage(width, height) {
    //draw an empty canvas
    var canvas = document.getElementById('viewport');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');

    createImage('https://images.unsplash.com/photo-1478905094053-75043450c873?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
        , 0, 0, context);
    createImage('https://images.unsplash.com/photo-1481747435017-5e320257af53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9', 200, 0, context);
    createImage('https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9', 0, 300, context);
    context.fillText("Hello world", 10, 50);
    var maxWidth = 400; //размер поле, где выводится текст
    context.font = "16pt Calibri";
    context.fillStyle = "#000";
    context.fillText("Hello !!", 50, 50, 400);
}

/*
function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight) {
    var words = text.split(" ");
    var countWords = words.length;
    var line = "";
    for (var n = 0; n < countWords; n++) {
        var testLine = line + words[n] + " ";
        var testWidth = context.measureText(testLine).width;
        if (testWidth > maxWidth) {
            context.fillText(line, marginLeft, marginTop);
            line = words[n] + " ";
            marginTop += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, marginLeft, marginTop);
}

*/

function createImage(url, y, x, context) {
    var base_image = new Image();
    base_image.src = url;

    base_image.onload = context.drawImage(base_image, x, y);

}

$(document).ready(function () {
    prepareCanvas();
    makeCollage(900, 900);
    $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        url: '',
        success: function (jsondata) {

        }
    })

    getPhrase();

    refreshPage();


});

function getPhrase() {
    alert("getphrase");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        //if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        //}
    };
    xhttp.open("GET", "https://api.forismatic.com/api/1.0/?method=getQuote", true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}