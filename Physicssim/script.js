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
	for(var _it=0;_it<it;_it++) {
		setTimeout(iterDique(_it), 1000*(_it*(1/itspeed)));
	}
	console.log(1/itspeed);
}

function iterDique(iteration) {
	console.log(iteration);
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
}

function FselectSimulation(index) {
	simIndex = index;
}

function showMarker(x, y) {
	context.line
}