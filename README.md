# QEC2019

This project was written so users, more specifically students, can find recipes to use for their leftovers.
The structuring of the web application consists of multiple React components strung together with different
pages to create functionality. Index.js in the pages folder is the starting page for the website where the user
can login. The page also has a link to create a new account if the user has not already done so. When login information
is given, the user then gains access to the FoodInput.js page. This page allows the user to input the ingredients they have
in their pantry and gain access to recommended recipes.
Looking at the new account page, Account.js, the file calls a component from create-account.js. This is where data about
the user is sent to the database and will create an account for the user. As a result, the user then gains access to the listing
section. 

To install gatsby see, https://www.gatsbyjs.org/tutorial/part-zero/ 
In order to run the project, need to be in the FoodOrderingSystem directory and call "gatsby develop". This will provide a localhost that can be copy and pasted into a browser and the site will be active.
