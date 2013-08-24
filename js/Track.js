function Track (trackConfig) {

    var self = this;
    var trackConfig = trackConfig;
    var sections = (function() {

        var returnSections = new Array();

        // Initial Open Sections
        for (var i=0; i<trackConfig["NumberOfInitialOpenSections"]; i++) {

            var tmpSection = generateRandomSection(trackConfig["NumberOfLanes"], 0.0);
            returnSections.push(tmpSection);
        }

        // Randomly Generated Sections
        for (var i=trackConfig["NumberOfInitialOpenSections"]; i<trackConfig["NumberOfSections"]; i++) {

            var tmpSection = generateRandomSection(trackConfig["NumberOfLanes"], trackConfig["ObstacleFrequency"]);
            returnSections.push(tmpSection);
        }

        return returnSections;

    })();

    function generateRandomSection (numberOfLanes, obstacleFrequency) {

        var tmpSection = new Array();
        for (var i=0; i<numberOfLanes; i++) {

            if (Math.random() < obstacleFrequency) {
                tmpSection.push(100);
            } else {
                tmpSection.push(0);
            }
        }

        return tmpSection;
    }

    self.getSections = function () {
        return sections;
    }
}

