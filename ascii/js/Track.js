function Track (lanes) {

    var self = this;
    var obstacles;
    var cars;

    var racecarPosition = 0;

    self.generateSections = function () {

        var sections = new Array();
        sections.push("<span>| | | | | |</span><br/>");
        sections.push("<span>| | | | | |</span><br/>");
        sections.push("<span>| | | | | |</span><br/>");
        sections.push("<span>| | | | | |</span><br/>");
        sections.push("<span>| | | | | |</span><br/>");
        sections.push("<span>| | | | | |</span><br/>");

        for (var i=0; i<10000; i++) {

            if (Math.random() > 0.6) {
                sections.push("<span>| | | | | |</span><br/>");
            } else if (Math.random() > 0.5) {
                sections.push("<span>| | | |o| |</span><br/>");
            } else {
                sections.push("<span>| |o| | | |</span><br/>");
            }
        }

        console.log("Created section with length:" + sections.length);

        return sections;
    }

    self.getTrackSegment = function (yardmark, length) {

        console.log("sections length:" + sections.length);
        console.log("yardmark:" + yardmark);
        console.log("length:" + length);
        return sections.slice(yardmark, length);
    }

    self.getRacecarPosition = function () {
        return racecarPosition;
    }

    self.updateRacecarPosition = function (diff) {
        racecarPosition += diff;
    }

    var sections = self.generateSections(); // array of "| | | | | |"
}

