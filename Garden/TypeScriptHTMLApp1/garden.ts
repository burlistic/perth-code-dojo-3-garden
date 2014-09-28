class Garden {
    width: number;
    height: number;
    soilType: string;
    lastWatered: string;
    trees: Tree[];
    flowers: Flower[];
    weeds: Weed[];

    constructor(width: number, height: number, soilType: string, lastWatered: string) {
        this.width = width;
        this.height = height;
        this.soilType = soilType;
        this.lastWatered = lastWatered;

        this.trees = new Array<Tree>();
        this.flowers = new Array<Flower>();
        this.weeds = new Array<Weed>();
    }

    addTree(tree: Tree) {
        this.trees.push(tree);
    }

    addFlower(flower: Flower) {
        this.flowers.push(flower);
    }

    addWeed(weed: Weed) {
        this.weeds.push(weed);
    }
 
}