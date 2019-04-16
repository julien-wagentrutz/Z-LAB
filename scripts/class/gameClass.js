class Game{

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.lv = 0;
        this.life = 3;
        this.size = 600/maze[this.lv].length;
        this.items = 0;
        this.mode = 0;
        this.finish = true;
        this.int = '';
        this.player;
        this.zombies = new Array()
        this.sword = false;
        this.bombe = false;
        this.keys = false;

        this.texture = {'floor' : new Image()}
        this.texture['floor'].src = 'images/sprites/images_level_'+this.lv+'/floor'+this.lv+'.png';
        this.texture['floor'].addEventListener('load',function () {

        })
    }

    // play the lv
    play(){
        this.size =600/maze[this.lv].length;
        this.finish = true
        this.mode = 0
        this.drawGrid(maze[this.lv])
        this.player = new Player(this)
        let tpmpPlayer = this.player
        tpmpPlayer.draw()
        //this.zombies.push(new Zombie(this,this.size * (maze[this.lv].length-2),this.size));
        //this.zombies.push(new Zombie(this,this.size * (maze[this.lv].length-2),this.size * (maze[this.lv].length-2)));
        //this.zombies.push(new Zombie(this,this.size,this.size * (maze[this.lv].length-3)));
            document.addEventListener('keydown', (event) => {
                if (this.finish) {
                    const key = event.key;
                    tpmpPlayer.move(key)
                }
            })

       /*this.int = setInterval(function () {
            tpmpPlayer.move(tpmpPlayer.dir)
        }, tpmpPlayer.speed)*/
    }

    drawGrid(maze){
        let posX = 0;
        let posY = 0;
        for(let i = 0; i<maze.length;i++){
            posX = 0;
            for(let j = 0; j<maze.length;j++){
                if(maze[i][j]== 0){
                    let block = new Block(this.size,1, posX, posY,this.lv)
                    this.drawBlock(block)
                }
                else if(maze[i][j]== 2 ){
                    let block = new Block(this.size,2, posX, posY,this.lv)
                    this.drawBlock(block)
                }
                else if(maze[i][j]== 3 ){
                    let block = new Block(this.size,3, posX, posY,this.lv)
                    this.drawBlock(block)
                }
                else if(maze[i][j]== 4 ){
                    let block = new Block(this.size,4, posX, posY,this.lv)
                    this.drawBlock(block)
                }
                else if(maze[i][j]== 5 ){
                    let block = new Block(this.size,5, posX, posY,this.lv)
                    this.drawBlock(block)
                }
                else if(maze[i][j]== 6 ){
                    let block = new Block(this.size,6, posX, posY,this.lv)
                    this.drawBlock(block)
                }
                else if(maze[i][j]== 1){
                    let block = new Block(this.size,0, posX, posY,this.lv)
                    this.drawBlock(block)
                }else{
                    let block = new Block(this.size,1, posX, posY,this.lv)
                    this.drawBlock(block)
                }

                posX += this.size;

            }
            posY += this.size;
        }
        if(this.finish){
           /* let find = false;
            let count = 0;
            while (!find){
                let random1 = Math.floor(Math.random()* (maze.length - 5)) + 5;
                let random2 = Math.floor(Math.random()* (maze.length - 5)) + 5;
                if(maze[random1][random2] == 0){
                    let zombie = new Zombie(this,random2*this.size,random1*this.size,)
                    this.zombies.push(zombie);
                    maze[random1][random2] = zombie ;
                    count++;
                    if(count > 1){
                        find = true
                    }
                }
            }*/
           for(let i = 0; i<maze.length;i++){
               for(let j =0; j<maze.length;j++){
                   if(maze[i][j] == 8){
                       let zombie = new Zombie(this,j*this.size,i*this.size,)
                       this.zombies.push(zombie);
                       maze[i][j] = zombie ;
                   }
               }
           }
        }
    }

    drawBlock(block){
        this.ctx.drawImage(block.image,block.posX,block.posY, block.size,block.size)
    }


    itemFind(player,find){
        this.items++;
        if(find == 2){
            this.sword = true;
        }
        else if(find == 3 ){
            this.bombe = true
        }
        else if(find == 4|| this.items == 3){
            this.keys = true
            this.mode = 1;
            this.ctx.clearRect(0,0,600,600)
            player.draw()
        }
    }

    finishGame(){
       this.finish = false;
        this.ctx.clearRect(0,0,600,600)
        clearInterval(this.int)
        this.lv++;
        this.play()
    }

}