const DIR = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown'
]

class Zombie{
    constructor(game,posX,posY) {
        this.game = game;
        this.image = new Image();
        this.image.src = 'images/sprites/images_level_'+this.game.lv+'/zombie'+this.game.lv+'-down.png'
        this.posX = posX ;
        this.posY = posY;
        this.dir = 'ArrowLeft';
        this.speed = 250;
        this.int = '';
        this.isEnnemi = true;

        this.draw();
        this.play();
    }

    draw(){
        this.game.ctx.drawImage(this.image,this.posX,this.posY,this.game.size,this.game.size)
    }

    move(){
        let road = new Image();
        road.src = 'images/sprites/images_level_'+this.game.lv+'/floor'+this.game.lv+'.png';


        let newDir = this.dir;
        let newImage = '';
        let newPosX = this.posX
        let newPosY = this.posY

        if(newDir == 'ArrowLeft'){
            newPosX -= this.game.size
            newImage = 'images/sprites/images_level_'+this.game.lv+'/zombie'+this.game.lv+'-left.png';
        }
        else if(newDir == 'ArrowRight') {
            newPosX += this.game.size
            newImage = 'images/sprites/images_level_'+this.game.lv+'/zombie'+this.game.lv+'-right.png';
        }
        else if(newDir == 'ArrowUp'){
            newPosY -= this.game.size
            newImage = 'images/sprites/images_level_'+this.game.lv+'/zombie'+this.game.lv+'-up.png';
                                                                                                                     }
        else if(newDir == 'ArrowDown'){
            newPosY += this.game.size
            newImage = 'images/sprites/images_level_'+this.game.lv+'/zombie'+this.game.lv+'-down.png';
        }

        if(this.game.maze[this.game.lv][newPosY/this.game.size][newPosX/this.game.size] == 0) {
            this.image.src = newImage;
          if(this.game.mode != 1){this.drawMove(this.image.src,this.dir,newPosX,newPosY,road)}
          else{this.moveWithoutDraw(this.dir,newPosX,newPosY)}

            if(this.game.player.posY == this.posY){
                if(this.game.player.posX > this.posX){
                    this.dir = 'ArrowRight'
                }
                else{
                    this.dir = 'ArrowLeft'
                }
            }
            else if(this.game.player.posX == this.posX){
                if(this.game.player.posY > this.posY){
                    this.dir = 'ArrowDown';
                }
                else{
                    this.dir ='ArrowUp';
                }
            }
            else{
                let randChange = Math.floor(Math.random()* 1)
                if(randChange == 1){
                    let randDir = Math.floor(Math.random()* 4)
                    this.dir = DIR[randDir]
                }
            }
        }
        else if(this.game.maze[this.game.lv][newPosY/this.game.size][newPosX/this.game.size] == 9){
            this.game.dead()
        }
        else{
                let randDir = Math.floor(Math.random()* 4)
                this.dir = DIR[randDir]
                this.move()
        }



    }

    moveWithoutDraw(dir,newPosX,newPosY){
        this.dir = dir;

        this.game.maze[this.game.lv][this.posY/this.game.size][this.posX/this.game.size] = 0;
        this.posX = newPosX;
        this.posY = newPosY;
        this.game.maze[this.game.lv][this.posY/this.game.size][this.posX/this.game.size] = this
    }

    drawMove(newImage,dir,newPosX,newPosY,sprite){
        this.image.src =  newImage;
        this.dir = dir;

        this.game.maze[this.game.lv][this.posY/this.game.size][this.posX/this.game.size] = 0;
        this.game.ctx.drawImage(sprite,this.posX,this.posY, this.game.size,this.game.size);
        this.posX = newPosX;
        this.posY = newPosY;
        this.game.ctx.drawImage(this.image, this.posX, this.posY, this.game.size-1, this.game.size-1);
        this.game.maze[this.game.lv][this.posY/this.game.size][this.posX/this.game.size] = this
    }

    play(){
        let zombie = this
           zombie.int = setInterval(function () {
                zombie.move()
            }, zombie.speed)
    }

}