describe("Garden", function () {
    var garden;

    beforeEach(function () {
        //garden = new Garden(50,10);

    });

    describe("when a garden is created", function () {

        garden = new Garden(50, 10, "clay", "2014/9/28");

        it("should have the correct dimensions", function () {
            expect(garden.width).toEqual(10);
            expect(garden.height).toEqual(50);
        });

        it("should contain the soil type", function () {
            expect(garden.soilType).toEqual("clay");
        });

        // TODO - convert to real date object
        it("should contain the date last watered", function () {
            expect(garden.lastWatered).toEqual("2014/9/28");
        });

    });


});
