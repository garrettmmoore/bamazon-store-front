//Installing npm packages
var mysql = require("mysql");
var inquirer = require('inquirer');
var colors = require('colors');

// create the connection information for the sql database
var connection = mysql.createConnection
({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) 
{
    if (err) 
    {
        console.log(err);
        return;
    }
    console.log("\nWelcome to Bamazon!\n".america.bold.underline);
    afterConnection();
});

function afterConnection() 
{
    inquirer.prompt([
        {
            type: "checkbox",
            name: "initialize",
            message: "Would you like to view our store's inventory?".blue.bold,
            choices: ["Yes", "No"]
        },
    ])
    .then(function(answer) 
    {
        if (answer.initialize == "Yes") 
        {   console.log("\nHere is a list of our current inventory:".blue.bgWhite.bold.underline);
            connection.query("SELECT item_id, product_name, price FROM products", function(err, res) 
            {
                if (err) 
                {
                    console.log(err);
                    return;
                }
                console.log(res);
                start();
            });
        }
        else 
        {
            console.log("Thanks for stopping by Bamazon!".blue.bold);
            process.exit();
        } 
    });
}

function start() 
{
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "\nPlease enter the ID for the product you want to buy? (number): ".blue.bold
        },
        {
            type: "input",
            name: "stock",
            message: "\nPlease enter how much of the product you would like to buy? (number): ".blue.bold
        },
    ])
    .then(function(answer) 
    {
        if (Number.isInteger(parseInt(answer.id)) && Number.isInteger(parseInt(answer.stock))) 
        {   
            quantity(answer.id, answer.stock);
        }
        else 
        {
            console.log("\nInvalid input. Please enter a number.".red.bold);
            start();
        } 
    });
}

function quantity(id, stock) 
{
    connection.query("SELECT * FROM products WHERE ?",
    {
        item_id: id
    },
    function(err, res) 
    {
        if (err) 
        {
            console.log(err);
            return;
        }

        if(res[0].stock_quantity < stock)
        {
            console.log("Out of stock".red.bold);
        }
        else
        {
            console.log(res);
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: res[0].stock_quantity - stock
                    },
                    {
                        item_id: id
                    }
                ],
                function(err)
                {
                    console.log(res[0]);
                    inquirer.prompt([
                        {
                            type: "checkbox",
                            name: "initialize",
                            message: "\nGood news, your item is in stock!\n".green.bold + 
                            "\nWould you like to purchase this item(s)?".blue.bold,
                            choices: ["Yes", "No"]
                        },
                    ])
                    .then(function(answer) 
                    {
                        if (answer.initialize == "Yes") 
                        {  
                            console.log("\nThank you for your purchase!!".green.bold);
                            console.log("\nThe price of the item is:".blue.underline + " $" +res[0].price);                   
                            console.log("\nYour total cost is:".blue.underline + " $" + Math.round(res[0].price * 100) / 100 * stock);
                            replay();
                        }
                        else 
                        {
                            replay();
                        } 
                    });
                    if (err) 
                    {
                        console.log(err);
                        return;
                    }
                }
            );
        }
    }
)}

function replay()
{
    inquirer.prompt([
        {
            type: "checkbox",
            name: "initialize",
            message: "\nWould you like to continue shopping?".blue.bold,
            choices: ["Yes", "No"]
        },
    ])
    .then(function(answer) 
    {
        if (answer.initialize == "Yes") 
        {   
            afterConnection();
        }
        else 
        {
            console.log("Ok, thank you for stopping by Bamazon!".blue.bold);
            console.log("Bamazon".america.bold);
            process.exit()
        } 
    });
}