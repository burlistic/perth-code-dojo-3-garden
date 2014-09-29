var Garden = (function () {
    function Garden(width, height, soilType, lastWatered) {
        this.width = width;
        this.height = height;
        this.soilType = soilType;
        this.lastWatered = lastWatered;

        this.trees = new Array();
        this.flowers = new Array();
        this.weeds = new Array();
    }
    Garden.prototype.addTree = function (tree) {
        this.trees.push(tree);
    };

    Garden.prototype.addFlower = function (flower) {
        this.flowers.push(flower);
    };

    Garden.prototype.addWeed = function (weed) {
        this.weeds.push(weed);
    };

    Garden.prototype.mulchGarden = function () {
        this.mulchItems(this.trees);
        this.mulchItems(this.flowers);
    };

    Garden.prototype.mulchItems = function (item) {
    };
    return Garden;
})();
//# sourceMappingURL=garden.js.map
