function filter_list(l){
	
	var count = l.length;
	console.log('the count is:',count);

	 function loop(){
	 	for(var i=0; i<count; i++){
	 		var type = (typeof l[i]);

	 		if(type == 'string'){
	 			l.splice(i,1);
	 			console.log('the list is',l);
	 			filter_list(l);
	 		}
	 		else{
	 			console.log('this item is',l[i],'the list is',l);
	 		}
	 	}
	 }

	 loop()
}

filter_list([1,2,'a','c','d']);