window.onload = function () {

    var cv = document.createElement('canvas');

    cv.setAttribute("id", "cv");
    var ct = cv.getContext('2d');
    
    var body = document.getElementById("mybody");
    body.appendChild(cv);
    //ct.save();

    var w = cv.width;
    var h = cv.height;

    ct.clearRect(0, 0, w, h);
    ct.fillStyle = 'rgba(0, 255, 0, 1.0)';
    ct.fillRect(0, 0, w, h);

    ct.strokeStyle = 'rgba(127, 127, 255, 1.0)';
    ct.fillStyle = 'rgba(0, 0, 255, 1.0)';
    ct.lineWidth = 5;
    ct.beginPath();
    ct.arc(w / 2, h / 2, w / 2, h / 2, 0, 2 * Math.PI, 0);
    ct.closePath();
    //ct.stroke();
    ct.fill();


    ct.fillStyle = "rgb(200,0,0)";
    ct.fillRect (10, 10, 55, 50);

    ct.fillStyle = "rgba(0, 0, 200, 0.5)";
    ct.fillRect (30, 30, 55, 50);
    pict = new Image();
    pict.src='https://images.unsplash.com/photo-1554188068-3666131be6ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9';
    ct.drawImage(pict, 33, 71, 104, 124, 21, 20, 150, 180);


};
