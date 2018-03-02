/**
 * Created by Conakry on 5/17/2016.
 */

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainCtrl'
        })

        .when('/scene', {
            templateUrl : 'pages/scene.html',
            controller : 'sceneCtrl'
        })

        .when('/actionAdventureCombo', {
            templateUrl: 'pages/actionAdventureCombo.html',
            controller: 'actionAdventureComboCtrl'
        })

        .when('/familyActionAdventure', {
            templateUrl: 'pages/familyActionAdventure.html',
            controller: 'familyActionAdventureCtrl'
        })

        .when('/actionWHorror', {
            templateUrl : 'pages/actionWHorror.html',
            controller : 'actionWHorrorCtrl'
        })

        .when('/actionWOHorror', {
            templateUrl : 'pages/actionWOHorror.html',
            controller : 'actionWOHorrorCtrl'
        })

        .when('/service', {
            templateUrl : 'pages/services.html',
            controller : 'serviceCtrl'
        })

        .when('/chillin', {
            templateUrl : 'pages/chillin.html',
            controller : 'chillinCtrl'
        })

        .when('/familyScene', {
            templateUrl: 'pages/familyScene.html',
            controller: 'familySceneCtrl'
        })

        .when('/groupScene', {
            templateUrl: 'pages/groupScene.html',
            controller: 'groupSceneCtrl'
        })

        .when('/coupleScene', {
            templateUrl: 'pages/coupleScene.html',
            controller: 'coupleSceneCtrl'
        })

        .when('/adventure', {
            templateUrl : 'pages/adventure.html',
            controller : 'adventureCtrl'
        })

        .when('/family', {
            templateUrl : 'pages/family.html',
            controller : 'familyCtrl'
        })

        .when('/romance', {
            templateUrl : 'pages/romance.html',
            controller : 'romanceCtrl'
        })

        .when('/doc', {
            templateUrl : 'pages/documentary.html',
            controller : 'docCtrl'
        })

        .when('/vqs', {
            templateUrl : '',
            controller : ''
        })

        .when('/finalPage/:genreID', {
            templateUrl : 'pages/result.html',
            controller : 'resultCtrl'
        });
});

app.controller('serviceCtrl', function ($scope, services) {
    $scope.question = 'Pick your services:';
    $scope.answers = [
        { answerID: '1', answer: 'Netflix img' },
        { answerID: '2', answer: 'Amazon img' },
        { answerID: '3', answer: 'Hulu img' },
        { answerID: '4', answer: 'Showtime img' },
        { answerID: '5', answer: 'HBOGO img' }
    ];
    $scope.serviceModel = {
        netflix : false,
        amazon_prime : false,
        hulu_plus : false,
        showtime_subscription : false,
        hbo_now : false
    };

    $scope.saveServices = function () {
        $scope.services = [''];
        angular.forEach($scope.serviceModel, function (value, key) {
            if (value === true) {
                services.addSource(key);
            }
        });
    };
});

app.controller('sceneCtrl', function ($scope) {
    $scope.question = "What\'s looking good?"
});

app.controller('chillinCtrl', function ($scope) {
    $scope.question = 'Who are you chillin with?';
    $scope.answers = [
        { answerID: '1', answer: 'single' },
        { answerID: '2', answer: 'date' },
        { answerID: '3', answer: 'friends' },
        { answerID: '4', answer: 'family' }
    ];
});

app.controller('coupleSceneCtrl', function($scope){
    $scope.question = 'What scene do you chill to?';
    $scope.answer = [
        {answerID: '1', answer: 'Action img'},
        {answerID: '2', answer: 'Horror img'},
        {answerID: '3', answer: 'Romance img'},
        {answerID: '4', answer: 'Comedy img'}
    ];
});

app.controller('groupSceneCtrl', function($scope){
    $scope.question = 'What scene do you chill to?';
    $scope.answer = [
        {answerID: '1', answer: 'Action img'},
        {answerID: '2', answer: 'Adventure img'},
        {answerID: '3', answer: 'Comedy img'},
        {answerID: '4', answer: 'Romance img'}
    ];
});

app.controller('familySceneCtrl', function($scope){
    $scope.question = 'What scene do you chill to?';
    $scope.answer = [
        {answerID: '1', answer: 'Action img'},
        {answerID: '2', answer: 'Adventure img'},
        {answerID: '3', answer: 'Family img'},
        {answerID: '4', answer: 'Animation img'},
        {answerID: '5', answer: 'Musicals img'},
        {answerID: '6', answer: 'TV Movies img'}
    ];
});

app.controller('actionAdventureComboCtrl', function($scope){
    $scope.question = 'What scene looks best?';
    $scope.answers=[
        {answerID: '1', answer: 'Action img'},
        {answerID: '2', answer: 'Adventure img'}
    ]
});

app.controller('familyActionAdventureCtrl', function($scope){
    $scope.question = 'What interests you more?';
    $scope.answers=[
        {answerID: '1', answer: 'Action img'},
        {answerID: '2', answer: 'Adventure img'}
    ]
});

app.controller('actionWHorrorCtrl', function ($scope) {
    $scope.question = 'Pick an action:';
    $scope.answers = [
        { answerID: '1', answer: 'Action img', genreID: '28' },
        { answerID: '2', answer: 'Crime img', genreID: '80'},
        { answerID: '3', answer: 'Horror img', genreID: '27' },
        { answerID: '4', answer: 'Thriller img', genreID: '53' },
        { answerID: '5', answer: 'War img', genreID: '10752' }
    ];
});

app.controller('actionWOHorrorCtrl', function ($scope) {
    $scope.question = 'What scene do you chill to?';
    $scope.answers = [
        { answerID: '1', answer: 'Action img', genreID: '28' },
        { answerID: '2', answer: 'Crime img', genreID: '80'},
        { answerID: '3', answer: 'Thriller img', genreID: '53' },
        { answerID: '4', answer: 'War img', genreID: '10752' }
    ];
});

app.controller('adventureCtrl', function ($scope) {
    $scope.question = 'Where would you like to go?';
    $scope.answers = [
        { answerID: '1', answer: 'Adventure img', genreID: '12' },
        { answerID: '3', answer: 'Comedy img', genreID: '35' },
        { answerID: '4', answer: 'Drama img', genreID: '18' },
        { answerID: '5', answer: 'Fantasy img', genreID: '14' },
        { answerID: '6', answer: 'Mystery img', genreID: '9648' },
        { answerID: '7', answer: 'Science Fiction img', genreID: '878' }
    ];
});

app.controller('familyCtrl', function ($scope) {
    $scope.question = 'What scene do you chill to?';
    $scope.answer = [
        { answerID: '1', answer: 'Family img', genreID: '10751' },
        { answerID: '3', answer: 'Animation img', genreID: '16' },
        { answerID: '4', answer: 'Musicals img', genreID: '10402' },
        { answerID: '5', answer: 'TV Movies img', genreID: '10770' }
    ];
});

app.controller('romanceCtrl', function ($scope) {
    $scope.question = 'What scene do you chill to?';
    $scope.answer = [
        { answerID: '1', answer: 'Romance img', genreID: '10749' },
        { answerID: '2', answer: 'Romantic Comedy img', genreID: '10749 & 35' }
    ];
});

app.controller('docCtrl', function ($scope) {
    $scope.question = 'What do you want to fall asleep to?';
    $scope.answer = [
        { answerID: '1', answer: 'Documentary img', genreID: '99' },
        { answerID: '2', answer: 'Foreign img', genreID: '10769' },
        { answerID: '3', answer: 'History img', genreID: '36' },
        { answerID: '4', answer: 'Western img', genreID: '37' }
    ];
});


app.controller('resultCtrl', function ($scope, $http, $routeParams, services) {
    console.log(services.getSource());
    $http({
        method: 'POST',
        url: 'server.php',
        data: {
            genres : $routeParams.genreID,
            sources : services.getSource()
        }
    }).then(function successCallback(response) {
        $http.get("http://www.omdbapi.com/?i="
            + 'tt0458339' + "&plot=short&r=json&tomatoes=true")
            .then(function(response) {
                $scope.details = response.data; /* stores the JSON data in the details scope */
            });
    }, function errorCallback(response) {
        $scope.results = response.statusText;
    });
});

app.controller('mainCtrl', function ($scope, services) {
    services.clearSource();
});

app.factory('services', function () {
    var sources = [];

    return {
        addSource : addSource,
        getSource : getSource,
        clearSource : clearSource
    };

    function addSource(source) {
        sources.push(source);
    }

    function getSource() {
        if (sources[0] != null) {
            return sources;
        } else {
            return sources = [''];
        }
    }

    function clearSource() {
        sources.length = 0;
    }
});

