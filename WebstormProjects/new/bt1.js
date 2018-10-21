var celebraionNames = [
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
var showmore=document.getElementById("show-more");
showmore.onclick =function() {
    var listname= "";
    for (var i = 0; i < celebraionNames.length; i++) {
        listname += '<li>' + celebraionNames[i] + '</li>'
    }
    showmore.parentElement.innerHTML=(listname);
}
