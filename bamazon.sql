USE bamazon_DB;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,3) NULL,
    stock_quantity INTEGER(10) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Legend of Zelda: Breath of the Wild", "Video Games", 59.99, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose QuietComfort 35", "Headphones ", 349.00, 4000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPad Pro", "Tablet", 839.99, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ASUS Portable Monitor", "Monitors",154.64, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Fire Stick", "Networking",39.99, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Chromebook Plus", "Tablets", 425.99, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LG 5K Monitor", "Monitors", 949.99, 3500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adobe Photoshop Elements", "Software", 59.99, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Video Games", 376.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Splatoon 2", "Video Games", 58.95, 1000);


