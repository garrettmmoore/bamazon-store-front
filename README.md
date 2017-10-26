# Bamazon Store Front
### By Garrett Moore

# Application
Hello, welcome to Bamazon! This CLI (Command-line-interface) program acts as an online store-front that allows the user (customer) to purchase items from Bamazon's database. The app takes in orders from customers and depletes stock from the store's inventory.

# Built With
Bamazon is built using node.js and MySQL. The application is purely backend and uses a MySQL database.

Node Packages Used: inquirer, mysql, colors

# Getting Started

## Installation
1. Download the appropriate npm packages by running npm install.
2. Create a MySQL database and use the bamazon.sql seeds to create tables with usable data.
2. Make sure you enter your database name and database password in the bamazonCustomer.js and bamazonManager.js files.

## Customer Mode

### Step 1
1. Begin Customer Mode by running the following command in the terminal/commandprompt:

```
node bamazonCustomer.js
```

2. In Customer Mode, a user has the ability to view the store's inventory and purchase items.

### Step 2
1. Select whether or not you want to view the store's inventory.
    1. Make sure you use the arrow keys and then space bar, then enter to select your choice.

    ![initial-selection](/images/initial-selection.png)

### Step 3
1. You will then see an object with Bamazon's inventory. Look for the item_id.
2. You can also check to make sure the object matches up to the information from your database table using a GUI of your choice such as MySQLWorkbench.

![initial-table](/images/initial-table.png)

1. Enter the item_id as a number(ex. 6) when prompted.
2. Enter the quantity of the item you want to buy as a number(ex. 100).

![view-inventory](/images/view-inventory.png)

### Step 4
1. If the item is in stock, you will see a message notifying you that the item is in stock.
    1. Select yes if you would like to proceed with the purchase.

    ![purchase](/images/purchase.png)

2. Note that this purchase is reflected in our database table. Here, the stock-quantity decreased.

![updated-table](/images/updated-table.png)

3. If the item is not in stock, you will be notified and asked if you want to continue shopping.

![no-stock](/images/no-stock.png)

### Step 5
1. After you've made your purchase, you will be notified how much you spent.
2. You will then be asked if you would like to make another purchase.

![completed-purchase](/images/completed-purchase.png)

3. Select yes to be redirected to Bamazon's inventory.

## Manager Mode

### Step 1
1. Begin Manager Mode by running the following command in the terminal/commandprompt:

```
node bamazonManager.js
```

2. In Manager Mode, a user has the ability to do the following:

![manager-choices](/images/manager-choices.png)

### Step 2 View Products For Sale
1. Selecting this will list every available item: the item IDs, names, prices, and quantities.

### Step 3 View Low Inventory
1. Selecting this will display all items with an inventory count lower than five.

### Step 4 Add to Inventory
1. Selecting this will allow the user to add stock to any item that currently exists in the store's inventory.
2. The user will then be prompted to answer the following questions:

![manager-add-inventory](/images/manager-add-inventory.png)

### Step 5 Add New Product
1. Selecting this will allow the user to add an entirely new product to the store's inventory.
2. The user will then be prompted to answer the following questions:

![manager-add-product](/images/manager-add-product.png)

## End
Thank you for using Bamazon Store Front! Please contact me directly if you have any questions.

https://github.com/garrettmmoore
