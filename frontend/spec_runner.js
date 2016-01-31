require.config({
  // baseUrl: "../",
  paths: {
      jquery:     'assets/libs/jquery/dist/jquery',
      underscore: 'assets/libs/underscore/underscore-min',
      backbone:   'assets/libs/backbone/backbone',
      marionette: 'assets/libs/backbone.marionette/lib/backbone.marionette',
      bootstrap:  'assets/libs/bootstrap/dist/js/bootstrap',
      templates:  'assets/js/templates',
      google_analytics: 'assets/google_analytics',

      //goog to load google graphs
      //async,propertyParser are goog dependencies
      async: 'assets/libs/requirejs-plugins/src/async',
      propertyParser : 'assets/libs/requirejs-plugins/src/propertyParser',
      goog: 'assets/libs/requirejs-plugins/src/goog',

      //testing purpose
      jasmine:          'assets/libs/jasmine/lib/jasmine-core/jasmine',
      boot:             'assets/libs/jasmine/lib/jasmine-core/boot',
      'jasmine-html':   'assets/libs/jasmine/lib/jasmine-core/jasmine-html',
      'jasmine-jquery': 'assets/libs/jasmine-jquery/lib/jasmine-jquery',
      'mock-ajax':      'assets/libs/jasmine-ajax/lib/mock-ajax',
  },
  shim: {
        'jasmine': {
          exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'window.jasmineRequire'
        },
        'boot': {
          deps: ['jasmine', 'jasmine-html'],
          exports: 'window.jasmineRequire'
        },
        'jasmine-jquery':{
            exports: 'jasmineJquery'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],

            //Once loaded, use the global 'Backbone' as the module value
            exports: 'Backbone',
        },
        'marionette': {
            deps: ['backbone' , 'assets/extend'],

            //Once loaded, use the global 'Backbone' as the module value
            exports: 'Marionette',
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap',
        },
    },

    urlArgs: "bust=" + (new Date()).getTime()
});


require(['marionette',
       'backbone',
       'router',
       'layout'
],
function (  Mn,
          Backbone,
          Router,
          Layout
) {
  // Create our Application
  window.app = {};
  window.app = new Mn.Application();

  app.on("before:start", function(){
      app.router = new Router();
  });

  app.addInitializer(function(){
      // Render the layout and get it on the screen, first
      app.layout = new Layout();
      var layout_render = app.layout.render();
      $('body').prepend(app.layout.el);

    //   Backbone.history.start();
  })

  app.start();

});

// Define all of your specs here. These are RequireJS modules.
  var specs = [
    'test/user/views/signin',
    'test/user/views/signup',
  ];

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
require(['boot'], function () {
    // Load the specs
    require(specs, function () {
      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
});
