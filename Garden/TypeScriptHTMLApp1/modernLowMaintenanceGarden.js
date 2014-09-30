/// <reference path="Garden.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ModernLowMaintenanceGarden = (function (_super) {
    __extends(ModernLowMaintenanceGarden, _super);
    function ModernLowMaintenanceGarden(width, height, soilType, lastWatered) {
        _super.call(this, width, height, soilType, lastWatered);

        this.artificialLawns = new Array();
    }
    ModernLowMaintenanceGarden.prototype.addArtificalLawns = function (artificalLawn) {
        this.artificialLawns.push(artificalLawn);
    };
    return ModernLowMaintenanceGarden;
})(Garden);
//# sourceMappingURL=modernLowMaintenanceGarden.js.map
