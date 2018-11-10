var MY_API = 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs/get-free-songs';

var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var listSong = JSON.parse(this.responseText);
        var content = '';
        for (var i = 0; i < listSong.length; i++) {
            content += '<div class="song-item" id="song-item" onclick="click()" >';
            content += '<div class="song-thumbnail"onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">';
            content += '<img src="' + listSong[i].thumbnail + '" alt="">';
            content += '</div>';
            content += '<div class="song-infor">';
            content += '<div class="song-name">' + listSong[i].name + '</div>';
            content += '<div class="song-singer">' + listSong[i].singer + '</div>';
            content += '</div>';
            // content += '<div class="song-control pause " onclick="pauseSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')"><i class="fa fa-pause-circle" aria-hidden="true"></i></div>';
            content += '<div class="song-control play" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')"><i class="fa fa-play-circle" aria-hidden="true"></i></div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML = content;
    }
}
xmlHttpRequest.open('GET', MY_API, true);
xmlHttpRequest.setRequestHeader('Authorization','basic'+ localStorage.getItem('mytoken'))
xmlHttpRequest.send();

function playSong(link, name, singer) {
    var mp3= document.getElementById('my-mp3')
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML =  name + " - " + singer;
    mp3.style.display="block";


}





// function pauseSong(link, name, singer) {
//     var mp3= document.getElementById('my-mp3');
//     var pause=document.getElementsByClassName("pause")[0];
//     var play=document.getElementsByClassName("play")[0];
//     pause.style.display="block";
//     play.style.display='none';
//     mp3.src = link;
//     mp3.pause();
// }