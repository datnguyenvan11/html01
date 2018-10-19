var btnsubmit = document.forms["favourite-form"]["btn-submit"];
btnsubmit.onclick = function () {
    var checkbox = document.getElementsByName('favourite[]')
    var result = "";
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            result +=  checkbox[i].value + ',';
        }
    }
    alert("game được chọn là : " + result);

}
