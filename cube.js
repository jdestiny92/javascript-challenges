// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, 
// the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb) will be an integer m and you have to return the integer n such as 
// n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.


var start = process.argv[2];

function findNb(m){

	m = parseInt(m);
	var series = [1,8];
	var total = 9;
	var base = 2;
	var newCube;

	function calculate(){
		if(m === 9){
			console.log('the answer is n = ' + 2);
		}
		else{
			base = (base+1);
			newCube = Math.pow(base,3);
			series.push(newCube);
			total = total + series[series.length-1];

			if(total < m){
				calculate();
			}
			else if(total > m){
				console.log(' n cannot be represented as a pure integer');
			}
			else{
				var lastNumber = series[series.length-1];
				var cubeRoot = Math.cbrt(lastNumber);
				console.log('the answer is n = ' + cubeRoot);
			}
		}
	}

	calculate();
	
}

findNb(start);