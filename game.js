class Game {
	

    constructor(){

        this.button1 = createButton('Next');
       // this.button1.style('background', 'lightgrey');    


    }


    display(){

        this.button1.position(1100,600);
        
        this.button1.mousePressed(() => {
            
                this.button1.hide();
                man.addAnimation("man", manImage_Changed);
            
        });

    }
}

