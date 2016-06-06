require.config({
    appDir: "scripts",
    baseUrl: "scripts",
    paths: {
        // library
          jquery: "lib/jquery-1.12.0",
    	underscore: "lib/underscore",
        backbone: "lib/backbone",
    	marionette: "lib/backbone.marionette",
      handlebars: "lib/handlebars-v4.0.5",
             hbs: "lib/require-handlebars-plugin-master/hbs",
        // add files here
        fileApp: "fileApp",
        //myView: ".../myView",
    },
    shim: {
    	backbone: {
    		deps: ["jquery", "underscore"],
    		exports: "backbone"
    	}
    },
    hbs: {
        helpers: true,
        i18n: true,
        templateExtension: 'hbs',
        partialsUrl: '',
        helperPathCallback: function(name) {
          return 'templates/helpers/' + name;
        }
    },
});
require(["backbone", "marionette", "handlebars", "fileApp"],
    function(Backbone, Marionette, Handlebars, App) {
        App.start();
    }
);
