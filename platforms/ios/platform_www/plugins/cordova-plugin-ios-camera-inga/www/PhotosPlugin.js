cordova.define("cordova-plugin-ios-camera-inga.PhotosPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.cordovaGetFileContents = function(arg0, success, error) {
    exec(success, error, "PhotosPlugin", "cordovaGetFileContents", [arg0]);
};

});
