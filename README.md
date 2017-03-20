## Synopsis

PromiseExt is a wrapper on top of promise, which will not execute the promise executor until <>.then() is called.

## Code Example

```
PromiseExt = require('promise-ext');
var promise = new PromiseExt(function(resolve, reject) {
    resolve({data:'sample'});
});

promise.then(function(resp) {
    console.log("in Then");
}, function(resp) {
    console.log("in Reject");
});


```

## Installation


Step1 :
```
npm install promise-ext
```

Step2 :

```
PromiseExt = require('promise-ext');

// then start using PromiseExt like Promise

```

## License

MIT License.
