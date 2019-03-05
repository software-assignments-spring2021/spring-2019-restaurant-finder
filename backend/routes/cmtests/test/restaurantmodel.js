class Restaurant {
   constructor(name, cuisine, price)
    {
        this.name = name;
        this.cuisine = cuisine;
        this.price = price;
    }
    getName()
    {
        return this.name;
    }
    
    getCuisine()
    {
        return this.cuisine;
    }
    getPrice()
    {
        return this.price;
    }
}

module.exports = Restaurant;