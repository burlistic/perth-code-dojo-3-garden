class Tree extends PositionalItem {

    constructor(x: number, y: number) { super(x, y); }

    lastMulched: string;
    
    mulch() {
        return true;
    }

}