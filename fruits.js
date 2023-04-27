img = "";
function home()
{
    window.location = "index.html";
}
function setup()
{
    canvas = createCanvas(550,330);
}
function draw()
{
    image(img,0,0,550,330);
}
function preload()
{
    img = loadImage("delicious-fruit-basket.jpg");
}