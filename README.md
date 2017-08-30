# bamazon-store-front

# README for bamazonCustomer

#Application
Hello! Welcome to Bamazon! This program allows the user (customer) to purchase items from Bamazon's database
from the terminal/commandprompt.


## Installation
1. First things first. Download the appropriate npm packages by running npm install.
2. Make sure you enter your database password in the bamazonCustomer.js file!
3. Then, run the bamazonCustomer.js file in Terminal/Command Prompt.
4. ![npm-terminal](/images/npm-terminal.png)

## Step1
1. Select whether or not you want to view the store's inventory.
    1. Make sure you use the arrow keys and then space bar, then enter to select your choice.
    2. ![initial-selection](/images/initial-selection.png)

## Step2
1. You will then see an object with Bamazon's inventory. Look for the item_id.
2. You can also check to make sure the object matches up to the information from your database table using MySQLWorkbench.
    1. ![initial-table](/images/initial-table.png)
1. Enter the item_id as a number(ex. 6) when prompted.
2. Enter the quantity of the item you want to buy as a number(ex. 100).
3. ![view-inventory](/images/view-inventory.png)

## Step3
1. If the item is in stock, you will see a message notifying you that the item is in stock.
    1. Select yes if you would like to proceed with the purchase.
    2. ![purchase](/images/purchase.png)
2. Note that this purchase is reflected in our database table. Here, the stock-quantity decreased.
    1. ![updated-table](/images/purchase.png)
3. If the item is not in stock, you will be notified and asked if you want to continue shopping.
    1. ![no-stock](/images/no-stock.png)

## Step4
1. After you've made your purchase, you will be notified how much you spent.
2. You will then be asked if you would like to make another purchase.
    1. ![completed-purchase](/images/completed-purchase.png)
3. Select yes to be redirected to Bamazon's inventory.

## End
Thank you for using bamazon! Please contact me directly if you have any questions.
https://github.com/garrettmmoore
