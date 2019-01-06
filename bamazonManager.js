var mysql = require("mySQL");
var inquirer = require("inquirer");
var Table = require("cli-table");
var chalk = require("chalk");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    //   connection.end();
});

//=================================  Start  ===============================
function start() {
    inquirer.prompt([{
        type: 'list',
        name: 'input',
        message: 'Hello Manager! What would you like to do today?',
        choices: ['1.) View Products for sale', '2.) View low inventory', '3.) Add to inventory', '4.) Add new product']
    }])
        .then(function (manager) {
            if (manager.input === '1.) View Products for sale') {
                var table = new Table({
                    head: ["Item ID", "Current Product for Sale", "Retail Price", "Stock Remaining"],
                    colWidths: [10, 60, 20, 20],
                });

                listInventory();
                //================================= List Product Inventory  ===============================
                function listInventory() {
                    //Variable creation from DB connection
                    connection.query("SELECT * FROM products", function (err, results) {
                        for (var i = 0; i < results.length; i++) {

                            var itemId = results[i].item_id,
                                productName = results[i].product_name,
                                price = results[i].price,
                                stockQuantity = results[i].stock_quantity;

                            table.push(
                                [itemId, productName, price, stockQuantity]
                            );
                        }
                        console.log("");
                        console.log(chalk.blue("==================================== ") + chalk.yellowBright("CURRENT BAMAZON PRODUCT INVENTORIES") + chalk.blue(" ========================================="));
                        console.log("");
                        console.log(chalk.greenBright(table.toString()));
                        console.log("");
                        console.log("");
                        console.log("");
                        newTransaction();
                        // connection.end();
                    });
                }
            }
            else if (manager.input === '2.) View low inventory') {
                var table = new Table({
                    head: ["Item ID", "Current Product for Sale", "Stock Remaining"],
                    colWidths: [10, 60, 20],
                });
                listlowInventory();
                //================================= List Low Inventory  ===============================
                function listlowInventory() {
                    //Variable creation from DB connection
                    connection.query("SELECT * FROM products WHERE stock_quantity <= 3", function (err, results) {
                        for (var i = 0; i < results.length; i++) {

                            var itemId = results[i].item_id,
                                productName = results[i].product_name,
                                stockQuantity = results[i].stock_quantity;

                            table.push(
                                [itemId, productName, stockQuantity]
                            );
                        }
                        console.log("");
                        console.log(chalk.blue("============================ ") + chalk.yellowBright("BAMAZON LOW PRODUCT INVENTORIES") + chalk.blue(" ================================="));
                        console.log("");
                        console.log(chalk.greenBright(table.toString()));
                        console.log("");
                        console.log("");
                        console.log("");
                        newTransaction();
                        // connection.end();
                    });
                }
            }
            else if (manager.input === '3.) Add to inventory') {
                inquirer.prompt([{
                    name: "ID",
                    type: "input",
                    message: "What is the item id of the product you would like to restock?"
                }, {
                    name: "Quantity",
                    type: "input",
                    message: "How many quantity you would like to add?"
                },
                    //=================================  Add More Quantity to Low Product Inventory  ===============================               
                ]).then(function (answers) {
                    var quantityAdded = answers.Quantity;
                    var IDOfProduct = answers.ID;
                    restockInventory(IDOfProduct, quantityAdded)
                    function restockInventory() {
                        connection.query("SELECT * FROM products WHERE item_id = ?", [answers.ID]),
                            connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [answers.Quantity, answers.ID], function (err, res) {
                                if (err) { console.log(err) };
                                console.log("");
                                console.log(chalk.blueBright("=================================================="));
                                console.log(chalk.yellowBright("=== ") + chalk.magenta("Thank you! ") + chalk.greenBright("Product Quantity has been Added!") + chalk.yellowBright(" ==="));
                                console.log(chalk.blueBright("=================================================="));
                                console.log("");
                                console.log("");
                                console.log("");
                                newTransaction();

                            });
                    }
                });
            }
            else if (manager.input === '4.) Add new product') {
                inquirer.prompt([{
                    name: "Name",
                    type: "input",
                    message: "What is the name and the descriptions of product you would like to stock?"
                }, {
                    name: "Department",
                    type: "input",
                    message: "Which department this product belongs to?"
                }, {
                    name: "Price",
                    type: "input",
                    message: "What is the retail price of this product?"
                }, {
                    name: "Quantity",
                    type: "input",
                    message: "How many quantity you would like to add?"
                },
                    //================================= Add New Product to Inventory  ===============================                
                ]).then(function (answers) {
                    var name = answers.Name;
                    var Department = answers.Department;
                    var price = answers.Price;
                    var quantity = answers.Quantity;
                    buildNewItem(name, Department, price, quantity)
                    function buildNewItem() {
                        connection.query('INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("' + answers.Name + '","' + answers.Department + '","' + answers.Price + '","' + answers.Quantity + '")',
                            function (err, res) {
                                if (err) { console.log(err) }
                                console.log("");
                                console.log(chalk.blueBright("=================================================="));
                                console.log(chalk.yellowBright("=== ") + chalk.magenta("Thank you! ") + chalk.greenBright("New Product has been Added!") + chalk.yellowBright(" ==="));
                                console.log(chalk.blueBright("=================================================="));
                                console.log("");
                                console.log("");
                                console.log("");
                                newTransaction();
                            });
                    }
                });
            }
            //=================================  List Of Transactions to be Perform ===============================           
            function newTransaction() {
                inquirer.prompt([{
                    type: 'confirm',
                    name: 'choice',
                    message: 'Would you like to perform another transaction?'
                }]).then(function (answer) {
                    if (answer.choice) {
                        start();
                    }
                    else {
                        console.log(chalk.redBright("==============================================="));
                        console.log(chalk.greenBright("Thank You So Much! ") + chalk.yellowBright("Wishing You ") + chalk.blueBright("A Wonderful Day!"));
                        console.log(chalk.magentaBright("==============================================="));
                        console.log("");
                        console.log("");
                        console.log("");
                        connection.end();
                    }
                });
            }
        });
}