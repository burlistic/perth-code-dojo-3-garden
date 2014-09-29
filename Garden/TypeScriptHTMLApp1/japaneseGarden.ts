/// <reference path="Garden.ts" />

class JapaneseGarden extends Garden
{
    ornateBridges: OrnateBridge[];

    constructor(width: number, height: number, soilType: string, lastWatered: string) {
        super(width, height, soilType, lastWatered);

        this.ornateBridges = new Array<OrnateBridge>();
    }

    addOrnateBridge(bridge: OrnateBridge) {
        this.ornateBridges.push(bridge);
    }
}