describe("Garden", function () {
    var garden;

    beforeEach(function () {
        //garden = new Garden(50,10);

    });

    describe("when a garden is created", function () {

        garden = new Garden(10, 50, "clay", "2014/9/28");

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

    describe("when a tree is added to a garden", function () {

        garden = new Garden(10, 50, "clay", "2014/9/28");
        garden.addTree(new Tree());

        it("should have 1 tree", function () {
            expect(garden.trees.length).toEqual(1);
        });

    });


});
