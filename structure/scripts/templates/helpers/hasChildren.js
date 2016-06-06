define('templates/helpers/hasChildren', ['jquery', 'underscore', 'hbs/handlebars'], function ( $, _, Handlebars ) {
  function hasChildren ( context, options ) {
    return (context && !(_.isEmpty(context))? options.fn(this): options.inverse(this));
  }
  Handlebars.registerHelper( 'hasChildren', hasChildren );
  return hasChildren;
});
