let pie =document.querySelectorAll('.movil');
let grid = document.getElementsByClassName('grid');
let overlapThereshold = '60%';
let posX=[467,767,1067,467,767,1067,467,767,1067];
let posY=[-670,-670,-670,-454,-454,-454,-238,-238,-238];
let cont;

Draggable.create(pie,{
    bounds: window,
    onDrag: function(e){

    },
    onDragEnd: function(e){
        for(let i=0;i<9;i++){
            if(this.hitTest(grid[i],overlapThereshold)){
                gsap.to(this.target,{
                    x:posX[i],
                    y:posY[i],
                    delay: 0.2,
                    duration: 0.2,
                    ease: 'power2.inOut'
                });
                console.log(pie[i].getAttribute('id'));
                console.log(i);
                if(pie[i].getAttribute('id')==i+1){
                    cont=cont+1;
                }
            }
            else{

            }
        }
    },
});