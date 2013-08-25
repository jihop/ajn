function getTrackData(trackConfig) {

    var self = this;
    var trackConfig = trackConfig;
    var segments = (function() {

        var returnSegments = new Array();

        // Initial Open Segments
        for (var i=0; i<trackConfig["NumberOfInitialOpenSegments"]; i++) {

            var tmpSegment = generateRandomSegment(trackConfig["NumberOfLanes"], 0.0);
            returnSegments.push(tmpSegment);
        }

        // Randomly Generated Segments
        for (var i=trackConfig["NumberOfInitialOpenSegments"]; i<trackConfig["NumberOfSegments"]-1; i++) {

            var tmpSegment = generateRandomSegment(trackConfig["NumberOfLanes"], trackConfig["ObstacleFrequency"]);
            returnSegments.push(tmpSegment);
        }

<<<<<<< HEAD
        returnSegments.push(generateBlockageSegment(trackConfig["NumberOfLanes"]));
=======
        for (var i=0; i<10; i++) {
            returnSegments.push(generateFinishlineSegment(trackConfig["NumberOfLanes"]));
        }
>>>>>>> master

        return returnSegments;
    })();

    function generateRandomSegment (numberOfLanes, obstacleFrequency) {

        var tmpSegment = new Array();
        for (var i=0; i<numberOfLanes; i++) {

            if (Math.random() < obstacleFrequency) {
                tmpSegment.push(100);
            } else {
                tmpSegment.push(0);
            }
        }

        return tmpSegment;
    }

<<<<<<< HEAD
    function generateBlockageSegment (numberOfLanes) {

        var tmpSegment = new Array();
        for (var j=0; j<numberOfLanes; j++) {
            tmpSegment.push(1);
=======
    function generateFinishlineSegment (numberOfLanes) {

        var tmpSegment = new Array();
        for (var i=0; i<numberOfLanes; i++) {
            tmpSegment.push(-1);
>>>>>>> master
        }

        return tmpSegment;
    }
<<<<<<< HEAD

=======
>>>>>>> master
	return segments;
}

