// use the filter function to filter arrays
// the filter method creates an array filled with all array elements that pass a test
// array.filter(function(currentValue, index, arr), thisValue)
// the currentValue is the only required parameter


var list = [1, 2, 'a', 'c', 'd'];

function filterString(){

	var newList = list.filter(function(currentElement){

			return typeof i !== 'string'

		});

	console.log(newList);
}

filterString();