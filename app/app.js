(function () {

    angular.module('app', [
        // Angular modules
        'ngRoute',
        'ngAnimate',
        'ngAria',

        // 3rd Party Modules
        'ui.bootstrap',
        'ui.tree',
        'ngMap',
        'ngTagsInput',
        'textAngular',
        'angular-loading-bar',
        'ui.calendar',
        'duScroll',
        'mgo-angular-wizard',

        // Custom modules
        'app.nav',
        'app.i18n',
        'app.chart',
        'app.ui',
        'app.ui.form',
        'app.ui.form.validation',
        'app.page',
        'app.table',
        'app.task',
        'app.calendar',

        // Modules from Dev
        'firebase'
    ]);

})();