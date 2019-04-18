class Player {
    constructor(game) {
        this.game = game;
        this.image = new Image();
        this.image.src = 'images/sprites/images_level_'+this.game.lv+'/figure'+this.game.lv+'-down.png'
        this.dir = 'ArrowDown';
        this.speed = 500;
        let i = 0
        let find = false;
        while(i<this.game.maze[this.game.lv].length && !find){
            let j = 0
            while(j<this.game.maze[this.game.lv].length && !find){
                if(this.game.maze[this.game.lv][i][j] == 9){
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
        let bomb = new Image()
        bomb.src = 'images/sprites/images_level_'+this.game.lv+'/bomb'+this.game.lv+'.png';
        let door = new Image()
        door.src = 'images/sprites/images_level_'+this.game.lv+'/door'+this.game.lv+'.png';
        let broken = new Image()
        broken.src = 'images/sprites/images_level_'+this.game.lv+'/brokenWall'+this.game.lv+'.png';
        let sword = new Image()
        sword.src = 'images/sprites/images_level_'+this.game.lv+'/sword'+this.game.lv+'.png';





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
        else if(dir == ' ' && this.game.bomb){
            this.putBombe()
        }
        else if(dir == 'Shift' && this.game.sword){
            if(this.dir == 'ArrowLeft'){
                newImage = 'images/sprites/images_level_'+this.game.lv+'/fight'+this.game.lv+'-left.png'
            }
            else if(this.dir == 'ArrowRight'){

                newImage = 'images/sprites/images_level_'+this.game.lv+'/fight'+this.game.lv+'-right.png'
            }
            else if(this.dir == 'ArrowUp'){
                newImage = 'images/sprites/images_level_'+this.game.lv+'/fight'+this.game.lv+'-up.png'
            }
            else if(this.dir == 'ArrowDown'){
                newImage = 'images/sprites/images_level_'+this.game.lv+'/fight'+this.game.lv+'-down.png'
            }
            this.fight()
        }


        if(dir != ' ' || dir !='Shift') {
            this.game.maze[this.game.lv][this.posY / this.game.size][this.posX / this.game.size] = 0
            if (this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 0) {
                this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] = 9
                this.drawMove(newImage, newDir, newPosX, newPosY, road)
                if (this.game.mode == 1) {
                    this.game.ctx.clearRect(0, 0, 600, 600)// A supp
                    this.drawMove(newImage, dir, this.posX, this.posY, road)// A supp
                    let coordX = this.posX / this.game.size;
                    let coordY = this.posY / this.game.size
                    let nb = 1;
                    this.game.ctx.globalAlpha = 0.5
                    for(let j = 1;j<3;j++) {
                        if (nb == 2) {
                            this.game.ctx.globalAlpha = 0.2
                        }
                        else {
                            this.game.ctx.globalAlpha = 0.5
                            if (this.game.maze[this.game.lv][coordY + nb][coordX + nb] == 0) {
                                this.game.ctx.drawImage(road, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX + nb] == 1) {
                                this.game.ctx.drawImage(wall, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                //  this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX + nb] == 3 || this.game.maze[this.game.lv][coordY + nb][coordX + nb] == 7) {
                                this.game.ctx.drawImage(bomb, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                //  this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX + nb] == 5) {
                                this.game.ctx.drawImage(door, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                //  this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX + nb] == 6) {
                                this.game.ctx.drawImage(broken, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX + nb].isEnnemi) {
                                let zombie = new Image()
                                zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-down.png';
                                this.game.ctx.drawImage(zombie, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                //   this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX + nb]  == 2) {
                                this.game.ctx.drawImage(sword, this.posX + this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                //   this.game.ctx.globalAlpha = 1
                            }
                            if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 0) {

                                this.game.ctx.drawImage(road, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                //  this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 1) {
                                this.game.ctx.drawImage(wall, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                //this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 3 || this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 7) {
                                this.game.ctx.drawImage(bomb, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size, this.game.size)
                                //this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 5) {
                                this.game.ctx.drawImage(door, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size, this.game.size)
                                //this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 6) {
                                this.game.ctx.drawImage(broken, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 2) {
                                this.game.ctx.drawImage(sword, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb].isEnnemi) {
                                let zombie = new Image()
                                zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-right.png';
                                this.game.ctx.drawImage(zombie, this.posX + this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }


                            if (this.game.maze[this.game.lv][coordY + nb][coordX - nb] == 0) {
                                this.game.ctx.drawImage(road, this.posX - this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX - nb] == 1) {
                                this.game.ctx.drawImage(wall, this.posX - this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX - nb] == 3 || this.game.maze[this.game.lv ][coordY - nb][coordX] == 7) {
                                this.game.ctx.drawImage(bomb, this.posX - this.game.size * nb, this.posY + (this.game.size * nb), this.game.size, this.game.size)
                                //this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY + nb][coordX - nb] == 5) {
                                this.game.ctx.drawImage(door, this.posX - this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 6) {
                                this.game.ctx.drawImage(broken, this.posX - this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb] == 2) {
                                this.game.ctx.drawImage(sword, this.posX - this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX + nb].isEnnemi) {
                                let zombie = new Image()
                                zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-up.png';
                                this.game.ctx.drawImage(zombie, this.posX - this.game.size * nb, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                //this.game.ctx.globalAlpha = 1
                            }


                            if (this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 0) {
                                this.game.ctx.drawImage(road, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 1) {
                                this.game.ctx.drawImage(wall, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 3 || this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 7) {
                                this.game.ctx.drawImage(bomb, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                //  this.game.ctx.globalAlpha = 1

                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 5) {
                                this.game.ctx.drawImage(door, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 6) {
                                this.game.ctx.drawImage(broken, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX - nb] == 2) {
                                this.game.ctx.drawImage(sword, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                            else if (this.game.maze[this.game.lv][coordY - nb][coordX - nb].isEnnemi) {
                                let zombie = new Image()
                                zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-left.png';
                                this.game.ctx.drawImage(zombie, this.posX - this.game.size * nb, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                // this.game.ctx.globalAlpha = 1
                            }
                        }
                        for (let i = 0; i < 2; i++) {
                            if ((coordY + nb) < this.game.maze[this.game.lv].length) {
                                if (this.game.maze[this.game.lv][coordY + nb][coordX] == 0) {
                                    this.game.ctx.drawImage(road, this.posX, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                }
                                else if (this.game.maze[this.game.lv][coordY + nb][coordX] == 1) {
                                    this.game.ctx.drawImage(wall, this.posX, this.posY + (this.game.size * nb), this.game.size, this.game.size)
                                    //  this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY + nb][coordX] == 3 || this.game.maze[this.game.lv][coordY + nb][coordX] == 7) {
                                    this.game.ctx.drawImage(bomb, this.posX, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                    //  this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY + nb][coordX] == 5) {
                                    this.game.ctx.drawImage(door, this.posX, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                    //  this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY + nb][coordX] == 6) {
                                    this.game.ctx.drawImage(broken, this.posX, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY + nb][coordX] == 2) {
                                    this.game.ctx.drawImage(sword, this.posX, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY + nb][coordX].isEnnemi) {
                                    let zombie = new Image()
                                    zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-down.png';
                                    this.game.ctx.drawImage(zombie, this.posX, this.posY + this.game.size * nb, this.game.size, this.game.size)
                                    //   this.game.ctx.globalAlpha = 1
                                }
                            }

                            if ((coordX + nb) < this.game.maze[this.game.lv].length) {
                                if (this.game.maze[this.game.lv][coordY][coordX + nb] == 0) {
                                    this.game.ctx.drawImage(road, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    //  this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX + nb] == 1) {
                                    this.game.ctx.drawImage(wall, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    //this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX + nb] == 3 || this.game.maze[this.game.lv][coordY][coordX + nb] == 7) {
                                    this.game.ctx.drawImage(bomb, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    //this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX + nb] == 5) {
                                    this.game.ctx.drawImage(door, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    //this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX + nb] == 6) {
                                    this.game.ctx.drawImage(broken, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX + nb] == 2) {
                                    this.game.ctx.drawImage(sword, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX + nb].isEnnemi) {
                                    let zombie = new Image()
                                    zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-right.png';
                                    this.game.ctx.drawImage(zombie, this.posX + this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                            }

                            if ((coordY - nb) >= 0) {
                                if (this.game.maze[this.game.lv][coordY - nb][coordX] == 0) {
                                    this.game.ctx.drawImage(road, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY - nb][coordX] == 1) {
                                    this.game.ctx.drawImage(wall, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY - nb][coordX] == 3 || this.game.maze[this.game.lv][coordY - nb][coordX] == 7) {
                                    this.game.ctx.drawImage(bomb, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    //this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY - nb][coordX] == 5) {
                                    this.game.ctx.drawImage(door, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY - nb][coordX] == 6) {
                                    this.game.ctx.drawImage(broken, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY - nb][coordX] == 2) {
                                    this.game.ctx.drawImage(sword, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY - nb][coordX].isEnnemi) {
                                    let zombie = new Image()
                                    zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-up.png';
                                    this.game.ctx.drawImage(zombie, this.posX, this.posY - this.game.size * nb, this.game.size, this.game.size)
                                    //this.game.ctx.globalAlpha = 1
                                }
                            }

                            if ((coordX - nb) >= 0) {
                                if (this.game.maze[this.game.lv][coordY][coordX - nb] == 0) {
                                    this.game.ctx.drawImage(road, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX - nb] == 1) {
                                    this.game.ctx.drawImage(wall, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX - nb] == 3 || this.game.maze[this.game.lv][coordY][coordX - nb] == 7) {
                                    this.game.ctx.drawImage(bomb, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    //  this.game.ctx.globalAlpha = 1

                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX - nb] == 5) {
                                    this.game.ctx.drawImage(door, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX - nb] == 2) {
                                    this.game.ctx.drawImage(sword, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX - nb] == 6) {
                                    this.game.ctx.drawImage(broken, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                                else if (this.game.maze[this.game.lv][coordY][coordX - nb].isEnnemi) {
                                    let zombie = new Image()
                                    zombie.src = 'images/sprites/images_level_' + this.game.lv + '/zombie' + this.game.lv + '-left.png';
                                    this.game.ctx.drawImage(zombie, this.posX - this.game.size * nb, this.posY, this.game.size, this.game.size)
                                    // this.game.ctx.globalAlpha = 1
                                }
                            }

                        }
                        nb += j
                    }
                    this.game.ctx.globalAlpha = 1

                }
            }
            else if (this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 2 || this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 3 || this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 4) {
                let find = this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size]
                this.drawMove(newImage, dir, newPosX, newPosY, road)
                this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] = 0
                this.game.itemFind(this, find)
            }
            else if (this.game.maze[this.game.lv][newPosY / this.game.size][newPosX / this.game.size] == 5 && this.game.keys) {
                this.game.drawGrid(this.game.maze[this.game.lv])
                this.game.finishGame();
            }
            else if(dir != 'Shift'){
                this.image.src =  newImage;
                this.dir = newDir
                this.game.ctx.drawImage(this.image, this.posX, this.posY, this.game.size, this.game.size)
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
        let road = new Image();
        road.src = 'images/sprites/images_level_'+this.game.lv+'/floor'+this.game.lv+'.png';
        let player = this
        let posX;
        let posY;
        let dir = player.dir;
        let put = false;
        if(this.dir == 'ArrowLeft'){
           if(this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1] == 0)
           {
               this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1] = 7
               let block = new Block(this.game.size,7,  this.posX-this.game.size,this.posY,this.game.lv)
               this.game.drawBlock(block)
                posX = this.posX - this.game.size;
                posY = this.posY;
                put = true;
           }
        }
        else if(this.dir == 'ArrowRight'){
            if(this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1] == 0)
            {
                this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1] = 7
                let block = new Block(this.game.size,7,  this.posX+this.game.size,this.posY,this.game.lv)
                this.game.drawBlock(block)
                posX = this.posX + this.game.size
                posY = this.posY;
                put = true;
            }
        }
        else if(this.dir == 'ArrowUp'){
            if(this.game.maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)] == 0)
            {
                this.game.maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)] = 7
                let block = new Block(this.game.size,7,  this.posX,this.posY-this.game.size,this.game.lv)
                this.game.drawBlock(block)
                posY = this.posY - this.game.size
                posX = this.posX;
                put = true
            }
        }
        else if(this.dir == 'ArrowDown'){
            if(this.game.maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)] == 0)
            {
                this.game.maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)] = 7
                let block = new Block(this.game.size,7,  this.posX,this.posY+this.game.size,this.game.lv)
                this.game.drawBlock(block)
                posY = this.posY + this.game.size
                posX = this.posX;
                put = true;
            }
        }
        if(put){
            let interval = setTimeout(function(){
                player.explose(player,posX,posY,dir)
            },1500)

        }

    }

    explose(player,posX,posY,dir){
        if(this.game.maze[player.game.lv][posY/player.game.size][(posX/player.game.size)+1] == 6){
            this.game.maze[player.game.lv][posY/player.game.size][(posX/player.game.size)+1] = 0
            let block = new Block(player.game.size,1,posX+player.game.size, posY,player.game.lv)
            player.game.drawBlock(block)
        }
        else if(this.game.maze[player.game.lv][posY/player.game.size][(posX/player.game.size)-1] == 6 ){
            this.game.maze[player.game.lv][posY/player.game.size][(posX/player.game.size)-1] = 0
            let block = new Block(player.game.size,1,posX-player.game.size, posY,player.game.lv)
            player.game.drawBlock(block)
        }
        else if(this.game.maze[player.game.lv][(posY/player.game.size)+1][(posX/player.game.size)] == 6 ){
            this.game.maze[player.game.lv][(posY/player.game.size)+1][(posX/player.game.size)] = 0
            let block = new Block(player.game.size,1,posX, posY+player.game.size,player.game.lv)
            player.game.drawBlock(block)
        }
        else if(this.game.maze[player.game.lv][(posY/player.game.size)-1][(posX/player.game.size)] == 6){
            this.game.maze[player.game.lv][(posY/player.game.size)-1][(posX/player.game.size)] = 0
            let block = new Block(player.game.size,1,posX, posY-player.game.size,player.game.lv)
            player.game.drawBlock(block)
        }
        this.game.maze[player.game.lv][(posY/player.game.size)][(posX/player.game.size)] = 0
        let block = new Block(player.game.size,1,posX, posY,player.game.lv)
        player.game.drawBlock(block)

    }

    fight(){

        if(this.dir == 'ArrowLeft'){
            if(this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1].isEnnemi ){
                clearInterval(this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1].int)
                this.game.zombies = arrayRemove(this.game.zombies, this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1])
                let block = new Block(this.game.size,1,this.posX-this.game.size, this.posY,this.game.lv)
                this.game.drawBlock(block)
                this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)-1] = 0
            }
        }
        else if(this.dir == 'ArrowRight'){
            if(this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1].isEnnemi ){
                clearInterval(this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1].int)
                this.game.zombies = arrayRemove(this.game.zombies, this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1])
                let block = new Block(this.game.size,1,this.posX+this.game.size, this.posY,this.game.lv)
                this.game.drawBlock(block)
                this.game.maze[this.game.lv][this.posY/this.game.size][(this.posX/this.game.size)+1] = 0
            }
        }
        else if(this.dir == 'ArrowUp'){
            if(this.game.maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)].isEnnemi ){
                clearInterval(this.game.maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)].int)
                this.game.zombies = arrayRemove(this.game.zombies, this.game.maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)])
                let block = new Block(this.game.size,1,this.posX, this.posY-this.game.size,this.game.lv)
                this.game.drawBlock(block)
                this.game.maze[this.game.lv][(this.posY/this.game.size)-1][(this.posX/this.game.size)]= 0
            }
        }
        else if(this.dir == 'ArrowDown'){
            if(this.game.maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)].isEnnemi ){
                clearInterval(this.game.maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)].int)
                this.game.zombies = arrayRemove(this.game.zombies,this.game.maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)])
                let block = new Block(this.game.size,1,this.posX, this.posY + this.game.size,this.game.lv)
                this.game.drawBlock(block)
                this.game.maze[this.game.lv][(this.posY/this.game.size)+1][(this.posX/this.game.size)] = 0
            }
        }

    }

}




function arrayRemove(arr, value) {
    return arr.filter(function(ele){
        return ele != value;
    });
}
