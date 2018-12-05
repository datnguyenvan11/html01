document.addEventListener('DOMContentLoaded', function () {
    loadSongs3();
});

function loadSongs3() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            var content2 = '';
            for (var i = 0; i < data.length; i++) {
                content2 += '<div class="song-item2" onclick="playSong3(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\',\''+data[i].thumbnail+'\')">';

                content2 += '<div class="song-thumbnail2" style="display: none" >';
                content2 += '<img src="' +data[i].thumbnail + '" alt="">';
                content2 += '</div>';
                content2 += '<div class="song-infor2" style="margin-left: 4px">';
                content2 += '<div class="name-song2" onclick="playSong3(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\',\''+data[i].thumbnail+'\')"> ' + data[i].name + '</div>';
                content2 += '<div class="song-singer2">' + data[i].singer + '</div>';
                content2 += '</div>';
                content2+='<div class="icon">'
                content2 += '<div class="song-control2" onclick="playSong3(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\',\''+data[i].thumbnail+'\')"><i class="fa fa-play-circle icon-play2" aria-hidden="true"></i></div>';
                // content2 += '<div>';
                content2 += '<i class="fa fa-heart-o icon-tim" aria-hidden="true"></i>';
                content2 += '<i class="fa fa-share-alt icon-share" aria-hidden="true"></i>\n'
                content2 += '</div>'; content2 += '</div>';
                content2+='<div class="ngan">';
                content2+='</div>';

            }
            document.getElementById('list-song3').innerHTML = content2;
        }
    };
    xmlHttpRequest.open('POST', MY_SONG_API, true);
    xmlHttpRequest.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('my-token'));
    xmlHttpRequest.send();
}

function playSong3(link, name, singer,thumbnail) {
    $('#current-play-title').text(name + " - " + singer);
    $('#myVideo').attr("src", link);
    playOrPause();
    $('#frame').attr('style', 'display:block')
    $('#main').attr('style', 'display:block')
    $('#music').attr('style', 'margin-top:32%')
    $('#quay').attr("src", thumbnail)

}