var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Flower = (function (_super) {
    __extends(Flower, _super);
    function Flower(x, y) {
        _super.call(this, x, y);
    }
    Flower.prototype.mulch = function () {
        return true;
    };
    return Flower;
})(PositionalItem);
//# sourceMappingURL=flower.js.map
