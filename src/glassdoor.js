(function(module){
	var glassdoor = {};

	function Company(args){
    	for (key in args) this[key] = args[key];
  	};

  	glassdoor.loadData = function(company){
  		return new Company(company);
  	}

	//Sample API call: http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=56941&t.k=bPTsEIdyLXk&action=employers&q=Walt%20Disney%20Company
	glassdoor.fetchData = function(companyName, callback){
		var apiId = '56941',
		    apiKey = 'bPTsEIdyLXk',
			apiUrl = 'http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=' + apiId +
			         '&t.k=' + apiKey +
			         '&action=employers&q=' + companyName +
			         '&callback=?';


		$.getJSON(apiUrl, function(data){
			//may or may not want the [0] here. Without it we get an array of related companies back
   			var company = glassdoor.loadData(data.response.employers[0]);
   			console.log(company);

   			//and call the callback, if there is one
   			if(callback){callback();}
		});	         
	}

	module.glassdoor = glassdoor;
})(window)