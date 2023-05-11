const products = [
  {
    name: "Twixx",
    price: 1000,
    type: "chocolate",
    image:
      "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
  },
  {
    name: "Snickers",
    price: 1200,
    description: "Candy",
    type: "gummy",
    image:
      "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
  },
  {
    name: "M&M",
    price: 2300,
    type: "chocolate",
    image:
      "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
  },
  {
    name: "Haribo",
    price: 550,
    description: "Candy",
    type: "gummy",
    image:
      "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
  },
  {
    name: "Skittles",
    price: 3200,
    description: "Candy",
    type: "chocolate",
    image:
      "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
  },
];

function PrintProducts() {
  const productsContainer = document.getElementById("products");
  let newDiv = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    console.log(`${product.name}` - `${product.price}`);

    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <div class="grid-items">
          <div class="image"></div>
          <div class="contents">
            <div class="title">${product.name}</div>
            <div class="price">${product.price}$</div>
            <button onclick="AddItem('${product.name}')" class="calc">add</button>
            <button onclick="MinusItem('${product.name}')" class="calc">minus</button>
          </div>
        </div>
      `;

    newDiv += div.outerHTML;
  }

  productsContainer.innerHTML = newDiv;
}

window.onload = PrintProducts;

const userbasket = [];

function AddItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity += 1;
  } else {
    userbasket.push({ name: itemName, quantity: 1 });
  }

  Basket();
}

function MinusItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity -= 1;

    if (userbasket[itemIndex].quantity === 0) {
      userbasket.splice(itemIndex, 1);
    }
  }

  Basket();
}

function Purchase() {
  let total = 0;
  for (let i = 0; i < userbasket.length; i++) {
    const { name, quantity } = userbasket[i];
    const product = products.find((p) => p.name === name);
    if (product) {
      total += product.price * quantity;
    }
  }

  document.getElementById("total").innerHTML = "total: " + `${total}` + "$";
  Clear();
}

function Clear() {
  userbasket = [];
}

function Basket() {
  const basketDiv = document.getElementById("basket");
  const basketHtml = userbasket
    .map(
      ({ name, quantity }) => `
      <div class="amogn">
        <h1 class="ae">${name}:</h1><h1 class="aea">${quantity}</h1>
      </div>
    `
    )
    .join("");
  basketDiv.innerHTML = basketHtml;
}
