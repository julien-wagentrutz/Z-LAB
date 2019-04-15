let grid1 = new Array()
grid1 =
    [
        [
            [1],[0],[1],[0],[1],[0]
        ],
        [
            [1],[1],[1],[1],[1],[1]
        ],
        [
            [1],[0],[1],[1],[0],[1]
        ],
        [
            [1],[1],[0],[1],[0],[1]
        ],
        [
            [1],[1],[1],[1],[1],[1]
        ],
        [
            [1],[0],[1],[0],[1],[1]
        ]
    ];
class Game{

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.lv = 0;
        this.life = 3;
    }

    // play the lv
    play(){

        this.drawGrid(grid1)

        //new grid
    }

    drawGrid(maze){
        let size = 600/maze.length;
        let posX = 0;
        let posY = 0;
let count = 0
        for(let i = 0; i<maze.length;i++){
            posX = 0;
            for(let j = 0; j<maze.length;j++){
                if(maze[i][j]== 0){
                    let block = new Block(size,1, posX, posY)
                    this.drawBlock(block)
                    console.log(block)
                }
                else{
                    let block = new Block(size,0, posX, posY)
                    this.drawBlock(block)
                    console.log(block)
                }
                count++
                posX += size;

            }
            posY += size;
        }

    }

    drawBlock(block){
        this.ctx.drawImage(block.image,block.posX,block.posY, block.size,block.size)
    }

}