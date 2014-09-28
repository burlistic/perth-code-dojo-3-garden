var Garden = (function () {
    function Garden(width, height, soilType, lastWatered) {
        this.width = width;
        this.height = height;
        this.soilType = soilType;
        this.lastWatered = lastWatered;

        this.trees = new Array();
    }
    Garden.prototype.addTree = function (tree) {
        this.trees.push(tree);
        //tree[0] = tree;
    };
    return Garden;
})();
//# sourceMappingURL=garden.js.map
