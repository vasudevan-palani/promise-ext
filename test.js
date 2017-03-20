PromiseExt = require('./index.js');
sleep = require('sleep');
var promise = new PromiseExt(function(resolve, reject) {
    resolve('vasu');
});

console.log("Before sleep");
sleep.sleep(2);
promise.then(function(resp) {
    console.log("in Then");
}, function(resp) {
    console.log("in Reject");
});
