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
            this.image.src = 'images/sprites/images_level_'+lv+'/bomb'+lv+'.png' // Bombe Objet
        }
        else if (hit == 4){
            this.image.src = 'images/sprites/images_level_'+lv+'/key'+lv+'.png' // key
        }
        else if (hit == 5){
            this.image.src = 'images/sprites/images_level_'+lv+'/door'+lv+'.png' //Door
        }
        else if (hit == 6){
            this.image.src = 'images/sprites/images_level_'+lv+'/brokenWall'+lv+'.png' // block fragile
        }
        else if(hit == 7){
            this.image.src = 'images/sprites/images_level_'+lv+'/bomb'+lv+'.png' // Bombe
        }
        else{
            this.image.src = 'images/sprites/images_level_'+lv+'/wall'+lv+'.png' // wall
        }
    }
}