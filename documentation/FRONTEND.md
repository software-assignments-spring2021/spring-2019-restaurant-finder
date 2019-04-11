# Documentation

## Frontend
In the frontend, we use React and Axios to fetch information on the backend and use Bootstrap to implement the user interface and display the data on the website.   

### `/frontend/public/stylesheets/index.css`

#### Description
This is CSS file for the app. It is used to describe how elements should be rendered on screen.

#### When should we add to or change this?
Any time we want to make changes to the style or appearance of the content. 

### `/frontend/src/App.js`

#### Description
-------------------------

#### When should we add to or change this?
-------------------------

### `/frontend/src/index.js`

#### Description
Default file created with creat-react-app

### `/frontend/src/serviceWorker.js`

#### Description
Default file created with creat-react-app

### `/frontend/src/auth`
This is the folder we should put anything related to user authentication.

### `/frontend/src/auth/Login.js`

#### Description
This is the file that allows users to login. It renders a login box for users to input their username and password. It also authenticates if the user exists or if the password is correct based on the mongodb user database. 

#### When should we add to or change this?
If you want to make changes to how users login.

### `/frontend/src/auth/Signup.js`

#### Description
This is the file that allows users to signup. It renders a signup box for users to input their username and password and creates/saves a new user in the mongodb user database. 

#### When should we add to or change this?
If you want to make changes to how users signup.

### `/frontend/src/components/filters.js`

#### Description
-------------------------

#### When should we add to or change this?
-------------------------

### `/frontend/src/components`
This is the folder where we have all the components of a page. 

### `/frontend/src/components/GlobalNavBar.js`

#### Description
This is the file that shows the navbar at the top of the page. Right now it only has the logout function. 

#### When should we add to or change this?
When there are functionalities we want to remove or add to the top of the page or when we want an url to lead up to a new page.

### `/frontend/src/components/RestaurantBox.js`

#### Description
This is the file that contains the template for each individual restaurant box shown in the main searching page. It takes in information from backend and renders it with the proper information filled in. 

#### When should we add to or change this?
When we want to change the design or content of the individual restaurant box. 

### `/frontend/src/pages`
This is the folder where we use the components and combine it to form different pages. 

### `/frontend/src/pages/RestaurantPage.js`

#### Description
This is the file that contains the template for each restaurant page. When individual restaurant boxes are clicked on the searching page, it takes information from the backend and leads the user to an individual page containing more  information about the restaurant. 

#### When should we add to or change this?
When we want to change the design or content of the restaurant page. 

### `/frontend/src/pages/SearchRestaurantPage.js`

#### Description
This is the file that renders a list of restaurants based on users input. It fetches restaurant information from backend and filters through the filtering file. It displays the search bar, buttons for filtering, and up to 20 individual restaurant boxes. 

#### When should we add to or change this?
When we want to add any features or change the design of the application. 