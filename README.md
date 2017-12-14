# :moneybag: spend500 :moneybag:

### *week 7 project*

## :computer: Install Instructions :computer:

Clone repo

Run node db_build.js

npm run dev

## WHO

Hoslack

Mynah

Neil



## WHAT

spend500 is an online shop selling boutique items. You are given 500.00 of currency to buy items that are added to the cart. When you are ready to buy, the value of the items in the cart will be deducted from your balance and shipped to the address you supplied on sign up!(not really)

## HOW

spend500 employs the use of cookies and jwts (using the npm module jsonwebtoken) to maintiain a logged in state through different pages. Via a database, the username and password are stored and verified as correct using the bcryptjs npm module upon login. The items of the shop and various references such as user transaction ids are also stored in the schema

## MAP
![alt-text](https://user-images.githubusercontent.com/26359601/33985446-48fe3578-e0c3-11e7-804e-ff23df44fb35.jpeg)


## PLAN

* build handler
* build router
* write queries
* build authentication
* build signup/sign in page
* write dom manipulation for items
* write tests for server & db

#### to-do
* travis
* heroku deployment
* transaction history

