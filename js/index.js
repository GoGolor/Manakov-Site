$(function () {
    var Views = {};
    
    var Home = Backbone.View.extend({
        el: $("#main"),
        template: _.template($('#home').html()),  
        render: function () {
            $(this.el).html(this.template());
        }
    });
    var Projects = Backbone.View.extend({
        el: $("#main"),
        template: _.template($('#projects').html()),
        render: function () {
            $(this.el).html(this.template());
            $( "#accordion" ).accordion({
                collapsible: true
            });
        }
    });
    var About = Backbone.View.extend({
        el: $("#main"),
        template: _.template($('#about').html()),
        render: function () {
            $(this.el).html(this.template());
            $( "#accordion" ).accordion({
                collapsible: true
            });
        }
    });
    var Map = Backbone.View.extend({
        el: $("#main"),
        template: _.template($('#map').html()),
        render: function () {
            $(this.el).html(this.template());
        }
    });
    var MapBox = Backbone.View.extend({
        render1: function(){
            var haightAshbury = new google.maps.LatLng(55.05662407, 82.88906931);
            var mapOptions = {
                zoom: 17,//масштаб
                center: haightAshbury,//позиционируем карту на заданые координаты
                mapTypeId: google.maps.MapTypeId.TERRAIN//задаем тип карты
            };
            map = new google.maps.Map(document.getElementById("mapbox"), mapOptions);
        },
        render2: function(){
            var map = new ymaps.Map("mapbox", {
                center: [55.05662407, 82.88906931], 
                zoom: 17
            });
        }
    });
    
    Views = {
        home: new Home(),
        projects: new Projects(),
        about: new About(),
        map: new Map(),
        mapbox: new MapBox()
    };
    
    
    var Controller = Backbone.Router.extend({
        routes : {
            "" : "home",
            "!/": "home",
            "!/projects": "projects",
            "!/about": "about",
            "!/map": "map",
            "!/map/google": "mapgoogle",
            "!/map/yandex": "mapyandex"
        },
        
        home: function () {
            Views.home.render();
        },
        projects: function () {
            Views.projects.render();
        },
        about: function () {
            Views.about.render();
        },
        map: function () {
            Views.map.render();
        },
        mapgoogle: function(){
            Views.mapbox.render1();
        },
        mapyandex: function(){
            Views.mapbox.render2();
        }
    });
    var controller = new Controller();
    Backbone.history.start();
});
