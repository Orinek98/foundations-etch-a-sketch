let num = 16;
let color = "black";
const canvas = document.getElementById("canvas");

function makeRows(rows, cols) {
  canvas.style.setProperty('--grid-rows', rows);
  canvas.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    canvas.appendChild(cell).className = "grid-item";
  };
};
makeRows(num, num);

function getRandomRgb(){
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb('+r+', '+g+', '+b+')';
}
const newColor = document.getElementById("rgb_button");
newColor.addEventListener('click', function(){
  color = "random";
})
const blackColor = document.getElementById("black_button");
blackColor.addEventListener('click', function(){
  color = "black";
})


function draw(){
    if(color == "random")
      this.style.backgroundColor = getRandomRgb();
    else{
      this.style.backgroundColor = color;
    }
    //const box = document.querySelector('.grid-item');
}
const boxes = document.querySelectorAll('.grid-item');
boxes.forEach(box => box.addEventListener('mouseover', draw));

function replaceCanvas(blocks){
  num = blocks;
  canvas.replaceChildren();
  canvas.style.setProperty('--grid-rows', 1);
  canvas.style.setProperty('--grid-cols', 1);
  makeRows(blocks, blocks);
  const boxes = document.querySelectorAll('.grid-item');
  boxes.forEach(box => box.addEventListener('mouseover', draw));
}
