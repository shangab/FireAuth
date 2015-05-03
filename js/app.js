var app = angular.module('authApp', ['firebase']);
var fireBaseUrl='https://shangab.firebaseio.com/';
app.controller('Ctrl', function ($scope, $firebaseArray) {
    var ref = new Firebase(fireBaseUrl+ 'users');
    $scope.users = $firebaseArray(ref);
    
    $scope.loginFacebook = function () {
        var ref = new Firebase(fireBaseUrl);
        ref.authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                $scope.user = {uid: authData.uid, method: 'facebook', name: authData.facebook.displayName, picture: authData.facebook.cachedUserProfile.picture.data.url};
                console.log($scope.user);
                $scope.users.$add('Facebook User: ',$scope.user);
            }
        });
    };
    $scope.loginGithub = function () {
        var ref = new Firebase(fireBaseUrl);
        ref.authWithOAuthPopup("github", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                $scope.user = {uid: authData.uid, method: 'github', name: authData.github.displayName, picture: authData.github.cachedUserProfile.avatar_url};
                console.log($scope.user);
                $scope.users.$add('Github User: ',$scope.user);
            }
        });
    };
    $scope.loginGoogle = function () {
        var ref = new Firebase(fireBaseUrl);
        ref.authWithOAuthPopup("google", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                $scope.user = {uid: authData.uid, method: 'google', name: authData.google.displayName, picture: authData.google.cachedUserProfile.picture};
                console.log('Google User: ', $scope.user);
                $scope.users.$add($scope.user);
            }
        });
    };
    $scope.loginTwitter = function () {
        var ref = new Firebase(fireBaseUrl);
        ref.authWithOAuthPopup("twitter", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log(authData);
                $scope.user = {uid: authData.auth.uid, method: 'twitter', name: authData.twitter.displayName, picture: authData.twitter.cachedUserProfile.profile_image_url};
                console.log('Twitter User: ', $scope.user);
                $scope.users.$add($scope.user);
            }
        });
    };
});
