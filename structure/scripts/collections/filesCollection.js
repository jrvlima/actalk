define(["jquery", "underscore", "backbone", "models/fileModel"],

  function($, _, Backbone, FileModel) {

    'use strict';

    var FilesCollection = Backbone.Collection.extend({
      model: FileModel,
      url: "scripts/data/filesystem.json"
    });

    return FilesCollection;
});
