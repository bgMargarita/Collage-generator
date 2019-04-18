function prepareCanvas() {
    var body = document.getElementsByTagName('body')[0];
    var x = document.createElement("canvas");
    x.setAttribute('id', 'viewport');
    document.body.appendChild(x);

}

function makeCollage(width, height) {
    //draw an empty canvas
    var canvas = document.getElementById('viewport');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');

    //add first image
    base_image = new Image();
    base_image.src = 'https://images.unsplash.com/photo-1478905094053-75043450c873?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9';
    context.drawImage(base_image, 0, 0);

    //add second image
    base_image2 = new Image();
    base_image2.src = 'https://images.unsplash.com/photo-1481747435017-5e320257af53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    context.drawImage(base_image2, 150, 50);

    //add third image
    base_image3 = new Image();
    base_image3.src = 'https://images.unsplash.com/photo-1461092678334-1aa3ab3543ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    context.drawImage(base_image3, 20, 150);

}

$(document).ready(function () {
    prepareCanvas();
    makeCollage(500, 400);

    getPhrase();

});

function getPhrase() {
    alert("getphrase");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        //if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        //}
    };
    xhttp.open("GET", "https://api.forismatic.com/api/1.0/?method=getQuote", true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();


}