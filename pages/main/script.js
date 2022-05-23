
let newDiv = document.createElement("div"); // creates div
newDiv.className = 'topnav';

let homeTag = document.createElement("a"); //creates first "a" tag in div for home
homeTag.className = 'avtive';
homeTag.setAttribute('href', '../main/welcomePage.html');
let homeText = document.createTextNode("Home");
homeTag.appendChild(homeText);

newDiv.appendChild(homeTag);

// second "a" for books

let bookTag = document.createElement("a");
bookTag.className = 'avtive';
bookTag.setAttribute('href', '#');
let bookText = document.createTextNode("Books");
bookTag.appendChild(bookText);

newDiv.appendChild(bookTag);
// third "a" for order
let orderTag = document.createElement("a");
orderTag.className = 'avtive';
orderTag.setAttribute('href', '../form page/delivery_form.html');
let orderText = document.createTextNode("Order Form");
orderTag.appendChild(orderText);

newDiv.appendChild(orderTag);

document.body.appendChild(newDiv);


// get books data
// get books data
// async function getBooks () {
//     const response = await fetch('./books.json', {mode: 'no-cors'});
//     const data = await response.json();
//     const { author, title} = data;
//     console.log(author);
//     console.log(title);
//     return data

// }

// getBooks().then(data => console.log('data from async function', data));

