(function(module){
	var glassdoor = {};

	//Sample API call: http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=56941&t.k=bPTsEIdyLXk&action=employers&q=Walt%20Disney%20Company
	glassdoor.fetchData = function(companyName, callback){
		var apiId = '56941',
		    apiKey = 'bPTsEIdyLXk',
			apiUrl = 'http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=' + apiId +
			         '&t.k=' + apiKey +
			         '&action=employers&q=' + companyName +
			         '&callback=?';


		$.getJSON(apiUrl, function(result){
   			console.log(result);
		});	         


		if(callback){callback();}
	}

	module.glassdoor = glassdoor;
})(window)