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
        makeCollage(width, height);
    };
    div1.appendChild(btn);

    var div2 = document.createElement('div');
    div2.id = 'div2';
    div2.style.width = width;
    div2.style.height = height;
    div2.style.background = "#d7e1f2";
    div2.style.color = "white";

    var x = document.createElement("canvas");
    x.setAttribute('id', 'viewport');
    // document.body.appendChild(x);
    div2.appendChild(x);
    div.appendChild(div2);
    div.appendChild(div1);
//text
    // getText();

    //getText();
    //getText();
    //getText();
    var canvas = document.getElementById('viewport');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');
    wrapText(context, texts, 20, 50, 500, 30);

    //div.appendItem(texts);
    div.innerText(texts);
    var p = $('div');
    var lines = p.html().split("\n");
    var formated = [];
    $.each(lines, function (i, v) {
        formated.push("<span>{1}</span>".replace('{1}', v));
    });
    p.html(formated.join(''));
}

function makeCollage(width, height) {
    //draw an empty canvas
    var canvas = document.getElementById('viewport');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');

    createImage('https://source.unsplash.com/collection/1127163/300x200', 0, 0, context, 0);
    createImage('https://source.unsplash.com/collection/1127177/300x200', width / 2 + 20, 0, context, 1);
    createImage('https://source.unsplash.com/collection/1127156/300x200', 0, height / 2, context, 2);
    createImage('https://source.unsplash.com/collection/1147624/300x200', width / 2 + 20, height / 2, context, 3);


}


function wrapText(context, texts, marginLeft, marginTop, maxWidth, lineHeight) {
    var words;
    words = texts.split(" ");
    var countWords = words.length;
    var line = "";
    for (var n = 0; n < countWords; n++) {
        var testLine = line + words[n] + " ";
        var testWidth = context.measureText(testLine).width;
        if (testWidth > maxWidth) {
            context.fillText(line, marginLeft, marginTop + i * lineHeight);
            line = words[n] + " ";
            marginTop += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, marginLeft, marginTop + i * lineHeight);
}


function createImage(url, y, x, context, index) {
    var base_image = new Image();

    base_image.onload = function () {
        context.drawImage(base_image, x, y);

        context.font = "16pt Calibri";
        context.fillStyle = "#000";
        context.fillText(texts[index], x + 20, y + 50);
    };

    base_image.src = url;

}

$(document).ready(function () {
    createDOM(500, 500);


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




