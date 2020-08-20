var Shipping = function() {
  this.company = "";
};

Shipping.prototype = {
  setStrategy: function(company) {
    this.company = company;
  },

  calculate: function(package) {
    return this.company.calculate(package);
  }
};

var UPS = function() {
  this.calculate = function(package) {

  }
};

var USPS = function() {
  this.calculate = function(package) {
    // calculations...
    return "$39.40";
  }
};

var Fedex = function() {
  this.calculate = function(package) {
    // calculations...
    return "$43.20";
  }
};

// log helper

const log = (function() {
  let log = "";

  return {
    add: function(msg) { log += msg + "\n"; },
    show: function() { alert(log); log = ""; }
  }
})();

function run() {
  const package = [1,2,3];


  const ups = new UPS();
  const usps = new USPS();
  const fedex = new Fedex();

  const shipping = new Shipping();

  shipping.setStrategy(ups);
  log.add("UPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(usps);
  log.add("USPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(fedex);
  log.add("Fedex Strategy: " + shipping.calculate(package));

  log.show();
}
run()
