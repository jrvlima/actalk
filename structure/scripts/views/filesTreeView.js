define(["jquery", "underscore", "marionette", "hbs!templates/fileLine", "collections/filesCollection"],
  function($, _, Marionette, fileLineHbs, FilesCollection){

    'use strict';

    var FilesTreeCompositiveView = Marionette.CompositeView.extend({

      template: fileLineHbs,
      tagName: "li",
      childViewContainer: ".subcategories",

      initialize: function(options) {
        console.dir(fileLineHbs.helpers);
        if(_.isEmpty(this.collection)) {
          var children = this.model.get('children');
          this.collection = _.isEmpty(children)? null: new FilesCollection(children);
        }
      }

    });

    return FilesTreeCompositiveView;

  });
