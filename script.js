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


