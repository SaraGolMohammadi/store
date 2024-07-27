import { postData } from "./utils/httpreq.js";
import { setcookie } from "./utils/cookie.js"; 
import authHandeler from "./utils/authHandler.js";
import validateform from "./utils/validation.js";
const inputBox = document.querySelectorAll("input");
const laginButton = document.querySelector("button");
const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;
  const validation =validateform(username,password);
  if(!validation)return;
  const response = await postData("auth/login", {
    username, password 
  });
  setcookie(response.token);
  location.assign("index.html");
};

laginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded",authHandeler);
