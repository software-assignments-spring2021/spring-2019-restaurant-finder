function sortByName(arr)
{
    arr.sort(function(a, b)
    {
        return a.name.localeCompare(b.name);
    });
    return arr;
}

function sortByCuisine(arr)
{
    arr.sort(function(a, b)
    {
        return a.cuisine.localeCompare(b.cuisine);
    });
    return arr;
}

function sortByPrice(arr)
{
    arr.sort(function(a, b) 
    {
        return parseInt(a.price) - parseInt(b.price);
    });
    return arr;
}

module.exports = {
    sortByName: sortByName,
    sortByCuisine: sortByCuisine,
    sortByPrice: sortByPrice
}