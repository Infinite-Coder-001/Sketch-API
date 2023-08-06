function LoadSketchAPIMain() {
    return {"title":"Sketch API","author":{"nickname":"Infinite coder","link":"https://www.khanacademy.org/profile/markusprograms/"},"size":{"width":400,"height":600},"link":"https://www.khanacademy.org/computer-programming/sketch-api/5783330047180800","img":"https://www.khanacademy.org/computer-programming/sketch-api/5783330047180800/5694124306251776.png","created":"2023-03-25T20:55:56.706265Z","flags":{"flags":null,"flaggedBy":null},"type":"webpage","code":"&lt;!DOCTYPE html>\n&lt;html>\n    &lt;head>\n        &lt;meta charset=\"utf-8\">\n        &lt;title>Sketch API&lt;/title>\n        \n        &lt;script src = \"https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@1/main.js\">&lt;/script>\n        \n        &lt;style>\n            body {\n                background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Good_Morning_From_the_International_Space_Station.jpg/1024px-Good_Morning_From_the_International_Space_Station.jpg\");\n                background-attachment: fixed;\n                font-family: \"Source Sans Pro\", sans-serif;\n            }\n            #title {\n                color: white;\n                text-align: center;\n                font-size: 100px;\n                text-decoration: underline;\n                margin-top: 180px;\n                margin-bottom: 30px;\n                text-shadow: 2px 2px grey;\n                padding: 0;\n            }\n            #title2 {\n                color: white;\n                text-align: center;\n                font-size: 40px;\n                text-decoration: none;\n                text-shadow: 0 0 5px lightblue;\n                margin-left: 10px;\n                margin-right: 10px;\n                padding: 0;\n                margin-bottom: 220px;\n            }\n            article {\n                background-color: rgba(255, 255, 255, .8);\n                backdrop-filter: blur(5px);\n                border-radius: 15px;\n                white-space: pre-wrap;\n                padding-left: 10px;\n                padding-right: 10px;\n            }\n            h1 {\n                padding-top: 10px;\n                padding-bottom: 0;\n                margin-bottom: 0;\n                font-size: 40px;\n                text-decoration: underline;\n                text-align: center;\n            }\n            h2 {\n                font-size: 25px;\n            }\n            pre {\n                background-color: black;\n                color: white;\n                padding: 10px;\n                overflow: auto;\n                max-height: 300px;\n            }\n            .output {\n                background-color: white;\n                border: 1px solid black;\n                padding: 10px;\n                overflow: auto;\n                width: calc(100vw - 75px);\n                height: 300px;\n                margin-top: -12px;\n                font-family: \"Times New Roman\", Times, serif;\n            }\n            .inlineCode {\n                background-color: black;\n                color: white;\n                font-family: monospace;\n                padding: 2px;\n                border-radius: 4px;\n            }\n        &lt;/style>\n    &lt;/head>\n    &lt;body>\n        &lt;h1 id = \"title\">Sketch API&lt;/h1>\n        &lt;h1 id = \"title2\">API for loading sketch data&lt;/h1>\n        \n        &lt;article>&lt;h1>Sketch API&lt;/h1>&lt;h2>About&lt;/h2>Sketch API loads data of programs on Khan Academy. It's very similiar to KA API, just with one difference -> it works :D\n        \nThis quick tutorial will show you, how to setup Sketch API for your program. If you want to learn more about it, go to it's official documentation on Github: \n&lt;a href = \"https://github.com/Infinite-Coder-001/Sketch-API/wiki\">https://github.com/Infinite-Coder-001/Sketch-API/wiki&lt;/a>&lt;h2>Allowed? &lt;/h2>When you're using this API, your sketch only connects to Jsdelivr and that's allowed by KA guidelines. So don't worry, you won't be banned. &lt;h2>Credits&lt;/h2>&lt;b>WKoA&lt;/b> - help with Github Actions\n&lt;b>Infinite coder&lt;/b> - everything else\n\nI you import this API from it's CDN on Jsdelivr, you don't have to give credit anywhere else in the code. &lt;h2>Setup&lt;/h2>Let's setup the API now! Go to Tips&Thanks and find a thread, that says '>>> &lt;b>Here send your program IDs&lt;/b> &lt;&lt;&lt;'. Comment there this: \n&lt;pre>\n&lt;&lt;span style = \"color:red\">YOUR-PROGRAM-ID&lt;/span>>\n&lt;/pre>Replace &lt;span style = \"color:red\">YOUR-PROGRAM-ID&lt;/span> with ID of the program, that you will access through the API. So if you have a program, that will load code of another program, put there the ID of the program, that will be accessed. \n\nAfter you do that, you will be able to access the program through the API. \n&lt;i>Note: It might take up to 10 minutes, before it starts working, so please be patient. &lt;/i>&lt;h2>Importing&lt;/h2>Now you can use the API. To import the API, put this in the &lt;head> of the HTML page and then use the API&lt;pre>\n&lt;script src = \"https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@1/main.js\">&lt;/script>\n&lt;/pre>&lt;h2>Functions&lt;/h2>After you load the API library from Jsdelivr, you will be able to use these functions: &lt;ul>&lt;li>&lt;span class = \"inlineCode\">SketchAPIMain(id, callback);&lt;/span> - loads author, code, creation date, flags, sum of votes and sum of forks of a program&lt;/li>&lt;li>&lt;span class = \"inlineCode\">SketchAPIForks(id, callback);&lt;/span> - loads forks names, authors, sums of votes and sums of forks of a program&lt;/li>&lt;li>&lt;span class = \"inlineCode\">SketchAPIFeedbacks(id, callback);&lt;/span> - loads feedbacks of a program (limited to 300, without comments)&lt;/li>&lt;li>&lt;span class = \"inlineCode\">SketchAPIQuestions(id, callback);&lt;/span> - loads questions and 1 best answer about a program (limited to 300 questions)&lt;/li>&lt;/ul>The 'id' is the ID of the program, that will be accessed. The 'callback' is a function, that will be called after the data is loaded. &lt;h2>Examples&lt;/h2>&lt;b>Loading code of another program: &lt;/b>\n&lt;pre>\n&lt;!DOCTYPE html>\n&lt;html>\n    &lt;head>\n        &lt;meta charset=\"utf-8\">\n        &lt;title>Sketch API example&lt;/title>\n        &lt;script src = \"https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@1/main.js\">&lt;/script>\n    &lt;/head>\n    &lt;body>\n        &lt;p id = \"demo\">&lt;/p>\n        &lt;script>\n            function callback(data) {\n                var element = document.getElementById(\"demo\").innerHTML = data.code;\n            }\n            SketchAPIMain(5234045946740736, callback);\n        &lt;/script>\n    &lt;/body>\n&lt;/html>\n&lt;/pre>&lt;div class = \"output\">&lt;p id = \"demo\">Loading...&lt;/p>&lt;script>\n    function callback(data) {\n        var element = document.getElementById(\"demo\").innerHTML = data.code;\n    }\n    SketchAPIMain(5234045946740736, callback);\n    setTimeout(function() {\n        SketchAPIMain(5234045946740736, callback);\n    }, 1000);\n&lt;/script>&lt;/div>\nThis loads code from sketch with ID 5234045946740736. &lt;br>&lt;br>&lt;b>Load questions: &lt;/b>\n&lt;pre>\n&lt;!DOCTYPE html>\n&lt;html>\n    &lt;head>\n        &lt;meta charset=\"utf-8\">\n        &lt;title>New webpage&lt;/title>\n        &lt;script src = \"https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@1/main.js\">&lt;/script>\n    &lt;/head>\n    &lt;body>\n        &lt;div id = \"demo\">&lt;/div>\n        &lt;script>\n            var c = document.getElementById(\"demo\");\n            function cb(data) {\n                var content = \"\";\n                for (var i = 0; i &lt; data.length; i ++) {\n                    content += \"&lt;p>Q (\" + data[i].author.nickname + \"): \" + data[i].content + \"&lt;/p>\";\n                    if (data[i].answer) {\n                        content += \"&lt;p>&nbsp;&nbsp;&nbsp;&nbsp;A (\" + data[i].answer.author.nickname + \"): \" + data[i].answer.content + \"&lt;/p>\";\n                    }\n                    content += \"&lt;hr>\";\n                }\n                c.innerHTML = content;\n            }\n            SketchAPIQuestions(5783330047180800, cb);\n        &lt;/script>\n    &lt;/body>\n&lt;/html>\n&lt;/pre>&lt;div class = \"output\">&lt;div id = \"demo2\">None yet. &lt;/div>\n        &lt;script>\n            var c = document.getElementById(\"demo2\");\n            function cb(data) {\n                var content = \"\";\n                for (var i = 0; i &lt; data.length; i ++) {\n                    content += \"&lt;p>Q (\" + data[i].author.nickname + \"): \" + data[i].content + \"&lt;/p>\";\n                    if (data[i].answer) {\n                        content += \"&lt;p>&nbsp;&nbsp;&nbsp;&nbsp;A (\" + data[i].answer.author.nickname + \"): \" + data[i].answer.content + \"&lt;/p>\";\n                    }\n                    content += \"&lt;hr>\";\n                }\n                c.innerHTML = content;\n            }\n            SketchAPIQuestions(5783330047180800, cb);\n        &lt;/script>&lt;/div>&lt;h2>!IMPORTANT!&lt;/h2>When you display someone else's code, don't forget to give credit. Also give credit, when you're displaying questions, answers and replies. Don't evaluate the code, you load through the API, it might break your program. &lt;h2>Bugs&lt;/h2>If you find a bug, please report it ASAP in Tips&Thanks. Thanks. &lt;h2>Questions&lt;/h2>If you have any questions, feel free to ask in Questions section. &lt;h1>That's all! &lt;/h1>\n        &lt;/article>\n    &lt;/body>\n&lt;/html>","voteCount":16,"forkCount":4};
}