const github_api="https://api.github.com/users/akshaymarch7"
const users=fetch(github_api)
console.log(users);
console.log("Connected successs")
users.then((data)=>console.log(data))
// inititally promise is pending state
//spatial object in js 

//three states - pending,fulfilled,rejected
/*
//what is promise??
  **promise object as a placeholder for a certain period of time until we receive  a value from there asycchronous operation 
  ** its container for the future value
  **MDN LOL - A promise is an object representing the eventual completion or failure of an asynchronous operation.
*/
//promise disadvantages - callback hell or pyramid of doom