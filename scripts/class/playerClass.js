class Player {
    constructor(game) {
        this.game = game;
        this.image = new Image();
        this.image.src = 'images/sprites/images_level_'+this.game.lv+'/figure'+this.game.lv+'-down.png'
        this.dir = 'ArrowDown';
        this.speed = 500;
        let i = 0
        let find = false;
        while(i<maze[this.game.lv].length && !find){
            let j = 0
            while(j<maze[this.game.lv].length && !find){
                if(maze[this.game.lv][i][j] == 9){
                    maze[this.game.lv][i][j] = 0
                    this.posX = j * this.game.size
                    this.posY = i * this.game.size
                    find = true
                }
                j++
            }
            i++
        }
        this.draw()
    }


    draw(){
        this.game.ctx.drawImage(this.image,this.posX,this.posY, this.game.size,this.game.size)
    }

    move(dir){
        let road = new Image();
        road.src = 'images/sprites/images_level_'+this.game.lv+'/floor'+this.game.lv+'.png';
        let wall = new Image()
        wall.src = 'images/sprites/images_level_'+this.game.lv+'/wall'+this.game.lv+'.png';
        let ball = new Image()
        ball.src = 'images/sprites/ball.png';


        let newDir;
        let newImage = this.image.src;
        let newPosX = this.posX
        let newPosY = this.posY
        
        if(dir == 'ArrowLeft'){
            newPosX -= this.game.size
            newDir = dir;
            newImage = 'images/sprites/images_level_'+this.game.lv+'/figure'+this.game.lv+'-left.png'
        }
        else if(dir == 'ArrowRight'){
            newPosX += this.game.size
            newDir = dir;
            newImage = 'images/sprites/images_level_'+this.game.lv+'/figure'+this.game.lv+'-right.png'
        }
        else if(dir == 'ArrowUp'){
            newPosY -= this.game.size
            newDir = dir;
            newImage = 'images/sprites/images_level_'+this.game.lv+'/figure'+this.game.lv+'-up.png'
        }
        else if(dir == 'ArrowDown'){
            newPosY += this.game.size
            newDir = dir;
            newImage = 'images/sprites/images_level_'+this.game.lv+'/figure'+this.game.lv+'-down.png'
        }
        else if(dir == ' ' && this.game.bombe){
            this.putBombe()
        }
        else if(dir == 'Shift' && this.game.sword){
            this.fight()
        }


        if(dir != ' ' || dir !='Shift') {
            if (maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 0) {
                this.drawMove(newImage, newDir, newPosX, newPosY, road)
                if (this.game.mode == 1) {
                    this.game.ctx.clearRect(0, 0, 600, 600)// A supp
                    this.drawMove(newImage, dir, this.posX, this.posY, road)// A supp
                    let coordX = this.posX / this.game.size;
                    let coordY = this.posY / this.game.size
                    let nb = true;
                    for (let i = 0; i < 4; i++) {
                        if (nb) {
                            if (maze[this.game.lv][coordY + 1][coordX] == 0) {
                                this.game.ctx.drawImage(road, this.posX, this.posY + this.game.size, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY + 1][coordX] == 1) {
                                this.game.ctx.drawImage(wall, this.posX, this.posY + this.game.size, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY + 1][coordX] == 3) {
                                this.game.ctx.drawImage(ball, this.posX, this.posY + this.game.size, this.game.size, this.game.size)
                            }
                            if (maze[this.game.lv][coordY][coordX + 1] == 0) {
                                this.game.ctx.drawImage(road, this.posX + this.game.size, this.posY, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY][coordX + 1] == 1) {
                                this.game.ctx.drawImage(wall, this.posX + this.game.size, this.posY, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY][coordX + 1] == 3) {
                                this.game.ctx.drawImage(ball, this.posX + this.game.size, this.posY, this.game.size, this.game.size)
                            }
                        }
                        else {
                            if (maze[this.game.lv][coordY - 1][coordX] == 0) {
                                this.game.ctx.drawImage(road, this.posX, this.posY - this.game.size, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY - 1][coordX] == 1) {
                                this.game.ctx.drawImage(wall, this.posX, this.posY - this.game.size, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY - 1][coordX] == 3) {
                                this.game.ctx.drawImage(ball, this.posX, this.posY - this.game.size, this.game.size, this.game.size)
                            }
                            if (maze[this.game.lv][coordY][coordX - 1] == 0) {
                                this.game.ctx.drawImage(road, this.posX - this.game.size, this.posY, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY][coordX - 1] == 1) {
                                this.game.ctx.drawImage(wall, this.posX - this.game.size, this.posY, this.game.size, this.game.size)
                            }
                            else if (maze[this.game.lv][coordY][coordX - 1] == 3) {
                                this.game.ctx.drawImage(ball, this.posX - this.game.size, this.posY, this.game.size, this.game.size)
                            }
                        }
                        nb = !nb
                    }
                }
            }
            else if (maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 2 || maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 3 || maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 4) {
                let find = maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size]
                this.drawMove(newImage, dir, newPosX, newPosY, road)
                maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] = 0
                this.game.itemFind(this, find)
            }
            else if (maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 5 && this.game.keys) {
                this.game.drawGrid(maze[this.game.lv])
                this.game.finishGame();
            }
        }
    }

    drawMove(newImage,dir,newPosX,newPosY,sprite){
        this.image.src =  newImage;
        this.game.ctx.drawImage(sprite,this.posX,this.posY, this.game.size,this.game.size)
        this.dir = dir
        this.posX = newPosX;
        this.posY = newPosY;
        this.game.ctx.drawImage(this.image, this.posX, this.posY, this.game.size, this.game.size)
    }



    putBombe(){

        let ball = new Image()
        ball.src = 'images/sprites/ball.png';
        let road = new Image();
        road.src = 'images/sprites/images_level_'+this.game.lv+'/floor'+this.game.lv+'.png';
        let player = this
        let posX = this.posX;
        let posY = this.posY;
        let dir = this.dir;

        if(this.dir == 'ArrowLeft'){
           if(maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1] == 0)
           {
               maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1] = 7
               let block = new Block(this.game.size,7,  this.posX-this.game.size,this.posY,this.game.lv)
               this.game.drawBlock(block)
                posX -= this.game.size

           }
        }
        else if(this.dir == 'ArrowRight'){
            if(maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1] == 0)
            {
                maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1] = 7
                let block = new Block(this.game.size,7,  this.posX+this.game.size,this.posY,this.game.lv)
                this.game.drawBlock(block)
                posX += this.game.size
            }
        }
        else if(this.dir == 'ArrowUp'){
            if(maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)] == 0)
            {
                maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)] = 7
                let block = new Block(this.game.size,7,  this.posX,this.posY-this.game.size,this.game.lv)
                this.game.drawBlock(block)
                posY -= this.game.size
            }
        }
        else if(this.dir == 'ArrowDown'){
            if(maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)] == 0)
            {
                maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)] = 7
                let block = new Block(this.game.size,7,  this.posX,this.posY+this.game.size,this.game.lv)
                this.game.drawBlock(block)
                posY += this.game.size

            }
        }

        let interval = setTimeout(function(){
            player.explose(player,posX,posY,dir)
        },1500)

    }

    explose(player,posX,posY,dir){
        if(maze[player.game.lv][posY/player.game.size][(posX/player.game.size)+1] == 6){
            maze[player.game.lv][posY/player.game.size][(posX/player.game.size)+1] = 0
            let block = new Block(player.game.size,1,posX+player.game.size, posY,player.game.lv)
            player.game.drawBlock(block)
        }
        else if(maze[player.game.lv][posY/player.game.size][(posX/player.game.size)-1] == 6 ){
            maze[player.game.lv][posY/player.game.size][(posX/player.game.size)-1] = 0
            let block = new Block(player.game.size,1,posX-player.game.size, posY,player.game.lv)
            player.game.drawBlock(block)
        }
        else if(maze[player.game.lv][(posY/player.game.size)+1][(posX/player.game.size)] == 6 ){
             maze[player.game.lv][(posY/player.game.size)+1][(posX/player.game.size)] = 0
            let block = new Block(player.game.size,1,posX, posY+player.game.size,player.game.lv)
            player.game.drawBlock(block)
        }
        else if(maze[player.game.lv][(posY/player.game.size)-1][(posX/player.game.size)] == 6){
             maze[player.game.lv][(posY/player.game.size)-1][(posX/player.game.size)] = 0
            let block = new Block(player.game.size,1,posX, posY-player.game.size,player.game.lv)
            player.game.drawBlock(block)
        }
        maze[player.game.lv][(posY/player.game.size)][(posX/player.game.size)] = 0
        let block = new Block(player.game.size,1,posX, posY,player.game.lv)
        player.game.drawBlock(block)

    }

    fight(){
        if(this.dir == 'ArrowLeft'){
            if(maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1].isEnnemi ){
                clearInterval(maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1].int)
                this.game.zombies = arrayRemove(this.game.zombies, maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1])
                let block = new Block(this.game.size,1,this.posX-this.game.size, this.posY,this.game.lv)
                this.game.drawBlock(block)
                maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1] = 0
            }
        }
        else if(this.dir == 'ArrowRight'){
            if(maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1].isEnnemi ){
                clearInterval(maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1].int)
                this.game.zombies = arrayRemove(this.game.zombies, maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1])
                let block = new Block(this.game.size,1,this.posX+this.game.size, this.posY,this.game.lv)
                this.game.drawBlock(block)
                maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1] = 0
            }
        }
        else if(this.dir == 'ArrowUp'){
            if(maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)].isEnnemi ){
                clearInterval(maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)].int)
                this.game.zombies = arrayRemove(this.game.zombies, maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)])
                let block = new Block(this.game.size,1,this.posX, this.posY-this.game.size,this.game.lv)
                this.game.drawBlock(block)
                maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)]= 0
            }
        }
        else if(this.dir == 'ArrowDown'){
            if(maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)].isEnnemi ){
                clearInterval(maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)].int)
                this.game.zombies = arrayRemove(this.game.zombies, maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)])
                let block = new Block(this.game.size,1,this.posX, this.posY + this.game.size,this.game.lv)
                this.game.drawBlock(block)
                maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)] = 0
            }
        }
    }

}




function arrayRemove(arr, value) {
    return arr.filter(function(ele){
        return ele != value;
    });
}
