const yelp = require("yelp-fusion");
const myApiKey = "GHviyeSI-o9Kd-s3WMWjxvsonlGayIGht_mqqYzXtV24jWnZ-NFLzj2mU8YDh6jEFu8FEH7YSOHouOKPBZjqQ_DQuhc-OKngQOP2tLRVu3hiBd0OBuoV_YGo27CFXHYx";


const client = yelp.client(myApiKey, {
    socketTimeout: 5000
  });

module.exports={
    client: client
};