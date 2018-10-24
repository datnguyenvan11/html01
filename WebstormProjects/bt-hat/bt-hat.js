var arrayTubes = new Array(
    {
        id: 'UCXao7aTDQM',
        title: 'Tháng Tư Là Lời Nói Dối Của Em',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'dns2WLu8Su8',
        title: 'Người Tình Mùa Đông',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'XyjhXzsVdiI',
        title: 'Tình Thôi Xót Xa',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Tái Bút Anh Yêu Em',
        author: 'Hà Anh Tuấn'
    },
    {
        id:'LVQxfALfTe4',
        title: 'Người con gái ta thương',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'A8u_fOetSQc',
        title: 'Nơi ấy bình yên',
        author: 'Hà Anh Tuấn'
    }

);
var idMyTube = document.getElementById('myTubes');
if (idMyTube != null){

    for (var i = 0; i < arrayTubes.length; i++) {
        var itemTube = '<div class="tube-item">';
        itemTube += '<iframe width="550" height="355" src="https://www.youtube.com/embed/'+ arrayTubes[i].id +'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        itemTube += '<h3>' + arrayTubes[i].title + '</h3>';
        itemTube += '</div>';
        idMyTube.innerHTML += itemTube;
    }
}