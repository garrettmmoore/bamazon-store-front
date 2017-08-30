# bamazon-store-front

# README for bamazonCustomer

#Application
Hello! Welcome to Bamazon! This program allows the user (customer) to purchase items from Bamazon's database
from the terminal/commandprompt.


## Installation
1. First things first. Download the appropriate npm packages by running npm install.
2. Make sure you enter your database password in the bamazonCustomer.js file!
3. Then, run the bamazonCustomer.js file in Terminal/Command Prompt.
![npm-terminal](/images/npm-terminal.png)

## Step 1
1. Select whether or not you want to view the store's inventory.
    1. Make sure you use the arrow keys and then space bar, then enter to select your choice.
    ![initial-selection](/images/initial-selection.png)

## Step 2
1. You will then see an object with Bamazon's inventory. Look for the item_id.
2. You can also check to make sure the object matches up to the information from your database table using MySQLWorkbench.

![initial-table](/images/initial-table.png)
1. Enter the item_id as a number(ex. 6) when prompted.
2. Enter the quantity of the item you want to buy as a number(ex. 100).
![view-inventory](/images/view-inventory.png)

## Step 3
1. If the item is in stock, you will see a message notifying you that the item is in stock.
    1. Select yes if you would like to proceed with the purchase.
    ![purchase](/images/purchase.png)
2. Note that this purchase is reflected in our database table. Here, the stock-quantity decreased.

![updated-table](/images/updated-table.png)

3. If the item is not in stock, you will be notified and asked if you want to continue shopping.
![no-stock](/images/no-stock.png)

## Step 4
1. After you've made your purchase, you will be notified how much you spent.
2. You will then be asked if you would like to make another purchase.
![completed-purchase](/images/completed-purchase.png)
3. Select yes to be redirected to Bamazon's inventory.

## End
Thank you for using bamazon! Please contact me directly if you have any questions.
https://github.com/garrettmmoore
