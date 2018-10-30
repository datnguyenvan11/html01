// var arraymp3 = new Array(
//     {
//         id: '1540304588828',
//         name: 'TÌnh Ca',
//         author: 'Quốc Bảo',
//         link:'https://s1.vocaroo.com/media/download_temp/Vocaroo_s1cqKcLqsxJ5.mp3'
//     },
//     {
//         id: '1540304628575',
//         name: 'Nếu',
//         author: 'Marzuz',
//         link:'http://data2.chiasenhac.com/downloads/1725/2/1724970-05a36978/128/Neu%20-%20Onionn_%20Marzuz.mp3'
//     },
//     {
//         id: '1540304709939',
//         name: 'Sài Gòn Tôi Mưa',
//         author: 'Nguyễn Kim Tuyên',
//         link:'https://od.lk/s/MTJfNjY3NTgxMV8/S%C3%A0i%20G%C3%B2n%20T%C3%B4i%20M%C6%B0a%20-%20Nguy%E1%BB%85n%20Kim%20Tuy%C3%AAn.mp3'
//     },
// );
// var mylist=document.getElementById("list")
// if (mylist!=null) {
//     for (var i = 0; i < arraymp3.length; i++) {
//         var mp3 = '<div id="list" >';
//         mp3 += '    <iframe scrolling="no" width="640" height="180" src='\''\' frameborder="0" allowfullscreen="true"></iframe>\n';
//         mp3 += '<h4>'+ arraymp3[i].name+'</h4>'
//         mp3 += '</div>'
//     }
// }
var bai1=document.getElementById("bai1");
bai1.onclick=function () {
    var list1=document.getElementById("list")
    list1.style.display="block";
}