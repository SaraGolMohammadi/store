import { getcookie } from "./utils/cookie.js";
import { getData } from "./utils/httpreq.js";
import { shortentText } from "./utils/stringFunc.js";
let allproducts = null;
let category = "all";
let search = "";
const loginButton = document.getElementById("login");
const dashoardButton = document.getElementById("Dashboard");
const maincontent = document.getElementById("products");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const listltems = document.querySelectorAll("li");

const rederproducts = (products) => {
  maincontent.innerHTML = "";
  products.map((product) => {
    const jsx = `
    <div>

      <img alt="${product.title}" src="${product.image}"/>

      <h4>${shortentText(product.title)}</h4>

      <div id="price">
        <p>$ ${product.price}</p>
        <button>
          Buy
          <i class="fa-solid fa-cart-shopping"></li>
    </button>
        </div>
          <div id="rate">
          <i class="fa-solid fa-star"></li>
          <span>${product.rating.rate}</span></div>
        <div id="count">
        <i class="fa-solid fa-user"></li>
        <span>${product.rating.coant}</span>
        </div>
        </div>
        `;
    maincontent.innerHTML += jsx;
  });
};
const init = async () => {
  const cookie = getcookie();
  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashoardButton.style.display = "none";
  }
  allproducts = await getData("products");
  rederproducts(allproducts);
};
const searchHandler = () => {
  search = inputBox.value.trim().toLowerCase();
  filterproducts();
};
const filterHandler = (event) => {
  category = event.target.innerText.toLowerCase();

  listltems.forEach((li) => {
    if (li.innerText.toLowerCase() === category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });
  filterproducts();
};

const filterproducts = () => {
  const filteredproducts = allproducts.filter((product) => {
    if (category === "all") {
      return product.title.toLowerCase().includes(search);
    } else {
      return (
        product.title.toLowerCase().includes(search) &&
        product.category.toLowerCase() === category
      );
    }
  });
  rederproducts(filteredproducts);
};
document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listltems.forEach((li) => li.addEventListener("click", filterHandler));
