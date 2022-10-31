let pie =document.querySelectorAll('.movil');
let grid = document.getElementById('entorno');
let overlapThereshold = '100%';

window.onload=function(){
    loader();    
}

Draggable.create(pie,{
    bounds: window,
    onDrag: function(e){

    },
    onDragEnd: function(e){
        if(this.hitTest(grid,overlapThereshold)){
            console.log(this.target.style.backgroundColor);
            let color = this.target.style.backgroundColor;
            if(color=='red'){
                gsap.to(this.target,{
                    x:0,
                    y:0,
                    delay: 0.2,
                    duration: 0.2,
                    ease: 'power2.inOut'
                });
            }
            console.log('Adentro');
        }
        else{
            console.log('Afuera');
        }
    },
});
