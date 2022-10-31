let pie =document.querySelectorAll('.movil');
let grid = document.getElementsByClassName('grid');
let overlapThereshold = '26%';
let posX=[467,767,1067,467,767,1067,467,767,1067];
let posY=[-670,-670,-670,-454,-454,-454,-238,-238,-238];
let cont=0;
let i;
let piez;

Draggable.create(pie,{
    bounds: window,
    onDrag: function(e){

    },
    onDragEnd: function(e){
        for(i=0;i<9;i++){
            if(this.hitTest(grid[i],overlapThereshold)){
                gsap.to(this.target,{
                    x:posX[i],
                    y:posY[i],
                    delay: 0.2,
                    duration: 0.2,
                    ease: 'power2.inOut'
                });
                piez=this.target;
                break;
            }
            else{
            }
        }
        checar(i,piez);
    },
});

function checar(qued,pieza){
    if(pie[qued].getAttribute('id')==pieza.getAttribute('id')){
        cont=cont+1;
        if(cont==9){
            setTimeout(()=>{
                window.alert('Ganaste!');
            },500);
            
        }
    }
}