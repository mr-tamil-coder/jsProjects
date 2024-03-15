// const cart = ["a", "b", "c"];
// cart.map((item) => console.log(item));
// function createOrder(cart,function(cart){
//     console.log("i am first in createOrder");
// })
// createOrder(cart,call)

//What is callback function in js?? -chatgpt

function x() {
    console.log("i am in x function");
}
function y() {
    console.log("I am in Y function");
}
setTimeout(() => {
    a=1;
    console.log("a++");
}, 1000);
// Function to fetch data from a fake API
function fetchData(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            callback(null, data); // Pass null for error and data for success to the callback
        })
        .catch(error => {
            callback(error, null); // Pass error for failure and null for data to the callback
        });
}

// Callback function to process the fetched data
function processData(error, data) {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data fetched successfully:', data);
        // Here you can do further processing of the data
    }
}

// Call fetchData with the processData callback
fetchData(processData);
