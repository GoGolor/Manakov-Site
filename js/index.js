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
    var Gismap = Backbone.View.extend({
        el: $("#main"),
        template: _.template($('#gismap').html()),
        render: function () {
            $(this.el).html(this.template());
            DG.then(function(){
                DG.map('map', {
                    center: [55.05662407, 82.88906931],
                    zoom: 20
                });
            });
        }
    });
    
    Views = {
        home: new Home(),
        projects: new Projects(),
        about: new About(),
        gismap: new Gismap()
    };
    
    
    var Controller = Backbone.Router.extend({
        routes : {
            "" : "home",
            "!/": "home",
            "!/projects": "projects",
            "!/about": "about",
            "!/map": "gismap"
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
        gismap: function () {
            Views.gismap.render();
        }
    });
    var controller = new Controller();
    Backbone.history.start();
});
