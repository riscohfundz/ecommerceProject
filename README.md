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
6. create rerender() as (component, areaName = 'content')
7. component.render and component.after_render
8. if force is true then rerender()
9. add delete button next to each other
10. add click event to qty button
11. call removeFormCart(deleteButton.id)
12. implement removeFormCart(id)
13. setCartItems(getCartItems().filter)
14. if id === parseRequestUrl().id? redirrect to '/cart'
15. else rerender(CartScreen);

19. connect to mongoDB and create admin user
  1. npm install mongoose
  2. connect to mongoDB
  3. create config.js
  4. npm install dotenv
  5. export PORT and MONGODB_URL
  6. create models/useModel.js
  7. create userSchema and userModel
  8. create userRoute
  9. create createadmin route
  
  20. Sign-in screen UI
   2. create SigninScreen
   3. render email and password fields
   4. style signin form 


  21. sign in screen backend 
    3. create signin api in backend
    4. create route for /api/user/signin
    5. create check username and password
    6. if it is not ok the return 401 error
    7. install express-async-Handler
    8. wrap it in expressAsyncHandler
    9. add error middleware in server.js
    10. install postman
    11. send post request
    12. test with invalid user password
    13. otherwise generate token
    14. install jsonwebtoken
    15. set config.JTW_SECRET to somethingsecret
    16. add generateToken to utils.js
    17. return token
    18. test with correct user and password

   22. Sign-in screen action
     1. after_render handle form sunbmit. 
     2. create signin request in frontend
     3. show alert if email or password is incorrect
     4. add getUserInfo and subUserInfo to localStorage
    5. Create header component
    6. if userInfo.email exist show username otherwise show sigin

   23. Create  progress Indicator and alert component
     1. create overlay loading
     2. style overlay loading
     3. create showLoading() function
     4. set loading-overlay classList add active
     5. create hiddenLoading() function
     6. create overlay message div in index.html
     7. add style overlay message
     8. create showMessage(message, callback)
     9. document message-overlay set innerHTML
     10. div > div id message-overlay-content
     11. show message
     12. button id message-overlay-close-button OK
     13. add class active to it 
     14.  addEventListener for button to callback

      24.  Create Header Component
      1. update index.html 
      2. add header render and after render to router function 
      3. show header menu based on user logged in or not 

      255. Register screen action
        1. after_render handle form submit
        2. create register request in frontend 
        3. create reqister api in backend
        
        25. User profile screen
         1. create profileScreen.js
         2. add form elements
         3. after_render handle form submit
         4. create profile update request in frontend
         5. Create profile update api in backend
         6. create isAuth in utils.js and use in update profile
         7. implement sign out 

        26. create checkout wizard header component 
         1. create CheckOutSteps.js
         2. create div element for steps 1 to 4
         3. create redirectUser() in utils.js
         4. copy profile screen and as shipping screen 
         5. use CheckOutStep
         6. define getPayment and setPayment
         7. copy shipping screen and as setPayment screen
         8. define getPayment and setPayment
         9. redirect user to placeOrder.js
         

       27. Shipping Screen
         1. create shippingScreen.js
         2. style element  

         28. payment screen
          1. create paymentScreen.js
          2. style elements
          3. handle form submit

          30. placeOrder screen UI
           1. create placeOrder.js
           2. style elements

           31. placeOrder screen action
            1. handle form submit 
            2. create backend api to create order
          
          32. order Screen 
           1. create orderScreen.js
           2. create backend api to create order

          33. Paypal Payment
           1. get client id from PayPal
           2. set it in .env file 
           3. create route from /api/paypal/clientId
           4. create getPaypalClientID in api.js
           5. add paypal checkout script in OrderScreen.js
           6. show paypal button
           7. update order after payment
           8. create payOrder in api.js 
           9. create route for /:id/pay in orderRouter.js
           10. rerender after pay order

          34. Display Customer Orders
           1. create order history api 
           2. create api for getMyOrders
           3. show order in profile Screen
           4. style orders

          35. Admin Dashboard UI
           1. Headers.js 
           2. if user is admin show dashboard 
           3. create DashboardScreen
           4. create DashboardMenu
           5. Style dashboard
          36. Admin products UI
           1. Create ProductListScreen.js
           2. show product with edit and delete button
           3. show create product button
           
          37. Create Product 
           1. create product model 
           2. implement create product route
           3. create product function in api.js
           4. call create product function in ProductListScreen
           5. redirect user to edit product Screen
          38. Edit Product
           1. create ProductEditScreen.js 
           2. load product data from backend       
           3. handle form submit     
           4. save product in backend 

          39. Delete Product
           1. update ProductListScreen
           2. handle delete button
           3. rerender after deletion  
          
          40. Upload Product image
           1. npm install multer 
           2. create router/uploadRoute.js  
           3. import express and multer  
           4. create disk storage with Date.now().jpg as filename
           5. set upload as multer({storage})
           6. router.post('/', upload.sengle('image))
           7. return req.file.path
           8. app.use('/api/uploads', uploadRoute) in server.js
           9. create uploads folder and put empty file.txt there.
           10. ProductEditScreen.js
           11. create file input and set id to image-file
           12. after_render() handle imag-file change
           13. create form data
           14. call uploadProductImage()
           16. create uploadProductImage in api.js 
           16. update server.js

          41. Build project
           1. create build script for frontend
           2. create build script for backend
           3. update server.js to serve frontend build folder and uploads

          42. Delete Product
           1. update delete button
           2. handle delete button
           3. rerender after deletion

          44. Admin Orders
           1. create Admin Order menu in headers 
           2. create AdminOrder.js 
           3. load orders from backend
           4. list them in the screen 
           5. show delete and edit button
           6. redirect to order details on edit action

          45. Show summary Report in Dashboard 
           1. create summary section 
           2. style summary
           3. create summary backend 
           4. create summary in api.js 
           5. load data in dashboard screen 
           6. show 3 boxes for Users, Orders, and Sales

        46. Show Chart in Dashboard
         1. import chartlist     
         2. add chartlist css to index.html 
         3. create linear chart for product categories  
          
