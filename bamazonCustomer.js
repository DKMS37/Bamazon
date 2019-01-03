var mysql = require("mysql");
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
        type: "confirm",
        name: "confirm",
        message: "Welcome to Bamazon! Would you like to view our current products for sale?",
        default: true
    }])
        .then(function (buyer) {
            if (buyer.confirm === true) {
                inventory();
            } else {
                console.log("");
                console.log(chalk.greenBright("==================================================="));
                console.log(chalk.blue('==========="Thank you! Come back soon!"============'));
                console.log(chalk.greenBright("==================================================="));
                console.log("");
                console.log("");
                console.log("");
                start();
            }
            // connection.end();
        });
}

//=================================  Inventory  ===============================
function inventory() {
    var table = new Table({
        head: ["Item ID", "Product for Sale", "Department", "Price"],
        colWidths: [10, 60, 20, 10],
    });

    listInventory();

    function listInventory() {
        //Variable creation from DB connection
        connection.query("SELECT * FROM products", function (err, results) {
            for (var i = 0; i < results.length; i++) {

                var itemId = results[i].item_id,
                    productName = results[i].product_name,
                    departmentName = results[i].department_name,
                    price = results[i].price;

                table.push(
                    [itemId, productName, departmentName, price]
                );
            }
            console.log("");
            console.log(chalk.blue("================================ CURRENT BAMAZON PRODUCTS FOR SALE ====================================="));
            console.log("");
            console.log(table.toString());
            console.log("");
            connection.end();
            // continuePrompt();
        });
    }
}