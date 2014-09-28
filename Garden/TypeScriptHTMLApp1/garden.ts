class Garden {
    width: number;
    height: number;
    soilType: string;
    lastWatered: string;
    trees: Tree[];

    constructor(width: number, height: number, soilType: string, lastWatered: string) {
        this.width = width;
        this.height = height;
        this.soilType = soilType;
        this.lastWatered = lastWatered;

        this.trees = new Array<Tree>();
    }

    addTree(tree: Tree) {
        this.trees.push(tree);

        //tree[0] = tree;
    }

  
    //stop() {
    //    clearTimeout(this.timerToken);
    //}

}