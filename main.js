// ********************
// **** SKETCH API ****
// ********************
// github.com/Infinite-Coder-001/Sketch-API

// This is the main file, that is loading in the <head> of your HTML page
// Link to this file is 'https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@[VERSION]/main.js'

function SketchAPIMain(programID, callback) {
    // This function loads main data of a sketch (author, code, creation date, ...)
    function SketchAPIMain2(delay) {
        var timeoutVariable;
        function timeout(delay) {
            SketchAPIMain2(delay + 1);
        }
        function finished() {
            clearTimeout(timeoutVariable);
            callback(LoadSketchAPIMain());
        }
        
        var script = document.createElement('script');
        
        var date = new Date(Date.now() - 1000 * 60 * delay);
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth();
        var day = date.getUTCDate();
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();

        if (String(month).split("").length === 1) {
            month = "0" + String(parseInt(month) + 1);
        }
        if (String(day).split("").length === 1) {
            day = "0" + day;
        }
        if (String(hours).split("").length === 1) {
            hours = "0" + hours;
        }
        if (String(minutes).split("").length === 1) {
            minutes = "0" + minutes;
        }

        script.src = "https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@main/logs/main/log-" + String(programID) + "-" + year + month + day + hours + minutes + ".js";
        script.onload = function() {
            finished();
        };

        document.head.appendChild(script); 
        if (delay < 160) {
            timeoutVariable = setTimeout(function() {
                timeout(delay);
            }, 1000);
        }
    }
    SketchAPIMain2(0);
}

function SketchAPIForks(programID, callback) {
    // This function loads all forks of a sketch (their names, authors, sum of votes and sum of forks)
    function SketchAPIForks2(delay) {
        var timeoutVariable;
        function timeout(delay) {
            SketchAPIForks2(delay + 1);
        }
        function finished() {
            clearTimeout(timeoutVariable);
            callback(LoadSketchAPIForks());
        }
        
        var script = document.createElement('script');
        
        var date = new Date(Date.now() - 1000 * 60 * delay);
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth();
        var day = date.getUTCDate();
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();

        if (String(month).split("").length === 1) {
            month = "0" + String(parseInt(month) + 1);
        }
        if (String(day).split("").length === 1) {
            day = "0" + day;
        }
        if (String(hours).split("").length === 1) {
            hours = "0" + hours;
        }
        if (String(minutes).split("").length === 1) {
            minutes = "0" + minutes;
        }

        script.src = "https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@main/logs/forks/log-" + String(programID) + "-" + year + month + day + hours + minutes + ".js";
        script.onload = function() {
            finished();
        };

        document.head.appendChild(script); 
        if (delay < 160) {
            timeoutVariable = setTimeout(function() {
                timeout(delay);
            }, 1000);
        }
    }
    SketchAPIForks2(0);
}

function SketchAPIFeedbacks(programID, callback) {
    // This function loads all feedbacks for a sketch, but without comments
    function SketchAPIFeedbacks2(delay) {
        var timeoutVariable;
        function timeout(delay) {
            SketchAPIFeedbacks2(delay + 1);
        }
        function finished() {
            clearTimeout(timeoutVariable);
            callback(LoadSketchAPIFeedbacks());
        }
        
        var script = document.createElement('script');
        
        var date = new Date(Date.now() - 1000 * 60 * delay);
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth();
        var day = date.getUTCDate();
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();

        if (String(month).split("").length === 1) {
            month = "0" + String(parseInt(month) + 1);
        }
        if (String(day).split("").length === 1) {
            day = "0" + day;
        }
        if (String(hours).split("").length === 1) {
            hours = "0" + hours;
        }
        if (String(minutes).split("").length === 1) {
            minutes = "0" + minutes;
        }

        script.src = "https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@main/logs/feedbacks/log-" + String(programID) + "-" + year + month + day + hours + minutes + ".js";
        script.onload = function() {
            finished();
        };

        document.head.appendChild(script); 
        if (delay < 160) {
            timeoutVariable = setTimeout(function() {
                timeout(delay);
            }, 1000);
        }
    }
    SketchAPIFeedbacks2(0);
}

function SketchAPIQuestions(programID, callback) {
    // This function loads all questions about a sketch with 1 best answer
    function SketchAPIQuestions2(delay) {
        var timeoutVariable;
        function timeout(delay) {
            SketchAPIQuestions2(delay + 1);
        }
        function finished() {
            clearTimeout(timeoutVariable);
            callback(LoadSketchAPIQuestions());
        }
        
        var script = document.createElement('script');
        
        var date = new Date(Date.now() - 1000 * 60 * delay);
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth();
        var day = date.getUTCDate();
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();

        if (String(month).split("").length === 1) {
            month = "0" + String(parseInt(month) + 1);
        }
        if (String(day).split("").length === 1) {
            day = "0" + day;
        }
        if (String(hours).split("").length === 1) {
            hours = "0" + hours;
        }
        if (String(minutes).split("").length === 1) {
            minutes = "0" + minutes;
        }

        script.src = "https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@main/logs/questions/log-" + String(programID) + "-" + year + month + day + hours + minutes + ".js";
        script.onload = function() {
            finished();
        };

        document.head.appendChild(script); 
        if (delay < 160) {
            timeoutVariable = setTimeout(function() {
                timeout(delay);
            }, 1000);
        }
    }
    SketchAPIQuestions2(0);
}
