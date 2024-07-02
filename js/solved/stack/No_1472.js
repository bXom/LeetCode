/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.backP = [];
    this.forwardP = [];
    this.current = homepage;
    return this;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    if (this.current) this.backP.push(this.current);
    this.current = url;
    this.forwardP = [];
    console.log(`visit B:`, this.backP);
    console.log(`visit F:`, this.forwardP);
    return null;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    while (steps) {
        let p = this.backP.pop();
        if (!p) {
            break;
        } else {
            if (this.current) this.forwardP.push(this.current);
            this.current = p ? p : this.current;
        }
        steps--;
    }
    console.log(`back B:`, this.backP);
    console.log(`back F:`, this.forwardP);
    return this.current;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    while (steps) {
        let p = this.forwardP.pop();
        if (!p) {
            break;
        } else {
            if (this.current) this.backP.push(this.current);
            this.current = p ? p : this.current;
        }
        steps--;
    }
    console.log(`forward B:`, this.backP);
    console.log(`forward F:`, this.forwardP);
    return this.current;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */