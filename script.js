// Create Product Objects
const products = [
    {name: "Laptop", price: 1200, inStock: true, discount: 10},
    {name: "Phone", price: 800, inStock: false, discount: 5},
    {name: "Headphones", price: 150, inStock: true, discount: 20},
    {name: "Mouse", price: 50, inStock: true, discount: 0},
];

// Get Product Name From User Via Prompt
let userInput = prompt("Enter the product name:");

// Finding Product
let product = products.find(item => item.name.toLowerCase() === userInput.toLowerCase());

if(product) {
    console.log("Product Found:", product.name);
    console.log("Original Price:", product.price);
    console.log("Discount:", product.discount + "%");

    // Calculate after Counting Discount
    let finalPrice = product.price - (product.price * product.discount / 100);
    console.log("Final Price:", finalPrice);

}