

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];


function preload(){
    
}

function setup(){
   var canvas = createCanvas(500,750);

    engine = Engine.create();
    world = engine.world;

    if(frameCount%100===0){
        for(var i =0; i<maxDrops; i++){
            drops.push(new createDrops(random(0,500),random(0,500)));
        }
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();

        drawSprites();
    }
}   

