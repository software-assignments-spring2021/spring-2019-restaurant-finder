# Documentation

## Backend

In general, our backend acts as our "server" using Express, connecting to MongoDB, and authenticating using a middleware called "Passport." We also use the Yelp API to get content for the actual site.

### `/backend/app.js`

#### Description
This is our "entrypoint" for the express app. The express app's entire intention is to serve as our "server," which can literally be defined as "a computer that provides data to other computers." All we're doing with the backend is serving up data so that our frontend can render it. 

The file in general runs our actual server. It runs all the configurations, configures the middleware, serves up our routes, and listens on the port we specify. 

#### When should we add to or change this?

Whenever you need to add site-wide content. This is only something that will affect the entire app itself, such as new middleware, a new router, or global database configurations we don't do anywhere else. In general, this shouldn't change all that much unless we're adding major new functionality.

### `/backend/Yelp`
This is the folder we should put anything related to Yelp.

### `/backend/Yelp/YelpGet.js`

#### Description
This is the file that exports our yelp client. This basically does configuration for our Yelp API, and exports it. You can use this by doing `const yelpClient = require("/path/to/YelpGet").client`

#### When should we add to or change this?
If you need to change the way we set up Yelp.

### `/backend/routes`

This is the folder with our "routes." We are going to refer to anything that we can call using our app a "route." This is where we are serving up our data, so our frontend can get it. Basically, our frontend is going to the "routes" we define in these routers. If our frontend points to `/api/callYelp` and passes in query strings, it will return Yelp JSON. 

### `/backend/routes/callYelp.js`

#### Description
This is the file we implement our Yelp API. This route takes in query strings sent to us from the frontend, passes them to yelp, grabs that data, does some custom functionality with it, and returns it to our app. It's basically our middleman to Yelp. Note how we have some things configured in this file already (for example, our app is only New York currently)

#### When should we add to or change this?
Whenever you need to change or configure the fundamental "search" feature of our app. All yelp-fusion related functionality should be configured here. Note that all of these routes are exported, and they are served up in `app.js`

### `/backend/routes/user.js`
The routes for the content we get from our MongoDB database about our users.

#### Description
Basically, we have a couple of things we want to know about our users at any point in time. IF someone's logging in with a username, we need to check in the database if our user has an account. It needs to decrypt a password from the database and compare it to whatever the user just passed in. These routes give us all of this data for us to use within our app.

#### When should we add to or change this?
Whenever we need to change the type of data that interacts directly with our users stored in our database, or how we access that data.

### `/backend/passport`

Most of this implementation is boilerplate code. Basically, it configures our passport to authenticate properly with basic username / password. I followed this from a tutorial and am not sure of the details, I will go back and comment this section / figure it out if we need to change it. For now I'm just generally happy it works LOL. 

### `/backend/database`
Anything related to connecting to or creating schemas for the database should be in this folder.

### `/backend/database/index.js`

#### Description
This basically connects to our database.

#### When should we add to or change this?
When we need to change the way we connect to our database.

### `/backend/database/models`
This folder should contain all the MongoDB schemas we want in our database. Can't imagine we'll have more than just users but we might??

### `/backend/database/models/user.js`

#### Description
The file that defines our user schema for our database, or how exactly our user is modeled.

#### When should we add to or change this?
When we need to add new content that we want to be associated with our user. For example, we should add functionality here for users to have pinned restaurants.

# TEMPLATE

### `/path/to/file/or/directory`

#### Description

#### When should we add to or change this?

