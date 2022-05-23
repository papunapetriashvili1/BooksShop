// make navbar with welcome page (home)book catalog and order form
let newDiv = document.createElement("div"); // creates div
newDiv.className = 'topnav';

let homeTag = document.createElement("a"); //creates first "a" tag in div for home
homeTag.className = 'avtive';
homeTag.setAttribute('href', '#');
let homeText = document.createTextNode("Home");
homeTag.appendChild(homeText);

newDiv.appendChild(homeTag);

// second "a" for books

let bookTag = document.createElement("a");
bookTag.className = 'avtive';
bookTag.setAttribute('href', '../main/bookPage.html');
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

//welcome text
let newDiv1 = document.createElement("div");
newDiv1.className = "row";
let subDiv = document.createElement("div");
subDiv.classList.add('col-md-12', 'text-center')

let welcomeTag = document.createElement("h3");
welcomeTag.classList.add("animate-charcter", "border");
let welcomeText = document.createTextNode("Welcome To Online Book Shop");
welcomeTag.appendChild(welcomeText);
subDiv.appendChild(welcomeTag);

newDiv1.appendChild(subDiv);


document.body.appendChild(newDiv1);
