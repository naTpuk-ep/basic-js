const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (this.chain[position-1]) {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = [];
      throw new CustomError('invalid position');
    }
    return chainMaker
  },

  reverseChain() {
    this.chain.reverse();
    return chainMaker
  },

  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    console.log(this.chain);
    return res;
  }
};

module.exports = chainMaker;
