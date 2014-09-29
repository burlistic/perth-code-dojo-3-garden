describe("Japanese Garden", function () {
    var garden;

    beforeEach(function () {
        garden = new JapaneseGarden(20, 80, "silt", "2014/9/29");

    });

    describe("when an ornate bridge is added", function () {

        it("should have 1 ornate bridge", function () {
            garden.addOrnateBridge(new OrnateBridge(1, 2));

            expect(garden.ornateBridges.length).toEqual(1);
        });

    });


});
