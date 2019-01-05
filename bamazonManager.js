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
        message: 'Hello Manager, What would you like to do today?',
        choices: ['1.) View Products for sale', '2.) View low inventory', '3.) Add to inventory', '4.) Add new product']
    }])
        .then(function (manager) {
            if (manager.input === '1.) View Products for sale') {
                var table = new Table({
                    head: ["Item ID", "Current Product for Sale", "Retail Price", "Stock Remaining"],
                    colWidths: [10, 60, 20, 20],
                })

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
                        console.log("");

                    }
                })
            }
        })
}

