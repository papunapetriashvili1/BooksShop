
const books = [{
    author: "Douglas Crockford",
    imageLink: "../../assets/images/1.jpg",
    title: "JavaScript: The Good Parts",
    price: 30,
    description: "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      author: "David Herman",
      imageLink: "../../assets/images/2.jpg",
      title: "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      price: 22,
      description: "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      author: "David Flanagan",
      imageLink: "../../assets/images/3.jpg",
      title: "JavaScript: The Definitive Guide",
      price: 40,
      description: "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      author: "Eric Elliott",
      imageLink: "../../assets/images/4.jpg",
      title: "Programming JavaScript Applications",
      price: 19,
      description: "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      author: "Addy Osmani",
      imageLink: "../../assets/images/5.jpg",
      title: "Learning JavaScript Design Patterns",
      price: 32,
      description: "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      author: "Boris Cherny",
      imageLink: "../../assets/images/6.jpg",
      title: "Programming TypeScript",
      price: 28,
      description: "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      author: "Alex Banks, Eve Porcello",
      imageLink: "../../assets/images/7.jpg",
      title: "Learning React, 2nd Edition",
      price: 25,
      description: "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      author: "Bradley Meck Alex Young and Mike Cantelon",
      imageLink: "../../assets/images/8.png",
      title: "Node.js in Action",
      price: 38,
      description: "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      author: "Kyle Simpson",
      imageLink: "../../assets/images/9.jpg",
      title: "You Don't Know JS Yet: Get Started",
      price: 26,
      description: "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      author: "John Resig and Bear Bibeault",
      imageLink: "../../assets/images/10.jpg",
      title: "Secrets of the JavaScript Ninja",
      price: 33,
      description: "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
  ]


function getBooks(){
    // let books;
    // fetch('./books.json')// path to the file with json data
    //     .then(response => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     });
    return books;
}
console.log(getBooks());
console.log(books);





let mainWrapper = document.createElement("div");
mainWrapper.setAttribute("class", "container");
document.body.appendChild(mainWrapper);

let booksWrapper = document.createElement("div");
booksWrapper.setAttribute("class", "row justify-content-around");
mainWrapper.appendChild(booksWrapper);




for (let i = 0; i < books.length; i++) {
  //book author info
  let bookInfoWrapper = document.createElement("div");
  bookInfoWrapper.setAttribute("class","col-4" );

  let author = document.createTextNode("Author: "+ books[i].author);
  
  let bookAuthorInfo = document.createElement("h2");
  bookAuthorInfo.setAttribute("class", "book-item-author");
  bookAuthorInfo.appendChild(author);
  bookInfoWrapper.appendChild(bookAuthorInfo);

  //book title info
  let title1 = document.createTextNode("Title: " +books[i].title);
  let bookTitleInfo = document.createElement("p");
  bookTitleInfo.setAttribute("class", "shop-item-title");
  bookTitleInfo.appendChild(title1);
  bookInfoWrapper.appendChild(bookTitleInfo);

  //book price info

  let price1 = document.createTextNode("Price: " + "$" + books[i].price);
  let bookPriceInfo = document.createElement("p");
  bookPriceInfo.setAttribute("class", "shop-item-price");
  bookPriceInfo.appendChild(price1);
  bookInfoWrapper.appendChild(bookPriceInfo);

    
   //images
   let imageWrap = document.createElement("div");
   imageWrap.classList.add("class", "col-4");
   let img = document.createElement("img");
   img.setAttribute("class", "shop-item-image")
   img.src = books[i].imageLink;
   img.alt = "alt";
   img.width = 150;
   img.height = 150;
    


  bookInfoWrapper.appendChild(img);

  //buttons

  let buttonCart = document.createElement("div");
  buttonCart.setAttribute("id", "buttonCart");
  let addToCart = document.createElement("button");
  addToCart.setAttribute("type", "button");
  addToCart.innerText = "Add To Cart";
  addToCart.classList.add("btn", "btn-primary", "shop-item-button");
  buttonCart.appendChild(addToCart);
  bookInfoWrapper.appendChild(buttonCart);



  let openButton = document.createElement("div");
  openButton.classList.add("button", "open-button")
  let description = document.createElement("button");
  description.innerText = "Show More";
  description.classList.add( "description", "btn", "btn-primary", "shop-item-button");
  openButton.appendChild(description)
  bookInfoWrapper.appendChild(openButton);



  let descriptionDialog = document.createElement("dialog");
  descriptionDialog.setAttribute("class", "modal");
  descriptionDialog.setAttribute("id", "modal");
  let descriptionPar = document.createElement("p");
  let bookDescription = document.createTextNode(books[i].description);
  descriptionPar.appendChild(bookDescription);
  
  descriptionDialog.appendChild(descriptionPar);

  let closeButton = document.createElement("button");
  let closeText = document.createTextNode("Close");
  closeButton.classList.add('button', 'close-button');
  closeButton.appendChild(closeText);
  descriptionDialog.appendChild(closeButton);

  bookInfoWrapper.appendChild(descriptionDialog);




  
    booksWrapper.appendChild(bookInfoWrapper);

}

const modal = document.querySelectorAll(".modal");
const openModal = document.querySelectorAll(".description");
const closeModal = document.querySelectorAll(".close-button");

for (let j = 0; j < modal.length; j++){

  openModal[j].addEventListener("click", () => {
      modal[j].showModal();
    });
  
  closeModal[j].addEventListener("click", () => {
      modal[j].close();
    })
  };

//shopping cart

let cartSection = document.createElement("section");
cartSection.classList.add("container1", "content-section");

let headerCart = document.createElement("h1");
let headerText = document.createTextNode("Cart");
headerCart.setAttribute("class", "section-header");
headerCart.appendChild(headerText);
cartSection.appendChild(headerCart);


let cartRow = document.createElement("div");
cartRow.setAttribute("class", "cart-row");

let cartItem = document.createElement("span");
cartItem.classList.add("cart-item", "cart-header", "cart-column");
let cartItemText = document.createTextNode("ITEM");
cartItem.appendChild(cartItemText);
cartRow.appendChild(cartItem);

let cartPrice = document.createElement("span");
cartPrice.classList.add("cart-price", "cart-header", "cart-column");
let cartPriceText = document.createTextNode("PRICE");
cartPrice.appendChild(cartPriceText);
cartRow.appendChild(cartPrice);


let cartQuantity = document.createElement("span");
cartQuantity.classList.add("cart-quantity", "cart-header", "cart-column");
let cartQuantityText = document.createTextNode("QUANTITY");
cartQuantity.appendChild(cartQuantityText);
cartRow.appendChild(cartQuantity);


cartSection.appendChild(cartRow);

let addedItem = document.createElement("div");
addedItem.setAttribute("class", "cart-items");
// let jsCartRow = document.createElement("div");
// jsCartRow.setAttribute("class", "cart-row");
// addedItem.appendChild(jsCartRow);
cartSection.appendChild(addedItem);

let cartTotal = document.createElement("div");
cartTotal.setAttribute("class", "cart-Total");

let cartTotalTitle = document.createElement("strong");
cartTotalTitle.setAttribute("class", "cart-total-title");
let totalText = document.createTextNode("Total");
cartTotalTitle.appendChild(totalText);
cartTotal.appendChild(cartTotalTitle);

let cartTotalPrice = document.createElement("span");
cartTotalPrice.setAttribute("class", "cart-total-price");
let totalPrice = document.createTextNode("$0");
cartTotalPrice.appendChild(totalPrice);
cartTotal.appendChild(cartTotalPrice);


cartSection.appendChild(cartTotal);

let deliveryButton = document.createElement("button");
deliveryButton.classList.add("btn", "btn-primary",  "btn-purchase");
let deliveryText = document.createTextNode("Delivery Form");
deliveryButton.appendChild(deliveryText);
deliveryButton.setAttribute("href", "../form page/delivery_form.html");
deliveryButton.setAttribute("onclick","window.location.href = '../form page/delivery_form.html'");

cartSection.appendChild (deliveryButton);


document.body.appendChild(cartSection);



if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (let i = 0; i < removeCartItemButtons.length; i++) {
      let button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  let quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (let l = 0; l < quantityInputs.length; l++) {
      let input = quantityInputs[l]
      input.addEventListener('change', quantityChanged)
  }

  let addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (let n = 0; n < addToCartButtons.length; n++) {
      let button = addToCartButtons[n]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  let cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let title = shopItem.getElementsByClassName('book-item-author')[0].innerText + "."+"\n" + shopItem.getElementsByClassName('shop-item-title')[0].innerText
  let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  let cartItems = document.getElementsByClassName('cart-items')[0]
  let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (let i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  let cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0];
  let cartRows = cartItemContainer.getElementsByClassName('cart-row');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i];
      let priceElement = cartRow.getElementsByClassName('cart-price')[0];
      let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      let price = priceElement.innerText.replace("Price: $", "");
      let quantity = quantityElement.value;
      total = total + (price * quantity);
      console.log(price*quantity);
  };
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}