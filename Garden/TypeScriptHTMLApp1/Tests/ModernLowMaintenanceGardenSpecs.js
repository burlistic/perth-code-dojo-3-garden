describe("Modern Low Maintenance Garden", function () {
    var garden;

    beforeEach(function () {
        garden = new ModernLowMaintenanceGarden(20, 12, "na", "2014/9/30");

    });

    describe("when a fake lawn is added", function () {

        it("should have 1 fake lawn", function () {
            garden.addArtificalLawns(new ArtificialLawn(0, 0,0,0));

            expect(garden.artificialLawns.length).toEqual(1);
        });

        it("should be the correct dimensions", function () {
            garden.addArtificalLawns(new ArtificialLawn(new Array(3, 3), new Array(3, 6), new Array(6, 3), new Array(6, 6)));

            expect(garden.artificialLawns[0].topLeft).toEqual(new Array(3, 3));
            expect(garden.artificialLawns[0].topRight).toEqual(new Array(3, 6));

            expect(garden.artificialLawns[0].bottomLeft).toEqual(new Array(6, 3));
            expect(garden.artificialLawns[0].bottomRight).toEqual(new Array(6, 6));
        });

    });


});
