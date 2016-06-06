define(["jquery", "underscore", "marionette", "views/filesTreeView"],
  function($, _, Marionette, FilesTreeCompositiveView){
    var FilesRootView = Marionette.CollectionView.extend({
      childView: FilesTreeCompositiveView,
      tagName: "ul"
    });
    return FilesRootView;
  });
