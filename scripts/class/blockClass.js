class Block {
    constructor(size,hit, posX, posY,lv){
        this.size = size;
        this.posX = posX;
        this.posY = posY;
        this.image = new Image()
        this.hit = hit;

        if(hit == 1){
            this.image.src = 'images/sprites/images_level_'+lv+'/floor'+lv+'.png'
        }
        else if (hit == 2){
            this.image.src = 'images/sprites/images_level_'+lv+'/sword'+lv+'.png' //sword
        }
        else if (hit == 3){
            this.image.src = 'images/sprites/ball.png' // Bombe Objet
        }
        else if (hit == 4){
            this.image.src = 'images/sprites/ball.png' // key
        }
        else if (hit == 5){
            this.image.src = 'images/sprites/concrete-block.jpg' //Door
        }
        else if (hit == 6){
            this.image.src = 'images/sprites/blockRoad.jpg' // block fragile
        }
        else if(hit == 7){
            this.image.src = 'images/sprites/ball.png' // Bombe
        }
        else{
            this.image.src = 'images/sprites/images_level_'+lv+'/wall'+lv+'.png' // wall
        }
    }
}