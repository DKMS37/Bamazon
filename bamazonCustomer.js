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
            console.log(chalk.blue("================================ ") + chalk.yellowBright("CURRENT BAMAZON PRODUCTS FOR SALE") + chalk.blue(" ====================================="));
            console.log("");
            console.log(chalk.greenBright(table.toString()));
            console.log("");
            // connection.end();
            continuePrompt();
        });
    }
}

//=================================  buyer Purchase  ===============================
function continuePrompt() {
    inquirer.prompt([{
        type: "confirm",
        name: "continue",
        message: "Would you like to purchase an item?",
        default: true
    }])
        .then(function (buyer) {
            if (buyer.continue === true) {
                selectionPrompt();
            } else {
                console.log("");
                console.log(chalk.blueBright("==================================================="));
                console.log(chalk.magentaBright("=========== ") + chalk.yellowBright("Thank you! Come back soon!") + chalk.magenta(" ============"));
                console.log(chalk.greenBright("==================================================="));
                console.log("");
                console.log("");
                console.log("");
                start();
            }
            // connection.end();
        });
}

//=================================  Item selection and Quantity desired  ===============================
function selectionPrompt() {
    inquirer.prompt([{
        type: "input",
        name: "inputId",
        message: "Please enter the item ID number of the Product you would like to purchase.",
    },
    {
        type: "input",
        name: "inputNumber",
        message: "How many units of this item would you like to purchase?",
    }
    ])
        .then(function (buyerPurchase) {
            //connect to database to find stock_quantity in database. If buyer quantity input is greater than stock, decline purchase.
            connection.query("SELECT * FROM products WHERE item_id=?", buyerPurchase.inputId, function (err, results) {
                for (var i = 0; i < results.length; i++) {

                    if (buyerPurchase.inputNumber > results[i].stock_quantity) {
                        console.log("");
                        console.log(chalk.magentaBright("====================================================="));
                        console.log(chalk.redBright("Sorry! Not enough in stock. ") + chalk.greenBright(" Please try again later."));
                        console.log(chalk.magentaBright("====================================================="));
                        console.log("");
                        console.log("");
                        console.log("");
                        start();

                    } else {
                        //list item information for buyer for confirm prompt
                        console.log("");
                        console.log(chalk.blueBright("==================================================="));
                        console.log(chalk.yellowBright("Great News!!! ") + chalk.greenBright("We can fulfill your order right away."));
                        console.log(chalk.blueBright("==================================================="));
                        console.log(chalk.magenta("You have selected:"));
                        console.log(chalk.yellowBright("------------------"));
                        console.log(chalk.red("Item: ") + chalk.green(results[i].product_name));
                        console.log(chalk.red("Department: ") + chalk.green(results[i].department_name));
                        console.log(chalk.red("Price: ") + chalk.green(results[i].price));
                        console.log(chalk.red("Quantity: ") + chalk.green(buyerPurchase.inputNumber));
                        console.log(chalk.yellowBright("------------------"));
                        console.log(chalk.cyanBright("Total: ") + chalk.magenta(results[i].price * buyerPurchase.inputNumber));
                        console.log(chalk.yellowBright("------------------"));
                        console.log("");
                        var newStock = (results[i].stock_quantity - buyerPurchase.inputNumber);
                        var purchaseId = (buyerPurchase.inputId);
                        confirmPrompt(newStock, purchaseId);
                        connection.end();
                    }
                }
            });
        });
}