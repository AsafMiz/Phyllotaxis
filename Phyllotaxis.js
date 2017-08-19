var n = 0;
var c = 3;
var angle = 115.5;
var hu = 100;
var mode = 1;
var modeButton;

var counter = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB);
    modeButton = createButton("Color Mode");
    modeButton.mousePressed(colors);
}

function draw() {
    background(0);
    fill(255);
    if (mode == 1) {
        text("Angle: " + angle + " degrees.     " + "HSB Hue: " + hu + " (100 , i % 70)", 10, 20);
    } else {
        text("Angle: " + angle + " degrees.     " + "RAINBOW MODE", 10, 20);
    }
    translate(width / 2, height / 2);
    rotate(n * 0.1);
    if (counter < 200) {
        for (var i = 0; i < n; i++) {

            var a = i * angle;
            var r = c * sqrt(i);
            var x = r * cos(a);
            var y = r * sin(a);

            fill(hu, 100, i % 80);

            if (mode == 0) {
                fill((hu + i) % 360, 100, i % 70);
            }
            noStroke();
            ellipse(x, y, 4, 4);
        }
        n += 10;
        //angle += 0.001;
        counter++;
    } else if (counter < 300) {
        for (var i = 0; i < n; i++) {

            var a = i * angle;
            var r = c * sqrt(i);
            var x = r * cos(a);
            var y = r * sin(a);

            fill(hu, 100, i % 70);

            if (mode == 0) {
                fill((hu + i) % 360, 100, i % 70);
            }

            noStroke();
            ellipse(x, y, 4, 4);
        }
        n -= 50;
        counter++;
    } else {
        n = 0;
        counter = 0;
        angle = (angle + 5) % 360;
        hu = (hu + 100) % 360;
    }
}

function colors() {
    mode = (mode + 1) % 2;
}
