function signup(e){
    event.preventDefault();
    var fullname =document.getElementById(fullname).Value;
    var phone =document.getElementById(phone).Value;
    var email =document.getElementById(email).Value;
    var user = {
        fullname : fullname,
        phone : phone,
        email : email,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(fullname,json);
    alert("Đăng ký thành công");
}
