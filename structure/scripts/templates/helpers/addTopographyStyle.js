define('templates/helpers/addTopographyStyle', ['jquery', 'underscore', 'hbs/handlebars'], function ( $, _, Handlebars ) {
  function addTopographyStyle ( context ) {
    return (context && !(_.isEmpty(context))? "folder-icon": "file-icon");
  }
  Handlebars.registerHelper( 'addTopographyStyle', addTopographyStyle );
  return addTopographyStyle;
});
