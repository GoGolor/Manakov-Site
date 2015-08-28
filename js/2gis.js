$(document).ready(function (){
    var map;
    DG.then(function () {
        map = DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13
        });
    });
});