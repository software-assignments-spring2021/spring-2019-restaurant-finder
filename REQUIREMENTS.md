# Persona

## End-User observation

Although, the overarching end-user is just any individual needing aid in finding a restaurant recommendation, we will separate those end-users into two types: Regular Users and Social Users. Regular Users describe users who are primarily concerned with just the functionality of the application in regards to finding restaurants that match their personal desires. Social Users are users who are also concerned with the social aspect of the application in terms of reviews and restaurant sharing with their friends.  

### Regular User
#### Persona-1 

Name: Kevin Johnson
Age: 30
Address: 352 Amsterdam Ave, New York, NY, 10023
Phone: 212-544-2052

I am a single 30 year old man working as an Investment Banker at Goldman Sachs. I begin work at around 8am and usually stay at the office until 8pm. I have a 45 minute lunch break at around 2pm, where I am able to freely leave the office to either dine-in or take-out food at wherever I wish. However, I am often unable to search extensively for restaurants that fit my daily cravings. If I spend way too much time looking, I do not have the luxury to walk there, pick up my order, and come back in time to eat. If I do a quick luck of the draw pick, I am usually left unsatisfied from the plethora of recommendations that I am given. Therefore, I usually end up at the nearby Chipotle, ordering the dreaded buritto bowl once again. I need an application that can give me a limited number of restaurants that reside at most 10 minutes away from my working location. What would be even better is if I could get a quick, different one-restaurant recommendation every day for whatever style of cuisine I'm craving. 

#### Persona-2 

Name: Callie Numbers
Age: 20
Address: 542 East 16th Street, New York, NY 10009
Phone: 404-213-9989

I am a freshman attending New York University majoring in Economics. Originally from the suburbs of Florida, I have had difficulty with exploring the city of New York and what it has to offer. As a foodie, I am always extensively searching for new restaurants. However, from all the choices available, I usually find myself unable to decide which restaurant to go to based on ratings alone. Specifically, when 5 restaurants are listed with similar ratings and price points, I find myself greatly conflicted on where to go. 

### Social User
#### Persona-3

Name: Kathy Wang
Age: 28
Address: 420 West 29th street, New York, 10010
Phone: 212-119-2433

I am an avid food explorer based in the city of New York. I keep track of all restaurants I have been to and write reviews for every one in my food journal. I have noticed that on different food platforms there seems to be an inflation of "fake" reviews that overshadow genuine ones. Therefore, I have become reluctant these days to upload my personal takes on restaurants. I just wish there was some application that could allow true lovers of food like myself to be immersed into a real "foodie" community where our evaluations could be more appreciated.

#### Persona-4

Name: Jeremih Sanders
Age: 22
Address; 700 E 77th Street, New York, 10162
Phone: 212-988-2020

Although I have been living in New York for around 4 years now, I have never had the luxury to truly explore the many cuisines it has to offer. As I was limited financially and even time-wise as a student, my friends and I usually ate at our school's dining hall to save our money for partying during the weekends. Now that we are all graduated and working, we do not have any knowledge of where to eat outside a couple of restaurants. However, I do know of other friends in school who spent their whole allowances on food alone. I just wish there was a way of knowing what restaurants they have been to and what they thought of each.


### Observations

For each of the personas I listed for our user types, I performed an in-person observation. In this setting, I executed unscripted observations where I gave them the freedom to do whatever they usually did when trying to find somewhere to eat. Once they did find somewhere that seemed appropriate, they went to their respectively chosen restaurants. After, I interviewed them about their experience.

### Notes

All 4 of the individuals recruited to represent each of the personas utilized a current alternative solution when attempting to find a restaurant. This solution was none other than Yelp, which is the largest and most used search engine for restaurants. However, Callie and Kathy both utilized Google Search as well in getting recommendations. Still, Yelp was the primary medium through which all four individuals found their desired restaurants. Although each were able to find a restaurant, they differed in the duration of time that it took to reach a final decision. For Kevin, as he is always in a rush, I found that he only paid attention to the first 5 options that popped up when applying his filters. This probably correlated with his unhappy review of the restaurant after I interviewed him post-meal. Callie was quite the opposite in that she took almost 30 minutes in deciding where to go. As she changed her filter choices multiple times throughout the process, she would spend too much of her time reading reviews of all the possible restaurants and question her ultimate decision. Still, it sounded like she was satisfied from the post-meal interview that I had given her. In regards to Kathy, I realized that she also spent most of her time looking at reviews rather than merely just the ratings. However, she almost had a cynical view of these reviews, questioning the authenticity of them, specifically from very popular restaurants. She decided to go to a local, new restaurant and seemed satisfied with her choice thereafter. Jeremih's case was the most unique in that he actually texted a friend for a recommendation before seeking help from Yelp. After his friend had replied, Jeremih searched the restuarant on Yelp for images of the food before deciding on going. When I asked him about why he texted a friend first, he replied that he would rather trust the recommendations of his friends over strangers on Yelp because they know more about his taste in specific cuisines. In conclusion, their main problems resided in the time taken to choose the restuarants due to the plethora of filter choices and restaurants in the Yelp database. Aside from that, the main problem resided in trusting the validity of the reviews and how their specific tastebuds matched with those reviewing the restuarant. Our system must solve these problems by limiting the number of recommendations to our users to ones that best fit their filter options. Giving too many choices sounds great at first, but it will hinder their ability to select one in an appropriate time frame. Our system must also provide a platform to which users can share experiences with their friends so that the reviews and recommendations will seem valid and trustworthy.


# Use Cases
For all use cases, we will refer to a "user." This "user" is our target end user, a college student / adult in a city trying to find information about restaurants in the area. A "social" user is a user who wants to use the social features of our apps, not just the regular information gathering of a regular user. A social user is required to have an account and be authenticated, while a user does not need an account and can simply use the app to find information.

## Search for all restaurants in a location
### Actor: User
### Scenario 
Our user places a **Location object** search query in the search bar for the particular location they are looking for, and the app displays all restaurants compatible with the location details.

## Search for all restaurants of a cuisine
### Actor: User
### Scenario 
Our user places a **cuisine object** search query in the search bar for the particular cuisine they are looking for, and the app displays all restaurants compatible with the cuisine results.

## Search for all restaurants within a price range
### Actor: User
### Scenario 
Our user places a **price object** search query in the search bar for the particular price they are looking for, and the app displays all restaurants compatible with the price results.

## Rate a restaurant
### Actor: Social User
### Scenario 
Our social user wants to rate a particular restaurant they have searched for and eaten at. Social user provides their score, and the system saves this information into their user object in the database as a rated restaurant. Social user can then go back and look through their ratings.

## Share restaurant rating to a friend
### Actor: Social User
### Scenario 
After a social user has rated a restaurant, they can send this information to another user on their friends list tied to their user object. Social user chooses a friend, chooses a restaurant with their rating, and our system takes this information and delivers it to another social user's recommendations inbox.


# Domain Modeling
//TODO

# Professor Stakeholder Interview

Since our group was not based on a specific Restaurant Finder app we will be concerned with implementing the overall functionality of Finding Restaurant based on different constraints including but not limited to Location, Price and Cuisine Type. Additional features could include Randomly generating compatible restaurants and a Social Network for sharing cuisines, ratings, coupons, deals and recommendations with friends.  

## Would you like first to provide a general overview of your desired outcomes from our project or would you like me to first start off with questions?

- Projects should work at the end.
	- but proper process is more important

- Wait to implement Social Network later, once core functionality is created
- Many tutorials online for this project, but don't copy it! Differentiate your project
  - again, create your own process
- Don't coordinate with other groups

## our timing constraints are 8 weeks with 4 sprints, correct? Or would it be an additional week including spring break?

Yes and You can choose to work over Spring Break if you like. Although if your project is behind you probably should

## Could we solely provide accounts and access to actors involved in finding and sharing restaurants and a website administrator or would you require that we also provide accounts for restaurant owners to change menus and information, requiring validation methods?

Let users access data publicly. Create an account for users to access data for administrators and restaurant owners later, if you are finding yourself running out of features to implement.
	A good feature to implement is possible allowing users to submit data to be added about a restaurant.

## Do you have any constraints on our Organizational or development process or technologies?

- Use feature branch workflow
	- branches do not stay open for long, only 1-3 days
Create Contributing.MD File.
	- This includes How team members will contribute to project
	- It includes team norms:
		- how conflicts will be resolved
		- how you agree to work
		-when you are meeting
		-etc. see notes online

## What process should we undergo when other team members are failing to complete assignments or doing their share?

- Should be created in team norms
	-after how long do things become an issue (people failing to do assigned tasks)
	-how to address it
	-how/if to shift responsibilities to other team member
	-after how long should the professor be contacted
	-won't be penalized for contacting the professor

## Do you have any constraints on technologies we can use? Do you have any recommendations for IDEs or tools for web development that would be helpful?

- no constraints on technologies
- For WebApps
	- use MERN stack to implement
		- MongoDB  - for Database
		- Express - for creating your API
		- React - for FrontEnd Development
			-Could use React Native to develop the webapp for mobile
		- NodeJS - for BackEnd Development
- You Can get help from other teams on how to understand the MERN stack development
- Best "IDE" to use - Visual Studio Code
	- Allows Git Integration
	- Debugging Tools
	- custom scripts on backend (won't use)
	- MarkDown document Previews




## Do you have any specific standards you think we should implement

- coding conventions (will talk about later in class)

## What services do you believe the application should provide?

(His recommendations are Optional)

- reviews for restaurants
	- stars
- Create  Social Network
	- import contact list for friends
	- login through Facebook APIs
		- contains a record of other FB friends registered to the apps
	- Don't limit restaurants to just one's your friends reviewed
		- maybe add a preference to them in search
	- Add these only after you've implemented core functionality of the app
		- info should be available to nonregistered users

- add GEO coordinate Analysis for restaurant locations and maps
	- this is a functionality within MongoDB - GEO coordinate service
	- tutorials should be available on this

- We shouldn't be "too" ambitious

## Are there any security requirements we should implement that could secure our webpage in any way?

No

## Will you be requiring us to invest personal funds in order to launch or application of the web, or would we just need to make it functional for demonstration purposes?

- It should be on the web if it's a web app
	- find free/cheap resources
	- this should be a feature added in an early sprint after basic functionality is added
- first focus on creating the app
	- should be fine if the professor and tutor can run it locally on their machines
	-by installing our full MERN stack
- taking it online should be a main priority 	
	- we can ask him for help and resources when it comes time for us to publish it
- Every sprint should result in a runnable project



## If it should be online, How many users should we provide the ability to access the application at one time? Is there a minimum amount of memory usage we should provide each user?

- you should never reach a server crash, don't worry about this, unless you've coded it very poorly


## If not online should there be a maximum storage size that our project should be?

no, but really focus on it being online


## Do you have any Usability Requirements we should implement? Should there be a tutorial for new users?

- make it easy to use
	- will talk about this later in the class
- shouldn't be a tutorial... should be pretty easy to understand.
	- unless for brand new novel features that are different from competitors

# Tutor Stakeholder Interview

Since our group was not based on a specific Restaurant Finder app we will be concerned with implementing the overall functionality of Finding Restaurant based on different constraints including but not limited to Location, Price and Cuisine Type. Additional features could include Randomly generating compatible restaurants and a Social Network for sharing cuisines, ratings, coupons, deals and recommendations with friends.  

## Would you like first to provide a general overview of your desired outcomes from our project or would you like me to first start off with questions?

- Develop Unit Tests
    - Should be done before each Sprint
- Features for first 3 sprints
    - Geolocation and Categories
    - Social Network
- 4th Sprint
  - half should be testing and wrapping up
  - and the other half should be implementing a new feature

## our timing constraints are 8 weeks with 4 sprints, correct? Or would it be an additional week including spring break?

Yes

## Could we solely provide accounts and access to actors involved in finding and sharing restaurants and a website administrator or would you require that we also provide accounts for restaurant owners to change menus and information, requiring validation methods?

No focus on just 1 user

## Do you have any constraints on our Organizational or development process or technologies?

- Use feature branch workflow
- Manage User Stories
    - Use Zenboard?

## What process should we undergo when other team members are failing to complete assignments or doing their share?

- Use Daily scrum to talk to teammates
- Help each other with work

## Do you have any constraints on technologies we can use? Do you have any recommendations for IDEs or tools for web development that would be helpful?

- No

## Do you have any specific standards you think we should implement

- ESLint
- Aribnb or Google JS Guide

## What services do you believe the application should provide?

(His recommendations are Optional)

- Create accessible user interface
- Including weighting for search results to balance different user filter concerns against each other
- If time is sufficient implement style design
- Unsure if we could implement coupons

## Are there any security requirements we should implement that could secure our webpage in any way?

No

## Will you be requiring us to invest personal funds in order to launch or application of the web, or would we just need to make it functional for demonstration purposes?

- Use Heroku to host the webpage
- Use AWS or MySQL on CIMS for the backend database


## If it should be online, How many users should we provide the ability to access the application at one time? Is there a minimum amount of memory usage we should provide each user?

- Don't worry too much
- check Heroku's documentation

## If not online should there be a maximum storage size that our project should be?

  no.
  - Post it to the professors & Tutor through Github
  - add README for instructions and dependencies on how to requiring
  - Could use Docker and Vagrant to run the project on a Virtual Machine on the grader's computer


## Do you have any Usability Requirements we should implement? Should there be a tutorial for new users?

- mimic yelp.
- could add tutorials for new users
