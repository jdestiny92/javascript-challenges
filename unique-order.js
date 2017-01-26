// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]




var list = 'AAAABBBCCDAABBB';
// var list = [1,2,2,3,3];

if(typeof list === 'string'){
	list = list.toString();
	list = list.split('');
	console.log(list);
}

var start = list[0];
//console.log(start);

function uniqueOrder(){

	var index = list.indexOf(start);
	//console.log(index);

	if(list.indexOf(start)===list.length-1){
		console.log(list);
	}
	else if(list[index+1]===start){
		list.splice(index+1,1);
		uniqueOrder();
	}
	else{
		start = list[index+1];
		uniqueOrder();
	}	
	
}

uniqueOrder();

