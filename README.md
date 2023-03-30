# FOODIE WEB APPLICATION

## Table Of Content
- Title
- Table Of Content
- Description
- Features
- Technology Used
- Installation
- Client-Side
- Server-Side
- Authors

## Description
Foodie is a food delivery application where users can browse through a catalogue of foods prepared by various restaurants and make orders. This application is built to give restaurants a wider reach and also give customers a wide variety of food options to choose from. Foodie is targeted at office workers, bachelors, lazy chefs, and individuals or families looking to have a wide range of options without having to make all the dishes themselves.

## Features
Foodie is a full-stack web application comprising an API and a client-side the user interacts with. Users can browse through a catalogue of foods and add them to their cart, make orders and pay from the application.

The API allows for create, read, update, and delete (CRUD) operations for users, restaurants, and food items by already registered restaurants.

## Technology Used
* JavaScript

* Database
    * MongoDB

* Third Party Services
    * Cloudinary

* Third party libraries
    * React
    * Express
    * Mongoose
    * Bootstrap
    * Passport

## Installation
This application is built using nodejs and packages hosted on the npm repository. To install and run the application on your local machine, you need to have node installed. To run both the client and server side of the application, you need third-party software MongoDB server installed and running to be able to run the client side of the application.
* Clone the repository in your machine.
* Navigate into the root folder of the application from your terminal.
* Run the command `npm run install` to install all the packages used for developing the application. If you are only interested in the client-side or server-side,`npm run install-client` and `npm run install-server` installs their respective packages.
* After installation of the packages, you can run the command `npm run start-app` to start the client-side and the server-side. Note: the package.json in the root folder contains commands to run the client-side and server-side independently.
* The client-side is launched automatically in a browser and the API routes are ready to receive user requests.

## Client-Side
The client-side was built using `React` a javascript framework. It is consists of several routes. The routes currently available are:
* `/` points to the landing page of the application.
* `/homepage` is the hompage of the application, this contains various routes which the user can click to the access other part of the application.
* `/signup` points to the user siignup page
* `/login` is the route for the user login
* `/checkoutpage` is the checkout page for orders being made

## Server-side
The server-side was built using express a javascript framework for client-side development. The backend is an API consisting of routes that allowes various functions to be carried out. MongoDB was used as the database for storing the data needed by the appliaction.

The API consists of several routes, each having a role they fulfill and arguments they require to give a success response.
Api routes were broken down according to the models present in the application and some models which depended on another model had their routes gotten from the model route they depended on.

Routes present in the API are:
* For `Customer`:

|Routes|Method|Arguments|Use|
|---|---|---|---|
|`/customers`|`POST`|firstname,email,password|Creates user data in database|
|`/customers/login`|`POST`|email,password|User login, creates a session if suceeds|
|`/customers/logout`|`DELETE`||Deletes user session|
|`/customers`|`GET`||Returns all customers in the database|
|`/customers/:username`|`GET`||Gets a specific user from the database|
|`/customers/:username`|`PUT`|check customer model|Updates a user details|
|`/customers/:username`|`DELETE`||Deletes a user from the database|

The cart, card and order route all depends on the customer route. Below shows their respective routes and uses.

* `Card`

|Routes|Method|Arguments|Use|
|---|---|---|---|
|`/customers/card`|`GET`||Gets all cards for a user|
|`/customers/card`|`POST`|cardNo,cvv,expiryDate|Add card to user cards|
|`/customers/card/:id`|`PUT`|cardNo,cvv,expiryDate|Update card details|
|`/customers/card/:id`|`DELETE`||Deletes a specific card|

* `Cart`

|Routes|Method|Arguments|Use|
|---|---|---|---|
|`/customers/cart`|`GET`||Gets all items on user cart|
|`/customers/cart/add`|`PUT`|foodId|Add food item to cart|
|`/customers/cart/remove`|`PUT`|foodId|Remove a food item from the cart|
|`/customers/cart/clear`|`PUT`||Remove all items from the cart|

* `Order`

|Routes|Method|Arguments|Use|
|---|---|---|---|
|`/customers/orders`|`GET`||Gets all orders present|
|`/customers/orders`|`PUT`|orderId,status|Update order status|
|`/customers/orders/:orderId`|`GET`||Gets a specific order|
|`/customers/:usernameorders`|`GET`||Get user orders|
|`/customers/:usernameorders`|`POST`||Create a new order from the users cart|

* For the `Restaurant` routes:

|Routes|Method|Arguments|Use|
|---|---|---|---|
|`/restaurants`|`GET`||Get all restaurants in the database|
|`/restaurants/:name`|`GET`||Returns the details of a particular restaurant|
|`/restaurants`|`POST`|name,description,image|Adds a restaurant to the database|
|`/restaurants/:name`|`PUT`|name,description,image|Updates the details of a restaurant|
|`/restaurants/:name`|`DELETE`||removes a restaurant from the database.|

* For the `Food` routes:

|Routes|Method|Arguments|Use|
|---|---|---|---|
|`/foods`|`GET`||Get all foods in the database|
|`/foods/:id`|`GET`||Returns the details of a particular food|
|`/foods/:id`|`PUT`|name,description,price,image|Update a particular food in the database|
|`/foods/:id`|`DELETE`||Removes food from the database|
|`/foods/restaurant/:restaurant_id`|`GET`||returns all food for a particular restaurant|
|`/foods/restaurant/:restaurant_id`|`POST`|name,description,price,image|Adds food for a particular restaurant|

## Authors
* Joy Gundu soniqjjj@gmail.com
* Micheal Bankole bankole123michael@gmail.com
* Oluwadamilola Oyeniya oyeniyaoluwafamilola@outlook.com
* Benjamin Faruna benjaminfaruna@gmail.com 
