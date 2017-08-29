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
            message: "Please choose from the following options:".blue.bold,
            choices: ["View Products For Sale", "View Low Inventory", "Add to inventory", "Add New Product"]
        },
    ])
    .then(function(answer) 
    {
        if (answer.initialize == "View Products For Sale") 
        {
            viewProducts();
        }
        else if(answer.initialize == "View Low Inventory")
        {
            viewLowInventory();
        }
        else if(answer.initialize == "Add to inventory")
        {
            addInventory();
        }
        else if(answer.initialize == "Add New Product")
        {
            addProduct();
        }
        else
        {
            console.log("oops!")
        }
    });
}

function viewProducts()
{
    console.log("\nHere is a list of our current inventory:".blue.bgWhite.bold.underline);
    connection.query("SELECT * FROM products", function(err, res) 
    {
        if (err) 
        {
            console.log(err);
            return;
        }
        console.log(res);
        afterConnection();
    });
};

function viewLowInventory()
{
    console.log("\nHere is a list of our inventory with less than 5 units:".blue.bgWhite.bold.underline);
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) 
    {
        if (err) 
        {
            console.log(err);
            return;
        }
        console.log(res);
        // start();
    });
};

function addInventory() 
{
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "\nPlease enter the ID for the product you want to add inventory to? (number): ".blue.bold
        },
        {
            type: "input",
            name: "stock",
            message: "\nPlease enter how much of the product you would like to add? (number): ".blue.bold
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
            addInventory();
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

        if(res[0].stock_quantity > 6000)
        {
            console.log("That is too much stock".red.bold);
        }
        else
        {
            console.log(res);
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: res[0].stock_quantity + stock
                    },
                    {
                        item_id: id
                    }
                ],
                function(err)
                {
                    console.log(res[0]);
                    console.log("\nYour inventory has been updated!\n".green.bold);
                    
                    replay();
                    
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

function addProduct(){
    
    inquirer.prompt([
        {
            type: "input",
            name: "insertName",
            message: "\nPlease enter the NAME for the product you want to add inventory to? (string): ".blue.bold
        },
        {
            type: "input",
            name: "insertDepartment",
            message: "\nPlease enter the DEPARTMENT of the product you would like to add? (string): ".blue.bold
        },
        {
            type: "input",
            name: "insertPrice",
            message: "\nPlease enter the PRICE of the product you would like to add? (Decimal): ".blue.bold
        },
        {
            type: "input",
            name: "insertQuantity",
            message: "\nPlease enter the QUANTITY of the product you would like to add? (Integer): ".blue.bold
        },
    ])
    .then(function(answer) 
    {
        // var insertName = answer.insertName;
        // var insertDepartment = answer.insertDepartment;
        // var insertPrice = answer.insertPrice;
        // var insertQuantity = answer.insertQuantity;

        // var sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?";
        var values = 
        
        connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?",
            [
                {
                    product_name: answer.insertName
                },
                {
                    department_name: answer.insertDepartment
                },
                {
                    price: answer.insertPrice
                },
                {
                    stock_quantity: answer.insertQuantity
                }
            ],
            function (err) {
            if (err) throw err;
            console.log("1 record inserted, ID: " + res.insertId);
          });
    });
}



function replay()
{
    inquirer.prompt([
        {
            type: "checkbox",
            name: "initialize",
            message: "\nWould you like to return to the main menu?".blue.bold,
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