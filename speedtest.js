
/**
* SpeedTest 
* find average speed of a given code block (testImplement)
*/

function SpeedTest(testImplement, testParams, repetitions){
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 10000;
};

SpeedTest.prototype = {
	startTest: function(){
		var beginTime, endTime, sumTimes = 0;
		for (var i=0, x = this.repetitions; i<x; i++){
			beginTime = +new Date();
			this.testImplement( this.testParams );
			endTime = +new Date();
			sumTimes += endTime-beginTime;
		}
		this.average = sumtTimes / this.repetitions;
		return console.log("Average execution across " + this.repetitions + ": " + this.average);
	}
};


/**
* check to see if data is in fact a number
*/
function isaNumber(data){

	return ( typeof data === "number" && !isNaN(data) );
};
