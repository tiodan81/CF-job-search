var fakeData = [
  {
  	"company": "Disney",
  	"state": "WA",
  	"city": "Seattle",
  	"country": "United States",
  	"size": "small",
  	"lastHire": "8/5/2014",
  	"salary": 72500,
    "ios": 3,
    "ruby": 5,
    "js": 7,
    "python": 0,
    "ux": 1,
    "url": "http://www.disney.com"
  },
  {
  	"company": "Amazon",
  	"state": "NV",
  	"city": "Las Vegas",
  	"country": "United States",
  	"size": "huge",
  	"lastHire": "6/1/2015",
  	"salary": 64000,
    "ios": 0,
    "ruby": 1,
    "js": 4,
    "python": 9,
    "ux": 3,
    "url": "http://www.amazon.com"
  },
  {
  	"company": "Microsoft",
  	"state": "WA",
  	"city": "Seattle",
  	"country": "United States",
  	"size": "huge",
  	"lastHire": "3/1/2015",
  	"salary": 81000,
    "ios": 2,
    "ruby": 4,
    "js": 1,
    "python": 3,
    "ux": 1,
    "url": "http://www.microsoft.com"
  },
  {
  	"company": "eBay",
  	"state": "OR",
  	"city": "Portland",
  	"country": "United States",
  	"size": "51 - 200",
  	"lastHire": "5/1/2015",
  	"salary": 68000,
    "ios": 8,
    "ruby": 6,
    "js": 8,
    "python": 5,
    "ux": 3,
    "url": "http://www.ebay.com"
  },
  {
  	"company": "PayPal",
  	"state": "WA",
  	"city": "Kirkland",
  	"country": "United States",
  	"size": "small",
  	"lastHire": "2/13/2015",
  	"salary": 72000,
    "ios": 8,
    "ruby": 2,
    "js": 0,
    "python": 1,
    "ux": 5,
    "url": "http://www.paypal.com"
  },
  {
  	"company": "Google",
  	"state": "",
  	"city": "Washington D.C.",
  	"country": "United States",
  	"size": "small",
  	"lastHire": "5/27/2014",
  	"salary": 76800,
    "ios": 7,
    "ruby": 4,
    "js": 5,
    "python": 4,
    "ux": 2,
    "url": "http://www.google.com"
  },
  {
  	"company": "Yahoo",
  	"state": "",
  	"city": "London",
  	"country": "United Kingdom",
  	"size": "large",
  	"lastHire": "6/1/2015",
  	"salary": 74000,
    "ios": 8,
    "ruby": 5,
    "js": 9,
    "python": 6,
    "ux": 5,
    "url": "http://www.yahoo.com"
  },
  {
  	"company": "Facebook",
  	"state": "MA",
  	"city": "Boston",
  	"size": "medium",
  	"country": "United States",
  	"lastHire": "11/20/2015",
  	"salary": 97000,
    "ios": 9,
    "ruby": 3,
    "js": 0,
    "python": 5,
    "ux": 4,
    "url": "http://www.facebook.com"
  },
  {
  	"company": "Salesforce",
  	"state": "MA",
  	"city": "Medford",
  	"country": "United States",
  	"size": "medium",
  	"lastHire": "",
  	"salary": 100000,
    "ios": 2,
    "ruby": 0,
    "js": 5,
    "python": 8,
    "ux": 5,
    "url": "http://www.salesforce.com"
  },
  {
  	"company": "Expedia",
  	"state": "CA",
  	"city": "Oceanside",
  	"country": "United States",
  	"size": "huge",
  	"lastHire": "1/19/2015",
  	"salary": 85000,
    "ios": 1,
    "ruby": 2,
    "js": 26,
    "python": 3,
    "ux": 4,
    "url": "http://www.expedia.com"
  },
  {
  	"company": "Apple",
  	"state": "CA",
  	"city": "San Francisco",
  	"country": "United States",
  	"size": "tiny",
  	"lastHire": "04/01/2014",
  	"salary": 155000,
    "ios": 11,
    "ruby": 0,
    "js": 3,
    "python": 2,
    "ux": 7,
    "url": "http://www.apple.com"
  }
];

module.exports = function(app) {
  app.factory('jobData', function() {
    return {
      getJobs: function() {
        return fakeData;
      }
    };
  });
};
