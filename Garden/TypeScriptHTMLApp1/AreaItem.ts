class AreaItem {
    topLeft: Array<number>;
    topRight: Array<number>;
    bottomLeft: Array<number>;
    bottomRight: Array<number>;

    constructor(topLeft: Array<number>, topRight: Array<number>, bottomLeft: Array<number>, bottomRight: Array<number>) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}