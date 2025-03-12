# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




<!-- Frontend all step  -->

npm create vite@latest

write project name:-

Select framework: React

Select a variant: JavaScript

cd frontend(project name)

npm install

npm install react-router-dom

npm run dev (Go Live)

<!-- Go in src -->
App.jsx => clear all data

type :=> rafce =>enter(Now export component is ready)

App.css =>clear all data

<!-- open index.css -->
clear all data

/* Css for all html elements */
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* add properties for body tag */
body{
  min-height: 100vh;
}

/* css properties for anchor tag */
a{
  text-decoration: none;
  color: inherit;
}

<!-- index.html  -->
Replace title


<!-- create folder structure for our react project -->
In side srs=> create two folder <!--1.components  2.pages-->
<!-- inside components -->
1.Navbar folder => Navbar.jsx file
inside convert jsx file into components <rafce>

then create Navbar.css file 


<!-- assert folder paste all photo -->
go in asserts.js
<!-- all photo utomatically exported in the object formate (name asserts) -->



<!-- Back end Structure create -->

open backend Folder in inigreted terminal

npm init
enter 
package name =>enter(backend keep it)
version =>enter
description =>enter
entry point(index.js) =>server.js
enter
test command: =>enter
git repository: =>enter
keywords: =>enter
author: =>enter
license: (ISC) =>enter
OK(yes) =>enter

<!-- Go in backend folder  -->
create file =>server.js

npm install express mongoose jsonwebtoke
n bcrypt cors dotenv body-parser multer 
stripe validator nodemon=>enter

<!-- Go in package.json -->
remove all element from script and add
"scripts": {
    "server":"nodemon server.js"
  },
  <!-- "server":"nodemon server.js" that means when we type  -->npm run server (execute the server.js file)


  <!-- Create some folder inside backend -->
  config => for store configration file like database configration file

  models => we will store the models of our mongoDatabase

  routes =>

  uploads =>we will upload all the image uploaded by user

  controllers =>we will add logic for our backend

  middleware => we will store all midddleware

  <!-- create a file inside backend  -->
  .env =>we will store all the environment variables


  <!-- Now open Server.js file -->
  npm run server
  npm run dev(For front end)

  <!-- for check backend conection go in postman -->

  select post=>body=>form=>data=> enter run


  <!-- after run copy the image url -->

  <!-- app.use("/images",express.static('uploads'))
  
  adding this in server.js for connection -->
  http://localhost:4000/images//1741607509466food_5.png


  <!-- for deleting frocess  -->
  go in postman and http://localhost:4000/api/food/remove

  add