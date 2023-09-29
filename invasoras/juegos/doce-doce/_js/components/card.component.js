function MemoryCard(piecename) {
    this.piecename = piecename;
    this.covered = true;
}

MemoryCard.prototype.flipUncover = function flipUncover() {
    console.log("face uncover");
};

MemoryCard.prototype.flipCover = function flipCover() {
    console.log("face cover")
};
