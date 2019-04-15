class Block{

    constructor(size,hit,posX,posY){
        this.size = size;
        this.posX = posX;
        this.posY = posY;
        this.image = new Image();

        if(hit == 1){
            this.image.src = 'images/sprites/concrete-block.jpg'
        }
        else{
            this.image.src = 'images/sprites/blockRoad.jpg'
        }
    }
}

