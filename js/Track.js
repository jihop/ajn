function Track (trackConfig) {

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
        for (var i=trackConfig["NumberOfInitialOpenSegments"]; i<trackConfig["NumberOfSegments"]; i++) {

            var tmpSegment = generateRandomSegment(trackConfig["NumberOfLanes"], trackConfig["ObstacleFrequency"]);
            returnSegments.push(tmpSegment);
        }

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

    self.getSegments = function () {
        return segments;
    }
}

