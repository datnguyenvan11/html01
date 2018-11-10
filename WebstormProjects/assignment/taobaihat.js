var CREATE_SONG_API = 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs';
document.addEventListener('DOMContentLoaded', function () {
    var songForm = document.forms['song-form'];
    if (songForm == null || songForm['btn-submit'] == null) {
        alert('Vui lòng thử lại!');
    }
    songForm['btn-submit'].onclick = function () {
        var txtName = document.forms["song-form"]["name"];
        var msgname = txtName.nextElementSibling;
        if (txtName == null || txtName.value.length == 0) {
            msgname.innerHTML = "* vui lòng nhập name đầy đủ ";
            msgname.classList.remove("hidden-text");
        } else {
            msgname.innerHTML = " tên hợp  ";
            msgname.classList.remove("hidden-text");
            msgname.classList.remove("danger-text");
            msgname.classList.add("success-text");
        }
        var txtDescription = document.forms["song-form"]["description"];
        var msgdescription = txtDescription.nextElementSibling;
        if (txtDescription == null || txtDescription.value.length == 0) {
            msgdescription.innerHTML = "* vui lòng nhập description ";
            msgdescription.classList.remove("hidden-text");
        } else {
            msgdescription.innerHTML = " tên hợp  ";
            msgdescription.classList.remove("hidden-text");
            msgdescription.classList.remove("danger-text");
            msgdescription.classList.add("success-text");
        }
        var txtSinger = document.forms["song-form"]["singer"];
        var msgsinger = txtSinger.nextElementSibling;
        if (txtSinger == null || txtSinger.value.length == 0) {
            msgsinger.innerHTML = "* vui lòng nhập singer đầy đủ ";
            msgsinger.classList.remove("hidden-text");
        } else {
            msgsinger.innerHTML = " tên hợp  ";
            msgsinger.classList.remove("hidden-text");
            msgsinger.classList.remove("danger-text");
            msgsinger.classList.add("success-text");
        }
        var txtAuthor = document.forms["song-form"]["author"];
        var msgauthor = txtAuthor.nextElementSibling;
        if (txtAuthor == null || txtAuthor.value.length == 0) {
            msgauthor.innerHTML = "* vui lòng nhập author đầy đủ ";
            msgauthor.classList.remove("hidden-text");
        } else {
            msgauthor.innerHTML = " tên hợp  ";
            msgauthor.classList.remove("hidden-text");
            msgauthor.classList.remove("danger-text");
            msgauthor.classList.add("success-text");
        }
        var txtThumbnail = document.forms["song-form"]["thumbnail"];
        var msgthumbnail = txtThumbnail.nextElementSibling;
        if (txtThumbnail == null || txtThumbnail.value.length == 0) {
            msgthumbnail.innerHTML = "* vui lòng nhập author đầy đủ ";
            msgthumbnail.classList.remove("hidden-text");
        } else {
            msgthumbnail.innerHTML = " tên hợp  ";
            msgthumbnail.classList.remove("hidden-text");
            msgthumbnail.classList.remove("danger-text");
            msgthumbnail.classList.add("success-text");
        }
        var txtLink = document.forms["song-form"]["link"];
        var msglink = txtLink.nextElementSibling;
        var n = txtLink.value.includes(".mp3");
        if (txtLink == null || txtLink.value.length == 0) {
            msglink.innerHTML = "*vui lòng nhập link";
            msglink.classList.remove("hidden-text");
            msglink.classList.remove("hidden-text");
        }
        else if (n == false) {
            msglink.innerHTML = " link không hợp lệ .";
            msglink.classList.remove("hidden-text");
        }
        else {
            msglink.innerHTML = "  hợp lệ .";
            msglink.classList.remove("hidden-text");
            msglink.classList.remove("danger-text");
            msglink.classList.add("success-text");
        }


        var jsSong = {
            name: txtName.value,
            description: txtDescription.value,
            singer: txtSinger.value,
            author: txtAuthor.value,
            thumbnail: txtThumbnail.value,
            link: txtLink.value
        }
        createSong(jsSong);
    }
});

function createSong(jsSong) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var song = JSON.parse(this.responseText);
            alert("thêm bài hát thành công" + song.name);
            window.location = "hienthibaihat.html"
        }
    }
    xhr.open('POST', CREATE_SONG_API, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('mytoken'));
    xhr.send(JSON.stringify(jsSong));
}