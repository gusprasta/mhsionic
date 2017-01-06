// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'MyApp', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('menu', {
     url: '/menu',
    templateUrl: 'templates/menu.html'
    // controller: 'AppCtrl'


  })

  .state('add',{
    url: '/add',
    templateUrl: 'templates/add.html',
    controller: 'Ctrl_Add'

  })
  .state('addmk',{
    url: '/addmk',
    templateUrl: 'templates/addmk.html',
    controller: 'Ctrl_Addmk'

  })
  .state('view', {
    url: '/view',
    templateUrl: 'templates/view.html',
    controller: 'Ctrl_View'
  })

  .state('detail',{
    url: '/detail/:nim',
    templateUrl: 'templates/detail.html',
    controller: 'Ctrl_Detail'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'Ctrl_Login'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'Ctrl_Signup'
  })
   .state('delete',{
    url: '/delete/:nim',
    //templateUrl: 'templates/delete.html',
    controller: 'Ctrl_Delete'
  })
   .state('update',{
    url: '/update/:nim',
    templateUrl: 'templates/update.html',
    controller: 'Ctrl_Update'
  })


  $urlRouterProvider.otherwise('login');
  
})
.config(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAH52RQPp1Kf3p1wyQYX2AnK017cL4C97k",
    authDomain: "myproject-e9dea.firebaseapp.com",
    databaseURL: "https://myproject-e9dea.firebaseio.com",
    storageBucket: "myproject-e9dea.appspot.com",
    messagingSenderId: "50360835416"
  };
  firebase.initializeApp(config);
})
