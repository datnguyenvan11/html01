var REGISTER_API = 'https://2-dot-backup-server-001.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {

        var txtFirstname = document.forms['register-form']['firstname'];
        var txtLastname = document.forms['register-form']['lastname'];
        var pwdPassword = document.forms['register-form']['password'];
        var txtAddress = document.forms['register-form']['address'];
        var txtPhone = document.forms['register-form']['phone'];
        var txtAvatar = document.forms['register-form']['avatar'];
        var selectgender = document.forms['register-form']['gender'];
        var txtemail = document.forms['register-form']['email'];
        var dateBirthday = document.forms['register-form']['birthday'];
        var dd = new Date(dateBirthday.value);
        var myDate = dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-'
            + (dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate());
        if (txtFirstname != null && txtLastname != null) {
            var firstName = txtFirstname.value;
            var lastName = txtLastname.value;
            var password = pwdPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectgender.value;
            var email = txtemail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
        var txtfirstrname = document.forms["register-form"]["firstname"];
        var msgfisrtname = txtfirstrname.nextElementSibling;
        if (txtfirstrname == null || txtfirstrname.value.length == 0) {
            msgfisrtname.innerHTML = "* vui lòng nhập firstname đầy đủ ";
            msgfisrtname.classList.remove("hidden-text");
        } else {
            msgfisrtname.innerHTML = " tên hợp  ";
            msgfisrtname.classList.remove("hidden-text");
            msgfisrtname.classList.remove("danger-text");
            msgfisrtname.classList.add("success-text");
        }
        var txlastname = document.forms["register-form"]["lastname"];
        var mslastname = txlastname.nextElementSibling;
        if (txlastname == null || txlastname.value.length == 0) {
            mslastname.innerHTML = "* vui lòng nhập lastname đầy đủ ";
            mslastname.classList.remove("hidden-text");
        } else {
            mslastname.innerHTML = " tên hợp ";
            mslastname.classList.remove("hidden-text");
            mslastname.classList.remove("danger-text");
            mslastname.classList.add("success-text");
        }
        var muberphone = document.forms["register-form"]["phone"];
        var msphone = muberphone.nextElementSibling;
        if (muberphone == null || muberphone.value.length == 0) {
            msphone.innerHTML = "* vui lòng nhập số điện thoại  ";
            msphone.classList.remove("hidden-text");
        } else if (muberphone.value.length > 11 && muberphone.value.length < 10) {
            msphone.innerHTML = "* số điện thoại không hợp lệ  ";
            msphone.classList.remove("hidden-text");
        }

        else {
            msphone.innerHTML = " số điện thoại hợp lệ ";
            msphone.classList.remove("hidden-text");
            msphone.classList.remove("danger-text");
            msphone.classList.add("success-text");
        }
        var pwpass = document.forms["register-form"]["password"];
        var msgpassword = pwpass.nextElementSibling;
        if (pwpass == null || pwpass.value.length == 0) {
            msgpassword.innerHTML = "*vui long nhap mat khau.";
            msgpassword.classList.remove("hidden-text");
        } else if (pwpass.value.length < 6) {
            msgpassword.innerHTML = "* mât khẩu yếu. ";
            msgpassword.classList.remove("hidden-text");
        }

        else {
            msgpassword.innerHTML = " mật khẩu an  toàn .";
            msgpassword.classList.remove("hidden-text");
            msgpassword.classList.remove("danger-text");
            msgpassword.classList.add("success-text");
        }
        var birthday = document.forms["register-form"]["birthday"];
        var smgbirthday = birthday.nextElementSibling;
        if (birthday == null || birthday.value.length == 0) {
            smgbirthday.innerHTML = "* vui lòng nhập ngày sinh ";
            smgbirthday.classList.remove("hidden-text");
        } else {
            smgbirthday.innerHTML = " ngày sinh hợp lệ  ";
            smgbirthday.classList.remove("hidden-text");
            smgbirthday.classList.remove("danger-text");
            smgbirthday.classList.add("success-text");
        }
        var txtaddress = document.forms["register-form"]["address"];
        var msgaddress = txtaddress.nextElementSibling;
        if (txtaddress == null || txtaddress.value.length == 0) {
            msgaddress.innerHTML = "*vui lòng nhập địa chỉ  ";
            msgaddress.classList.remove("hidden-text");

        } else {
            msgaddress.innerHTML = " địa chỉ hợp lệ ";
            msgaddress.classList.remove("hidden-text");
            msgaddress.classList.remove("danger-text");
            msgaddress.classList.add("success-text");
        }
        var mail = document.forms["register-form"]["email"];
        var msgmail = mail.nextElementSibling;
        var n = mail.value.includes("@");
        if (mail == null || mail.value.length == 0) {
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

    }

}


function postRegisterData(jsonData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var members = JSON.parse(this.responseText);
            alert("đăng kí thành công"+ members.id + '-' + members.firstName);
            window.location = "dangnhap.html"

        }
    }
    xmlhttp.open("POST", REGISTER_API, true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(jsonData);
}
