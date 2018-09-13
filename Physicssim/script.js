function initCanvas(context, h, w) {
	context.clearRect(0, 0, w, h)
	context.fillStyle = "#ececec";
	//context.fillStyle="#fff";
	context.fillRect(0, 0, w, h);
	console.log(h, w);
}

var stopSimulation = false;
var simIndex = 0;

function showDisque() {
	iterDisque(0)
	//console.log(1/itspeed);
}

function iterDisque(iteration) {
	if(!stopSimulation) {
		console.log(iteration);
		iterIndexDiv.innerText = iteration;
		if(iteration<it) {
			setTimeout(function(){iterDisque(iteration+1);}, 1000*(1/itspeed));
		}
	}
}

function showTrajectoire() {

}

function showRoue() {

}

function FstartSimulation() {
	stopSimulation = false;
	console.log("Starting simulation "+simIndex)
	if(simIndex == 0)	   showDisque();
	else if(simIndex == 1) showTrajectoire();
	else if(simIndex == 2) showRoue();
}

function FstopSimulation() {
	stopSimulation = true;
	console.log("Stopping simulation")
	iterIndexDiv.innerText = "0";
}

function FselectSimulation(index) {
	simIndex = index;
}

function showMarker(x, y) {
	context.line
}