CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR (45) NOT NULL,
price DECIMAL (10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)

);

DESCRIBE products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Studio 3 Wireless Headphone - Red", "Electronics", 279.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordan Retro 1 T-shirt - White", "Clothing", 34.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Office 365 Home & Business", "Software", 79.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Windows 10 Pro", "Software", 188.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Supreme Box Logo T-shirt - Black", "Clothing", 99.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose Soundlink Bluetooth Speaker - Black", "Electronics", 108.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dyson Cordless Automatic Vacuum - Silver", "Appliances", 59.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Egift Cards", "Giftcards", 50.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Mug Warmer for Office/Home use - Black", "Appliances", 9.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Gift Cards - Print at Home", "Giftcards", 50.00, 10);


SELECT * FROM products;