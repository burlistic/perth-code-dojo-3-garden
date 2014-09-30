/// <reference path="Garden.ts" />

class ModernLowMaintenanceGarden extends Garden
{
    artificialLawns: ArtificialLawn[];

    constructor(width: number, height: number, soilType: string, lastWatered: string) {
        super(width, height, soilType, lastWatered);

        this.artificialLawns = new Array<ArtificialLawn>();
    }

    addArtificalLawns(artificalLawn: ArtificialLawn) {
        this.artificialLawns.push(artificalLawn);
    }
}