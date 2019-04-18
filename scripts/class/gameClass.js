class Game{

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.lv = 0;
        this.life = 3;
        this.size = 600/mazes[this.lv].length;
        this.items = 0;
        this.mode = 0;
        this.finish = true;
        this.int = '';
        this.player;
        this.zombies = new Array()
        this.sword = false;
        this.bomb = false;
        this.keys = false;
        this.maze;
        this.heart = document.querySelectorAll('.hearth img');
        this.swordInterface = document.querySelector('#stuffSword .stuffClassic');
        this.bombInterface = document.querySelector('#stuffBomb .stuffClassic');
        this.keyInterface = document.querySelector('#stuffKey .stuffClassic');
        this.lvInterface = document.querySelector('#levelNumber')
        this.lvInterface.innerHTML = this.lv

        document.addEventListener('keydown', (event) => {
            if (this.finish) {
                const key = event.key;
                this.player.move(key)
            }
        })
    }

    restart(game){
        game.life = 3;
        game.lv = 0;
        game.restartLife()
        game.play()
    }
    // play the lv
    play(){
        this.lvInterface.innerHTML = this.lv
        if(this.life > 0){
            this.size = 600/mazes[this.lv].length;
            this.finish = true;
            this.sword = false;
            this.bomb = false;
            this.keys = false;
            this.mode = 0;
            this.items = 0;
            let currentMaze = new Array(3);
            currentMaze[0] = new Array()
            currentMaze[1] = new Array()
            currentMaze[2] = new Array()

            for (let i = 0; i < mazes[this.lv].length;i++){
                currentMaze[this.lv][i] = new Array(mazes[this.lv].length)
                for (let j = 0; j < mazes[this.lv].length;j++){
                    currentMaze[this.lv][i][j] = mazes[this.lv][i][j]
                }
            }
            for(let i = 0;i < this.zombies.length;i++){
                clearInterval(this.zombies[i].int)
                delete this.zombies[i]
            }

            this.maze = currentMaze;
            this.zombies = new Array()
            delete this.player;
            this.drawGrid(mazes[this.lv]);
            this.player = new Player(this);
            this.player.draw();
        }
        else{
            this.finish = false;
            this.ctx.clearRect(0,0,600,600)
            clearInterval(this.int)
            for(let i = 0;i < this.zombies.length;i++){
                clearInterval(this.zombies[i].int)
                delete this.zombies[i]
            }
            this.zombies = new Array()
            this.drawGrid(mazes[this.lv])
            alert("C'est perdu !!")
        }

        //this.zombies.push(new Zombie(this,this.size * (maze[this.lv].length-2),this.size));
        //this.zombies.push(new Zombie(this,this.size * (maze[this.lv].length-2),this.size * (maze[this.lv].length-2)));
        //this.zombies.push(new Zombie(this,this.size,this.size * (maze[this.lv].length-3)));

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
        for (let i = 0; i < maze.length; i++) {
             for (let j = 0; j < maze.length; j++) {
                if (maze[i][j] == 8 && this.life > 0) {
                    let zombie = new Zombie(this, j * this.size, i * this.size,)
                    this.zombies.push(zombie);
                    this.maze[this.lv][i][j] = zombie;
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
            this.swordInterface.classList.add('stuffGet')
        }
        else if(find == 3 ){
            this.bomb = true
            this.bombInterface.classList.add('stuffGet')
        }
        else if(find == 4){
            this.keys = true
            this.mode = 1;
            this.ctx.clearRect(0,0,600,600)
            player.draw()
            this.keyInterface.classList.add('stuffGet')
        }
    }

    restartLife(){
        for(let i = 0; i<this.heart.length;i++){
            this.heart[i].classList.remove('hearthDead')
        }
    }

    restartItems(){
        this.bombInterface.classList.remove('stuffGet')
        this.swordInterface.classList.remove('stuffGet')
        this.keyInterface.classList.remove('stuffGet')
    }


    dead(){
        this.ctx.clearRect(0,0,600,600)
        this.life = this.life - 1;
        this.play()
        this.heart[this.life].classList.add('hearthDead')
        this.restartItems()
    }
    finishGame(){
        this.finish = false;
        this.ctx.clearRect(0,0,600,600)
        clearInterval(this.int)
        this.lv++; // tester si encore lv sup
        this.restartItems()
        this.play()
    }

}