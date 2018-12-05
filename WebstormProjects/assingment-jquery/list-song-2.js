var MY_API2 = 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs/get-free-songs';
document.addEventListener('DOMContentLoaded', function () {
    list2();
});

function list2() {
    $.ajax({
        url: MY_API2,
        type: 'POST',
        contentType: "application/json; charset = utf-8",

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
            // if (this.readyState === 4 && this.status === 200)
            // var listSong = JSON.parse(this.responseText);
            var content2 = '';
            for (var i = 0; i < data.length; i++) {
                content2 += '<div class="song-item2" onclick="playSong2(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\',\''+data[i].thumbnail+'\')">';
                content2 += '<div class="song-index" style="float: left; margin-top: 6px;font-size: 20px">' + (i + 1) + '</div>';

                content2 += '<div class="song-thumbnail2" style="display: none" >';
                content2 += '<img src="' +data[i].thumbnail + '" alt="">';
                content2 += '</div>';
                content2 += '<div class="song-infor2" style="margin-left: 30px">';
                content2 += '<div class="name-song2" onclick="playSong2(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\',\''+data[i].thumbnail+'\')"> ' + data[i].name + '</div>';
                content2 += '<div class="song-singer2">' + data[i].singer + '</div>';
                content2 += '</div>';
                content2+='<div class="icon">'
                content2 += '<div class="song-control2" onclick="playSong2(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\',\''+data[i].thumbnail+'\')"><i class="fa fa-play-circle icon-play2" aria-hidden="true"></i></div>';
                // content2 += '<div>';
                content2 += '<i class="fa fa-heart-o icon-tim" aria-hidden="true"></i>';
                content2 += '<i class="fa fa-share-alt icon-share" aria-hidden="true"></i>\n'
                content2 += '</div>'; content2 += '</div>';
                content2+='<div class="ngan">';
                content2+='</div>';

                $('#list-song2').html(content2);
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

function playSong2(link, name, singer,thumbnail) {

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
    var pause=document.getElementById("quay")
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

