//תרגיל 9 -----
const product = {
id: 1,
name: "Laptop",
price: 999,
inStock: true
};

const getProductSummary = (prod) => `${prod.name} - ${prod.price} NIS`;
const getAvailability = (prod) => prod.inStock? "Available" : "Not Available";

const summary = getProductSummary(product);
const availability = getAvailability(product);
console.log(summary);
console.log(availability);

// תרגיל 10
const categories = ["Electronics","Fashion","Books","Home"];

console.log(categories[0]);
console.log(categories[categories.length-1]);

const isThere = categories.includes("Books")? "exists" : "doesn't exist";
console.log(isThere);

console.log(categories.indexOf("Fashion"));
console.log(categories.indexOf("Sports"));

categories.push("Sports");
const category = categories.pop();
console.log(category);

categories.splice(1,1, "Games");

// push, pop, splice

// תרגיל 11

const stockAmounts = [4, 0, 7, 3, 0];

const calculateTotalStocks = (array) => {
    let total = 0;
    for (const stock of array)
        total+=stock;
    return total;
}

const countOutOfStock = (array) => {
    let count = 0; 
    for (const stock of array)
        if (stock === 0)
            count++;
    return count;
}

const total = calculateTotalStocks(stockAmounts);
const outOfStock = countOutOfStock(stockAmounts);

//תרגיל 12 --------
const user = {
    id: 1,
    firstName: "Dana",
    lastName: "Levi",
    age: 17
};

console.log(user.firstName);
console.log(user.age);
user.age = 18;
user.email = "danalevi@gmail.com";

console.log(`id: ${user.id}, full name: ${user.firstName} ${user.lastName}, age: ${user.age}, email adress: ${user.email}`);

//תרגיל 13--------
const post = {
    id:101,
    content: "JavaScript practice day",
    author: {
        id: 7,
        name: "Noa",
        username: "@noa_dev"
    },
    comments: [
        { id: 1, user: "@amit", text: "Good luck!"},
        { id: 2, user: "@lior", text: "Nice post"}
    ]
};

console.log(post.author.name);
console.log(post.author.username);

console.log(post.comments[0].text);

console.log(`${post.comments.length} comments`);

post.comments.push({id: 3, user: "@mika", text: "WOW!!!!"});

//תרגיל 14
const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
    { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
    {id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true }
];

for (const i of products)
    console.log(`id: ${i.id} name: ${i.name} price: ${i.price} NIS`);

const countAvailableProducts = (products) =>
{
    let counter = 0;
    for (i of products)
        if (i.inStock)
            counter++;
    return counter;
}

const getProductNameById = (products, id) =>
{
    for (i of products)
        if (i.id === id)
            return i.name;
    return "Product Not Found";
}

console.log (getProductNameById(products, 3));
console.log (getProductNameById(products, 99));
