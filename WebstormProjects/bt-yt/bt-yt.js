document.getElementById('btnsearch').onclick=function(){
    searchyoutube();
};


document.getElementById('keyword').onkeypress=function(event) {
    if (event.keyCode===13){
        searchyoutube();
    }
};
function searchyoutube() {


    var keyword = document.getElementById('keyword').value;
    var YOUTUBE_API = 'https://content.googleapis.com/youtube/v3/search?q=' + keyword + '&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsobject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsobject.items.length; i++) {
                var itemTube = '<div class="tube-item">';
                itemTube += '<iframe  width="660" height=355 src="https://www.youtube.com/embed/' + jsobject.items[i].id.videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                itemTube += '<h3>' + jsobject.items[i].snippet.title + '</h3>';
                itemTube += '</div>';
                content += itemTube;
            }
            document.getElementById("content").innerHTML = content;

        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}

// Lấy phần Modal
var modal = document.getElementById('myModal');

// Lấy đường dẫn của hình ảnh và gán vào trong phần Modal
var img = document.getElementById('p');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// lấy button span có chức năng đóng Modal
var span = document.getElementsByClassName("close")[0];

//Khi button được click, đóng modal
span.onclick = function() {
    modal.style.display = "none";
}

