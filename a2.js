var fs = require('fs');

fs.readFile('info.txt',function(err,data){
	if(err){
		
	}
	console.log('The file data is');
	console.log(data.toString());
});