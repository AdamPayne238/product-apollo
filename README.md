
# Setup

## Step 1
cd into 'product-app' folder and run 'yarn' to install project dependencies

## Step 2
run 'yarn start' in 'product-app' folder to start up the application

## Step 3
navigate to 'http://localhost:3000/products' in your browser (if your IDE doesnt automatically)

## Info
Clicking on any of the products listed will route you to /products/:id/details
If the product has inventory you will be able to click a purchase button
Clicking the purchase button will route you to forms that will complete your purchase
Submit buttons on each form will conditionally render so make sure you are using numbers for phone number, zipcodes, and quantity. Product code should automatically fill that specific input.
I added a simple home link before and after the forms for convenience in routing back to the product list

