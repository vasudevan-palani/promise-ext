PromiseExt = function(fn) {

    this.promisefn = fn;

    this.then = function(resolvefn, rejectfn) {
        this.promise = new Promise(this.promisefn);
        this.promise.then(resolvefn, rejectfn);
    }

}

module.exports = PromiseExt;
