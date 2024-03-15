const cart = ["shoes", "pants", "t-shirts"];

// Function to create an order, which returns a promise
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (like making an order request to a server)
        setTimeout(() => {
            const orderId = generateOrderId(); // Assume this function generates a unique order ID
            resolve(orderId); // Resolving the promise with the orderId
        }, 1000); // Simulating a delay of 1 second
    });
}

// Callback function to proceed to payment
function proceedToPayment(orderId) {
    console.log("Order created with ID:", orderId);
    console.log("Proceeding to payment...");
    // Your payment logic would go here
}

// Using the createOrder function with promises
const promise = createOrder(cart);

// Example using promises
promise.then(orderId => {
    proceedToPayment(orderId);
});

console.log(promise);
// Simulating a function to generate a unique order ID
function generateOrderId() {
    return Math.floor(Math.random() * 1000); // Just a simple random number for demonstration
}

/*
// // Eg. Callback 
// a callback is a function that is passed as an argument to another function and is executed after a particular task is completed or an event occurs
function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

// Using the greet function with a callback
greet('Alice', sayGoodbye);
*/
