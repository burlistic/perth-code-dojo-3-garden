/// <reference path="Garden.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JapaneseGarden = (function (_super) {
    __extends(JapaneseGarden, _super);
    function JapaneseGarden(width, height, soilType, lastWatered) {
        _super.call(this, width, height, soilType, lastWatered);

        this.ornateBridges = new Array();
    }
    JapaneseGarden.prototype.addOrnateBridge = function (bridge) {
        this.ornateBridges.push(bridge);
    };
    return JapaneseGarden;
})(Garden);
//# sourceMappingURL=japaneseGarden.js.map
