# BAMAZON

Bamazon is an Amazon-like storefront app that will take in orders from customers and deplete stock from the store's inventory which is stored in MySql database. The app is also programmed to track products that is low in stock. Manager of the store can restock quantity and add new products. Finally the app can track sales across the store's departments and then provide a summary of the highest-grossing departments in the store.


### What BAMAZON Can Do

#### Bamazon Customer function:

If BAMAZON takes the command or you type in the terminal below:
`node bamazonCustomer.js`

 * This will output the following information to your terminal/bash window:
      ```
       * Welcome to Bamazon! Would you like to view our current products fo sale?    
      ```
If the user typed in "YES", the following information will output to your terminal/bash window:

 ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonCustomer_1.PNG)

After the products has been displayed. 
  * It will then prompt the user to the following question:
      ```
       * Would you like to purchase an item?    
      ```
  * If the user typed in "NO", it will give an output:
      ```
       *"Thank you! Come back soon!"
      ```
  * And then the Bamazon App will automatically go back to start where it says:
      ```
       * Welcome to Bamazon! Would you like to view our current products fo sale?    
      ```

  * Yet if the user typed in "YES" this will output the following prompts to your terminal/bash window:
      ```
       * Please Enter the item Id number of the product you would like to purchase?    
      ``` 
      and also
      ```
       * How many units of this item would you like to purchase?    
      ```
If the user input a unit number that is "MORE THAN" what the database or the stock quantity of the store:

  * The following information will output to your terminal/bash window:

![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonCustomer_2.PNG)

  * And then the Bamazon App will automatically go back to start where it says:
      ```
       * Welcome to Bamazon! Would you like to view our current products fo sale?    
      ```

If the user input a unit number that is "LESS THAN" or "EQUAL" what the database or the stock quantity of the store, 
  * It will then prompt the user to a confirmation question:
      ```
       * Are you sure you would like to purchase this item and quantity?    
      ```
If the user answer is "YES", it will complete the order and will give a message:
      ```
       * Transaction completed. Thanks Alot! Come Again Soon.    
      ```
  * The following information will output to your terminal/bash window:

  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonCustomer_4.PNG)

  * And then the Bamazon App will automatically go back to start where it says:
      ```
       * Welcome to Bamazon! Would you like to view our current products fo sale?    
      ```


  * To verify that the app is working and communicating to the MySQL database, see the images below:
      ```
       * "BEFORE" the order was completed the stock quantity on the MYSQL database were "8" in total 
       as you can see on the image below:  
      ```
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonCustomer_4_database.PNG)

  * To verify that the app is working and communicating to the MySQL database, see the images below:
      ```
       * "AFTER" the order was completed the stock quantity on the MYSQL database is "1" in total 
       as you can see on the image below:  
      ``` 
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonCustomer_4_database_minus.PNG)


#### Bamazon Manager function:

If BAMAZON takes the command or you type in the terminal below:
`node bamazonManager.js`

 * This will output the following information to your terminal/bash window:
      ```
       * Hello Manager! What would you like to do today?    
      ```
      then it will prompt the manager to 4 selection:
      ```
       * 1.) View Products for sale
       * 2.) View low inventory 
       * 3.) Add to inventory
       * 4.) Add new product    
      ```
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_selections_01.PNG)      

If the manager made the "1st" selection "View Products for sale", 
the following information will output to your terminal/bash window:

  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_viewProductsForSale_02.PNG)

 * And then the Bamazon App will automatically go back to prompt where it says:
 
      ```
       * Would you like to perform another transaction?    
      ```
If the manager Typed in "YES" and made the "2nd" selection "View low inventory", 
any item which is "3" in quantity or below, 
the following information will output to your terminal/bash window:

  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_viewLowInventory_03.PNG)

 * To verify that the app is working and communicating to the MySQL database, 
   compare the two images, the image UP and the image BELOW:
      ```
       * "Item ID: 3
        "OFFICE 365 HOME & BUSINESS" 
        STOCK REMAINING: are BOTH "0" on BOTH Images. 
      ``` 
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_database_lowInventory_04.PNG)    


 * And then the Bamazon App will automatically go back to prompt where it says:
      ```
       * Would you like to perform another transaction?    
      ```  
If the manager Typed in "YES" and made the "3rd" selection "Add to inventory", 
the following information will output to your terminal/bash window:

  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_addMoreToInventory_05.PNG)

  * Bamazon App will automatically prompt the manager to two additional questions where it says:
      ```
       * What is the item id of the product you would like to restock?
      ```
      The manager can now choose whichever "Item ID" number in the "LOW INVENTORY TABLE",
      Then After choosing, the manager can now answer the second prompt:
       ```
       * How many quantity you would like to add?
      ```
      HE/SHE can now input whatever quantity to add to the selected item.

  * To verify that the app is working and communicating to the MySQL database, 
    compare the two My SQL images, the image UP and the image BELOW.
      
      BEFORE:
      ```
       * "Item ID: 3
        "OFFICE 365 HOME & BUSINESS" 
        Stock Quantity: 0  
      ```
      AFTER:
      ```
       * "Item ID: 3
        "OFFICE 365 HOME & BUSINESS" 
        Stock Quantity: 5  
      ```     
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_database_lowInventory_Added_06.PNG)

If the manager wants to check if the item did actually restock, 
and made the "2nd" selection again, the "View low Inventory". 
The image BELOW shows that the item Restocked is now "GONE" 
from the "BAMAZON LOW PRODUCT INVENTORY TABLE".

  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_addMoreToInventory_confirmed_07.PNG)

  * And then the Bamazon App will automatically go back to prompt where it says:
      ```
       * Would you like to perform another transaction?    
      ```  
If the manager Typed in "YES" and made the "4th" selection "Add new product", 
the following information will output to your terminal/bash window:

  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_addNewProductToInventory_08.PNG)

  * And then the Bamazon App will automatically prompt the manager four qustions where it says:
 
      ```
       * What is the name and the descriptions of product you would like to stock?
       * Which department this product belongs to?
       * What is the retail price of this product?
       * How many quantity you would like to add?
      ```
After all the inputs the manager's made. 
Bamazon app will prompt a message:
      ```
       * Thank you! New Product has been Added!    
      ```  
We can verify that everything works fine by looking at the two images below:
  
  * this first image below shows we only have a total of "10" product_name
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_database_addNewProduct_9.PNG)
  
  * this second image below shows we have now a total of "11" product_name 
    after the function has been fulfilled.
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_database_newProductAdded_Added_10.PNG) 



  * Bamazon App will automatically go back to prompt where it says:
      ```
       * Would you like to perform another transaction?    
      ```  
If the manager type in "NO", Bamazon app will print the following to your terminal/bash window:
      ```
       * Thank You So Much! Wishing You A Wonderful Day!    
      ```  
  ![Image](https://github.com/DKMS37/Bamazon/blob/master/images/bamazonManager_selections_NO_11.PNG) 
    





## Instructions on how to make Bamazon App

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

- - -

### Challenge #2: Manager View (Next Level)

* Create a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

- - -

* If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.

- - -

### Challenge #3: Supervisor View (Final Level)

1. Create a new MySQL table called `departments`. Your table should include the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column, and modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.

   * Make sure your app still updates the inventory listed in the `products` column.

3. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

   * View Product Sales by Department
   
   * Create New Department

4. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

5. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into aliases in MySQL.

   * Hint: You may need to look into GROUP BYs.

   * Hint: You may need to look into JOINS.

   * **HINT**: There may be an NPM package that can log the table to the console. What is it? Good question :)


### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md is required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

