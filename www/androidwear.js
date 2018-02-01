/* global cordova */

var exec = cordova.require('cordova/exec'),
    service = "androidwear";

var AndroidWear = function() {};

AndroidWear.prototype.onConnect = function(win, fail) {
    exec(win, fail, service, "onConnect", []);
};

AndroidWear.prototype.onDataReceived = function(handle, win, fail) {
    exec(win, fail, service, "onDataReceived", [handle]);
};

AndroidWear.prototype.onError = function(handle, win, fail) {
    exec(win, fail, service, "onError", [handle]);
};

AndroidWear.prototype.sendData = function(handle, data, win, fail) {
    exec(win, fail, service, "sendData", [handle, data]);
};

var androidwear = new AndroidWear();
module.exports = androidwear;
