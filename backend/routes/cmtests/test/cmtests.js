let expect = require("chai").expect;
let arrUtils = require("./arrayutilities.js");
let Restaurant = require("./restaurantmodel.js");

//helper function
function generateRestaurants(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        restTmp = new Restaurant("test" + i, "testCuisine" + i, i * 3);
        arr.push(restTmp);
    }
    return arr;
}

describe("arrUtilities.sortByName()", function () {
    {
        it("should sort the array by name of restaurant", function () {
            let arr = [];

            let redLobster = new Restaurant("Red Lobster", "American", 2);
            let zundoYa = new Restaurant("Zundo-Ya", "Japanese", 3);
            let tacoBell = new Restaurant("Taco Bell", "Mexican", 1);
            let chipotle = new Restaurant("Chipotle", "Mexican", 2);

            arr.push(redLobster);
            arr.push(zundoYa);
            arr.push(tacoBell);
            arr.push(chipotle);

            arr = arrUtils.sortByName(arr);

            expect(arr[0].getName()).to.equal("Chipotle");
        });
    }
});

describe("arrUtilities.sortByCuisine()", function () {
    {
        it("should sort the array by name of cuisine", function () {
            let arr = [];

            let redLobster = new Restaurant("Red Lobster", "American", 2);
            let zundoYa = new Restaurant("Zundo-Ya", "Japanese", 3);
            let tacoBell = new Restaurant("Taco Bell", "Mexican", 1);
            let chipotle = new Restaurant("Chipotle", "Mexican", 2);

            arr.push(zundoYa);
            arr.push(redLobster);
            arr.push(tacoBell);
            arr.push(chipotle);

            arr = arrUtils.sortByCuisine(arr);

            expect(arr[0].getName()).to.equal("Red Lobster");
        });
    }
});

describe("arrUtilities.sortByPrice()", function () {
    {
        it("should sort the array by price", function () {
            let arr = [];

            let redLobster = new Restaurant("Red Lobster", "American", 2);
            let zundoYa = new Restaurant("Zundo-Ya", "Japanese", 3);
            let tacoBell = new Restaurant("Taco Bell", "Mexican", 1);
            let chipotle = new Restaurant("Chipotle", "Mexican", 2);

            arr.push(zundoYa);
            arr.push(redLobster);
            arr.push(tacoBell);
            arr.push(chipotle);

            arr = arrUtils.sortByPrice(arr);

            expect(arr[0].getName()).to.equal("Taco Bell");
        });
    }
});

describe("getName()", function () {
    it("should return the name of the restaurant", function () {
        restTmp = new Restaurant("Zundo-Ya", "Japanese", 3);
        name = restTmp.getName();
        expect(name).to.equal("Zundo-Ya");
    });
});

describe("getCuisine()", function () {
    it("should return the cuisine of the restaurant", function () {
        restTmp = new Restaurant("Zundo-Ya", "Japanese", 3);
        cuisine = restTmp.getCuisine();
        expect(cuisine).to.equal("Japanese");
    });
});

describe("getPrice()", function () {
    it("should return the price of the restaurant", function () {
        restTmp = new Restaurant("Zundo-Ya", "Japanese", 3);
        price = restTmp.getPrice();
        expect(price).to.equal(3);
    });
});