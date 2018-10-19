var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "*vui long nhap ten ban.";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "*Ten ban qua ngan.";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "*Ten ban qua dai.";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = " Ten hop le.";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }
    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "*vui long nhap mat khau.";
        msgPassword.classList.remove("hidden-text");
    } else {
        msgPassword.innerHTML = " mat khau hop le.";
        msgPassword.classList.remove("hidden-text");
        msgPassword.classList.remove("danger-text");
        msgPassword.classList.add("success-text");
    }
    var txtFullname = document.forms["register-form"]["fullname"];
    var msgFullname = txtFullname.nextElementSibling;
    if (txtFullname == null || txtFullname.value.length == 0) {
        msgFullname.innerHTML = "*vui long nhap ten day du cua ban.";
        msgFullname.classList.remove("hidden-text");
    } else if (txtFullname.value.length < 5) {
        msgFullname.innerHTML = "*Ten ban qua ngan.";
        msgFullname.classList.remove("hidden-text");
    } else if (txtFullname.value.length > 30) {
        msgFullname.innerHTML = "*Ten ban qua dai.";
        msgFullname.classList.remove("hidden-text");
    } else {
        msgFullname.innerHTML = " Ten hop le.";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text");
    }
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var n = txtEmail.value.includes("@");
    if (n==false) {
        msgEmail.innerHTML = " Email khong hop le.";
        msgEmail.classList.remove("hidden-text");
    } else {
        msgEmail.innerHTML = " Email hop le.";
        msgEmail.classList.remove("hidden-text");
        msgEmail.classList.remove("danger-text");
        msgEmail.classList.add("success-text");
    }
}