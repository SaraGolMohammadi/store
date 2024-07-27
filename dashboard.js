import  authHandeler from"./utils/authHandler.js";
import { getData } from "./utils/httpreq.js";
const  maincontent=document.getElementById("content");
const logouButton=document.querySelector("button");
const renderusers=(users)=>{
   maincontent.innerHTML="";
   users.forEach((user) => {
      const jsx=`
      <div id="card">
      <h3>${user.id}</h3>
      <div>
      <p><li class="fa-solid fa-user"></li>Name:</p>
      <span>${user.name.firstname}${user.name.lastname}</span>
      </div>
      <div>
      <p><li class="fa-solid fa-paperclip"></li>Username:</p>
      <span>${user.username}</span>
      </div>
      <div>
      <p><li class="fa-solid fa-envelope"></li>Email:</p>
      <span>${user.email}</span>
      </div>
      <div>
      <p><li class="fa-solid fa-phone"></li>phone:</p>
      <span>${user.phone}</span>
      </div>
      <div>
      <p><li class="fa-solid fa-location-dot"></li>Address:</p>
      <span>${user.address.city}-${user.address.street}-${user.address.zipcode}</span>
      </div>
      `;
      maincontent.innerHTML+=jsx;
   });
}
const init = async () => {
  authHandeler();
  const users = await getData("users");
  renderusers(users);
};
const logouHahdler=()=>{
   document.cookie="token=,max-age=0";
   location.assign("index.html");
}
document.addEventListener("DOMContentLoaded", init);
logouButton.addEventListener("click",logouHahdler);