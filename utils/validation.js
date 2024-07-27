const validationusername=(username)=>{
    const regex=/^[a-zA-Z\d_]{4,16}$/;
    const result =regex.test(username);
    return result;
}
const validationpassword=(password)=>{
    const regex=/^.{4,20}$/;
    const result =regex.test(password);
    return result;
}
const validateform=(username,password)=>{
    // console.log(password,username);
    const usernameResult=validationusername(username);
    const passwordResult=validationpassword(password);
    if(usernameResult&&passwordResult){
        return true ;
    }
    else if(!usernameResult){
        alert("username is not valid");
    }
    else if(!passwordResult){
        alert("password must be between 4 and 20 characters");
    }
}
export default validateform;