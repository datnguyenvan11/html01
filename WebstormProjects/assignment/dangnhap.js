var LOGIN_API = 'https://2-dot-backup-server-001.appspot.com/_api/v2/members/authentication';
var btnLogin = document.forms['login-form']['btn-login'];
if (btnLogin != null) {
    btnLogin.onclick = function () {
        var pwdPassword = document.forms['login-form']['password'];
        var txtEmail = document.forms['login-form']['email'];
        var jsLog = {
            password: pwdPassword.value,
            email: txtEmail.value,
        }
        var jsonDataLogin = JSON.stringify(jsLog);
        postLoginData(jsonDataLogin);
        var msgmail = txtEmail.nextElementSibling;
        var n = txtEmail.value.includes("@");
        if (txtEmail == null || txtEmail.value.length == 0) {
            msgmail.innerHTML = "*vui lòng nhập email";
            msgmail.classList.remove("hidden-text");
        }
        else if (n == false) {
            msgmail.innerHTML = " Email không hợp lệ .";
            msgmail.classList.remove("hidden-text");
        }
        else {
            msgmail.innerHTML = " Email hợp lệ .";
            msgmail.classList.remove("hidden-text");
            msgmail.classList.remove("danger-text");
            msgmail.classList.add("success-text");
        }

        var msgpassword = pwdPassword.nextElementSibling;
        if (pwdPassword == null || pwdPassword.value.length == 0) {
            msgpassword.innerHTML = "*vui lòng nhập mật khẩu";
            msgpassword.classList.remove("hidden-text");
            // } else if (pwdPassword.value.length < 6) {
            //     msgpassword.innerHTML = "* mật khẩu không hợp lệ ";
            //     msgpassword.classList.remove("hidden-text");
            // }
        }
    }

}

function postLoginData(jsonDataLogin) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            alert("đăng nhập thành công");
            localStorage.setItem('mytoken', member.token);
            window.location = "mp3.html"
        }
    }
    xmlHttpRequest.open('POST', LOGIN_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonDataLogin);

}
