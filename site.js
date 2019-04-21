var coords = [];
var texts = [];

function createDOM(width, height) {
    var div = document.createElement('div')
    document.body.appendChild(div);

    var div1 = document.createElement('div')
    div1.id = 'div1';
    div1.style.width = width;
    div1.style.height = "40px";
    div1.style.background = "#ededda";
    div1.style.color = "white";

    var btn = document.createElement('input');
    btn.id = 'b1';
    btn.type = 'button';
    btn.value = 'Update';
    btn.style = 'z-index:2';
    btn.onclick = function () {
        //  makeCollage(width, height);
        location.reload();
    };
    div1.appendChild(btn);

    var div2 = document.createElement('div');
    div2.id = 'div2';
    div2.style.width = width;
    div2.style.height = height;
    div2.style.background = "#d7e1f2";
    div2.style.color = "white";


    // document.body.appendChild(x);
    var canvas = document.createElement("canvas");
    canvas.setAttribute('id', 'viewport');
    canvas.width = 400;
    canvas.height = 470;

    div2.appendChild(canvas);
    div.appendChild(div2);
    div.appendChild(div1);
    context = canvas.getContext('2d');

    wrapText(context, texts[0], 20, 50, 600, 30);

//text
    getText();
    getText();
    getText();
    getText();
    drawAfter1Seconds(width, height);

}

function drawAfter1Seconds(width, height) {
    return new Promise(resolve => {
        setTimeout(() => {
            makeCollage(width, height);
        }, 1000);
    });
}


function makeCollage(width, height) {
    //draw an empty canvas
    var canvas = document.getElementById('viewport');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');

    createImage('https://source.unsplash.com/collection/1127163/300x200', 0, 0, context, 0);
    createImage('https://source.unsplash.com/collection/1127177/300x200', width / 3 + 20, 0, context, 1);
    createImage('https://source.unsplash.com/collection/1127156/300x200', 0, height / 2 + 10, context, 2);
    createImage('https://source.unsplash.com/collection/1147624/300x200', width / 3 + 20, height / 2 + 10, context, 3);


}


function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}


function createImage(url, y, x, context, index) {
    var base_image = new Image();

    base_image.onload = function () {
        context.drawImage(base_image, x, y);

        context.font = "16pt Calibri";
        context.fillStyle = "#000";
//        wrapText(context, texts[index], x+20, y+50, 270, 30);
    };

    base_image.src = url;

}

$(document).ready(function () {
    createDOM(650, 570);

});

function getText() {

    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(update)
        .fail(handleErr);
}

function update(response) {

    console.log(JSON.stringify(response.quoteText));
    texts.push(response.quoteText);

}

function handleErr(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
}




