var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
document.addEventListener('DOMContentLoaded', function () {
    loadSongs();
});

function loadSongs() {
    $.ajax({
        url: LIST_SONG_API,
        type: 'POST',
        contentType: "application/json; charset = utf-8",
        // headers: { 'authorization': "Basic "+localStorage.getItem('my-token') },
        success: function (data, textStatus, jqXHR) {
            // alert('Success')
            console.log('Success');
            console.log(data);
            console.log('-----');
            console.log(data.responseText);
            console.log('-----');
            console.log(textStatus);
            console.log('-----');
            console.log(jqXHR);
            // if (this.readyState === 4 && this.status === 200) {
            // var listSong = JSON.parse(this.responseText);
            var content = '';
            for (var i = 0; i < data.length; i++) {
                content += '<div class="song-item">';
                content += '<div class="song-thumbnail" id="song-thumbnail1">';
                content += '<img src="' +data[i].thumbnail + '" alt="">';
                content += '</div>';
                content += '<div class="song-infor">';
                content += '<div class="song-name" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\', \'' + data[i].thumbnail + '\')">' + data[i].name + '</div>';
                content += '<div class="song-singer">' + data[i].singer + '</div>';
                content += '</div>';
                content += '<div class="icon2">';
                content += ' <i class="fa fa-download" aria-hidden="true"></i>'
                content += '<i class="fa fa-heart-o icon-tim2" aria-hidden="true"></i>';
                content += '<i class="fa fa-share-alt icon-share2" aria-hidden="true"></i>\n'


                // content += '<div class="song-control" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\', \'' + data[i].thumbnail + '\')"><i class="fa fa-play-circle icon-play" aria-hidden="true"></i></div>';
                // content += '<div class="song-control"><a href="song-detail.html?id=' + listSong[i].id + '">Detail</a></div>';
                content += '</div>';
                content += '</div>';
                $('#list-song').html(content);




            }

            // }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // alert('Error')
            console.log('error');
            console.log(jqXHR);
            console.log('-----');
            console.log(jqXHR.responseText);
            console.log('-----');
            console.log(jqXHR.responseJSON.error);
            console.log('-----');
            console.log(textStatus);
            console.log('-----');
            console.log(errorThrown);
        },
    });
};
function playSong(link, name, singer,thumbnail) {
    $('#current-play-title').text( name + " - " + singer);
    $('#myVideo').attr("src",link);
    playOrPause();
    $('#frame').attr('style','display:block')
    $('#main').attr('style','display:block')
    $('#music').attr('style','margin-top:32%')
    $('#quay').attr("src",thumbnail)





}



















var vid = document.getElementById("myVideo");

var fillBar = document.getElementById("fill");

var currentTime = document.getElementById("currentTime");

var volumeSlider = document.getElementById("volume");

function playOrPause(){
    if(vid.paused){
        vid.play();
        $("#playBtn").attr("src","Pause.png");



        document.getElementById("quay").classList.add('spin');




    }
    else{
        vid.pause();
        $("#playBtn").attr("src","Play.png");

        document.getElementById("quay").classList.remove('spin');


    }
}

vid.addEventListener('timeupdate',function(){

    var position = vid.currentTime / vid.duration;

    fillBar.style.width = position * 100 +'%';

    convertTime(Math.round(vid.currentTime));  //convert decimal no into intiger

    if(vid.ended){
        $("#playBtn").attr("src","Play.png");
    }
});

function convertTime(seconds)
{
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(vid.duration));
}

function totalTime(seconds)
{
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
}


function changeVolume(){

    vid.volume = volumeSlider.value;

    if(volumeSlider.value == 0){
        $("#speaker").attr("src","Mute.png");
    }
    else{
        $("#speaker").attr("src","Speaker.png");
    }
}
// function ddd(){
// $('#none').click(
//     alert(1)
// )}