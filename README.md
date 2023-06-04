# pizza-delivery

This will be a pizza delivery app

Steps
-Netlify Account to deploy frontend app
-Heroku Account to deploy server
-MongoDB Atlas Server
create 2 different folder in the root directory: `client` & `server`

## cd client

-> npx create-react-app
-> keep only Index.js/Index.css/App.js, delete other files and imports from the keeped files
-> create some new folder for a better organization: pages, components, styles
-> npm install react-router-dom <!-- import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';`  if needed-->
-> `OPTIONAL` we will use SCSS to design application -> npm install sass (changes .css -> .scss extension)
-> `ROUTING` import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom" - check Router.js file in components
-> `axios` also optional, package for fetching data in a shorter hand
-> `ICONS` npm install react-icons
-> Material UI - npm install @mui/material @emotion/react @emotion/styled
-> Material UI Icons - npm install @mui/icons-material
///
npm install react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

## cd server

-> create server.js file (engine)
-> create next folders: routes | controllers | models
-> npm init -y
-> npm install express
-> npm install nodemon -g <!-- will refresh the server automatically with the new changes -->
-> npm install dotenv
-> npm install mongoose <!-- will help us work with MongoDB -->
-> npm install cors <!-- Enable All CORS Requests -->
-> npm install bcrypt <!-- for hashing passwords -->
-> npm install validator <!-- validate inputs field -->
-> npm install jsonwebtoken <!-- create token for passwords if signup/login succesful -->

# MONGO DB

-> set up a new project in your development organizations (if you don't have an organization, create one)
-> set id and password for your database
-> allow access for anywhere in Network Access
-> In the Project Dashboard, click on connect and get the link to connect via VSC, and replace information with your data set

# POSTMAN

-> for all requests types created in the server, test them in POSTMAN and check also the MongoDB
