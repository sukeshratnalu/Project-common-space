//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/modules/app.module.js',
      'app/modules/app.config.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/modules/filters/dashboard.filter.js',

      'app/modules/dashboard/dashboard.controller.js',
      'app/modules/dashboard/dashboard.factory.js',
      'app/modules/questions/question.service.js',
      'app/modules/questions/questions.controller.js',
      'app/modules/questions/questions.directive.js',
      'app/modules/answers/answer.service.js',
      'app/modules/answers/answers.controller.js',


      'test/modules/questions/questions.controller.spec.js',
      'test/modules/answers/answers.service.spec.js',
      'test/modules/answers/answers.controller.spec.js',
      'test/modules/dashboard/dashboard.controller.spec.js',
      'test/modules/questions/questions.directive.spec.js',
      'test/modules/questions/questions.service.spec.js',
      'test/modules/filters/dashboard.filter.spec.js'


    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/modules/**/*.js': ['coverage']

    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
