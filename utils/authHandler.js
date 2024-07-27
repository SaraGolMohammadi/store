import { getcookie } from "./cookie.js";

const authHandeler = () => {
  const cookie = getcookie();
  const url = location.href;
  if((cookie && url.includes("auth"))||
(!cookie && url.includes("dashoard"))
){
    location.assign("index.html");
    return false;
}
};
export default authHandeler;
