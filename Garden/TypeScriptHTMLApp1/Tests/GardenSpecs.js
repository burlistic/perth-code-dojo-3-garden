describe("Garden", function () {
    var garden;

    beforeEach(function () {
        garden = new Garden(10, 50, "clay", "2014/9/28");

    });

    describe("when a garden is created", function () {
        //beforeEach();

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
        //beforeEach();


        it("should have 1 tree", function () {
            garden.addTree(new Tree(1, 2));

            expect(garden.trees.length).toEqual(1);
        });

        it("should contain the correct cordinates", function () {
            garden.addTree(new Tree(1, 2));

            expect(garden.trees[0].x).toEqual(1);
            expect(garden.trees[0].y).toEqual(2);
        });
    });

    describe("when a flower is added to a garden", function () {
        //beforeEach();

        it("should have 1 flower", function () {

            garden.addFlower(new Flower(1, 2));
            expect(garden.flowers.length).toEqual(1);
        });

    });

    describe("when a weed is added to a garden", function () {

        it("should have 1 weed", function () {
            garden.addWeed(new Weed(1, 2));

            expect(garden.weeds.length).toEqual(1);
        });

    });


});
