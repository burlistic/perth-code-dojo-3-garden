describe("Garden", function () {
    var garden;

    beforeEach(function () {
        garden = new Garden(50,10);

    });

    describe("when a garden is created", function () {

        it("should have the correct dimensions", function () {
            expect(garden.width).toEqual(10);
            expect(garden.height).toEqual(50);
        });

    });


});
