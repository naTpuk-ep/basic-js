const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here
    
    this.chain.push(`( ${value} )`);

    return chainMaker

  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here

    if (this.chain[position-1]) {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = [];
      throw new CustomError('invalid position');
    }

    return chainMaker

  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here

    this.chain.reverse();

    return chainMaker

  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here
    let res = this.chain.join('~~');
    this.chain = [];
    console.log(this.chain);
    return res;
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));

module.exports = chainMaker;
