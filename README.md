JS AMAZONA 

1. create folder structure 
2. create root folder as jsamazona 
3. add frontend and backend folder
4. create src folder in frontend 
5. create index.html with heading jsamazona in src
6. run npm init in frontend folder
7. run npm live server frontend7. add start command as live-server src --verbose
9. run npm start ..

3 . Create Static Home screen
1. create ul.products
2. create li
3. create div.product
4. add.product-image, .product-name, .product.brand, .product.price
5. style ul.products and internal divs
6. duplicate 2 times to show 3 products


4. Render Dynamic Home Screen
 1. create data.js
 2. export an array of 6  products
 3. create screens/HomeScreen as an object with render() method
 5. implement render()
 6. import data.js
 7. return products  mapped to lis inside an ul
 8. create app.js
 9. link it to index.html as module
 10. set main id to main-container
 11. create route() function
 12. set main_container innerHTML to HomeScreen.render()
 13. set load event of window to route() function

5. Build Url routes 
 1. create routes as route:screen object for home screen
 2. create utils.js
 3. export paraseRequestURL()
 4. set url as hash address split by splash
 5. return resource, id and verb of url
 6. update router()
 7. set request as paraseRequestURL()
 8. build parasedUrl and compare with routes
 9. if route exits render it, else render Error404
 10. create screens/Error404.js render error message 
 
6. Create a Node.js server
1. run npm init in root jsamazona folder
2. npm install express
3. create server.js
4. add  start command as node backend/server.js
5. require express
6. move data.js from frontend to backend
7. create route for /api/products
8. return produces in data.js
9. run npm start

7. Load products from backend 
1. edit homeScreen.js
2. make render async
3. fetch products from './api/products' in render()
4. make router() async and call await homeScreen.render()

8. Add webpack 
1. cd frontend
2. npm install -D webpack webpack-cli webpack-dev-server
3. npm uninstall live-server
4. "start": "webpack-dev-server --node development --watch-content-base --open"
5. move index.html, styles.css and images to frontend folder
6. rename app.js to index.js
7. update index.html
8. add <script src="main.js"></script> before <body>
9. npm start
10. npm install axios
11. change fetch to axios in homeScreen

9. install Babel for ES6 syntax
1. npm install -D babel core, cli, node, preset-env
2. create .babelrc and set present to @babel/preset-env
3. npm install -D nodemon nodemon
4. set start: nodemon --watch backend --exec babel-node backend/server.js 
5. convert require to import in server.js report6. npm start 

10. Enable code Linting
1. npm install -D eslint eslint
2. install VSCode eslint extension 
3. create .eslintrc and set module.exports for env to node
4. set vscode setting for editor.codeActionsOnsave source.fixAll.eslint to true 
5. check result for linting error 
6. npm install eslint-config-airbnb-base and eslint-plugin-import
7. set extends to airbnb-base
8. set parserOptions to ecmaversion 11 and sourceType to module
9. set rules for no-console to 0 to ignore linting error


11. install VSCode extension
1. javascript (ES6) code snippets
2. ES7 react/redux/graphic/react-native snippets
3. prettier- code formatter
4. html/less grammar injuctions  
5. css peek

12.  Create rating component
1. create component/rating.js 
2. create div.rating 
3. link to fontawesome.css in index.html 
4. define rating object with render()
5. if !props.value return empty div
6. else use fa fa-star, fa-star-half-o and fa-star-o 
7. last span for props.text || ''
8. style div.rating, span and last span
9. edit homeScreen
10. add div.product-rating and use rating component

13. product screen
1. get product id from request
2. implement /api/product/:id api
3. send Ajax request to product api
4. create back to result link
5. create div.details with 3 columns 
6. column 1 for product image 
7. column 2 for product information
8. column 3 from product action
9. style .details and all columns
10. create add to cart button with add-button id
11. after_render() to add event to the button
12. redirect user to cart/:product_id

16. add to cart action
1. create cartscreen.js 
2. parseRequestUrl()
3. getproduction(request.id)
4. addToCart
5. getCartItems
6. cartItems.find
7. if existItem update qty
8. else add item

17. Cart Screen UI
1. cxartItems = getCartItems()
2. create 2 columns for items and cart action 
3. cartItems.length === 0 ? cart is empty
4. show item image, name, qty and price
5. cart action 
6. subtotal
7. proceed to Checkout button 
8. add css style 

18.  Update and delete Cart Items
1. add qty select next to each item
2. after_render()
3. add change event to qty select
4. getCartItems() and pass to addToCart()
5. set force to true to addToCart()
6. 