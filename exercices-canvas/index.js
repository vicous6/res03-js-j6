function exercice6()
{

}

function exercice5()
{

}

function exercice4(){

let circle = {
    color: "#0000FF",
    radius:100,
    x:50,
    y:100
};

      let  canvasDom = document.querySelector('#ex4');
let ctx = canvasDom.getContext('2d');


ctx.fillStyle = circle.color;




let count = 0

     
        
    




let machin = setInterval(function() {
    
    console.log(canvasDom);
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
ctx.beginPath();
console.log(canvasDom.height);

        ctx.fillStyle = circle.color;

        ctx.arc(circle.x , circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
        
        count++;

    circle.x += 10; 
    
        if(count === 15){
            clearInterval(machin)
           
        }

    console.log(count)
}, 100)
   
   

   
   





}


function exercice3()
{
// L'objet du DOM Canvas
let canvasDom = document.querySelector('#ex3');

// Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
let ctx = canvasDom.getContext('2d');
    
// On définie la police de caractère pour tous les textes
ctx.font = 'bold 68px Verdana';

// Couleur pour écrire Hello
ctx.fillStyle ='black';

// On ecrit Hello
ctx.fillText('Geometry.io', 2, 150);
}

function exercice2()
{
let circle = {
    color: "#FF0000",
    radius:100,
    x:200,
    y:170
};
let  canvasDom  =  document.querySelector('#ex2');


let  ctx  =  canvasDom.getContext('2d');
ctx.fillStyle = '#0000FF';

// on commence le tracé 
ctx.beginPath(); 

// on trace un arc fermé (un cercle) 
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);

// ctx.arc(x, y, rayon, angleDépart, angleFin) attention angle en radians

// on dessine sur le canvas en remplissant le tracé 
ctx.fill(); 
}

function exercice1()
{

let  canvasDom  =  document.querySelector('#ex1');


let  ctx  =  canvasDom.getContext('2d');

ctx.strokeStyle  =  "#FF0000";

// On trace le contour (stroke) d'un rectangle
ctx.fillRect(50, 50, 200, 200);
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});