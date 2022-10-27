var board =[];
var userChoice;
var currentTurn;

function minmax(){
    this.minPlayer =1;
    this.maxPlayer =2;
}

minmax.prototype.setMinMax=function(min, max) {
    this.minPlayer =min;
    this.maxPlayer =max;
}

minmax.prototype.copyBoard=function(board){
    return board.slice(0);
}
minmax.prototypemakeMove =function(position, board, player){
    if(board[position] == 0){
        var newBoard =this.copyBoard(board);
        newBoard[position]=player;
        return newBoard;
    }
    else{
        return null;
    }
}

