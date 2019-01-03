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


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("beats studio 3 wireless headphone- red", "electronics", 279.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jordan retro 1 t-shirt- white", "clothing", 34.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("office 365 home & business", "software", 79.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("windows 10 pro", "software", 188.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("supreme box logo t-shirt- black", "clothing", 99.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bose soundlink micro bluetooth speaker- black", "electronics", 108.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("automatic vacuum air sealing system- silver", "appliances", 59.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bamazon egift cards", "gift cards", 50.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee mug warmer for office/home use- black", "appliances", 9.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bamazon gift cards- print at home", "gift cards", 50.00, 10);


SELECT * FROM products;