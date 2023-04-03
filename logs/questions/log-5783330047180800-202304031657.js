function LoadSketchAPIQuestions() {
    return [{"content":"So the Hotlist API gets the programs from the hot list, and the Sketch API gets the program by its id?\nOn another note, are you ever going to unify all of these APIs into one grand post-KA API?","author":{"nickname":"Archbirdplus","link":"https://www.khanacademy.org/profile/kaid_142152517100107888031317","avatar":"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"},"posted":"2023-03-26T06:33:34.271327Z","expandKey":"ag5zfmtoYW4tYWNhZGVteXJACxIIVXNlckRhdGEiHWthaWRfMTQyMTUyNTE3MTAwMTA3ODg4MDMxMzE3DAsSCEZlZWRiYWNrGICA09iwtt4IDA","flags":{"flags":null,"flaggedBy":null},"voteCount":2,"answer":{"content":"Yes, exactly. \nInteresting idea. I'll think about it.","author":{"nickname":"Infinite coder","link":"https://www.khanacademy.org/profile/kaid_643015938786727315236008","avatar":"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"},"posted":"2023-03-26T09:32:00.382082Z","expandKey":"ag5zfmtoYW4tYWNhZGVteXJACxIIVXNlckRhdGEiHWthaWRfNjQzMDE1OTM4Nzg2NzI3MzE1MjM2MDA4DAsSCEZlZWRiYWNrGICA07j0xqIKDA","flags":{"flags":null,"flaggedBy":null},"voteCount":1}},{"content":"How can I fetch votes and is there full documentation?","author":{"nickname":"21262","link":"https://www.khanacademy.org/profile/kaid_19721081897200672399859","avatar":"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"},"posted":"2023-03-26T02:22:21.778052Z","expandKey":"ag5zfmtoYW4tYWNhZGVteXI_CxIIVXNlckRhdGEiHGthaWRfMTk3MjEwODE4OTcyMDA2NzIzOTk4NTkMCxIIRmVlZGJhY2sYgIDT-Lq95wkM","flags":{"flags":null,"flaggedBy":null},"voteCount":2,"answer":{"content":"I'm sorry, I didn't have time to write the full documentation yet :( I'll do my best to do it. Here's the code, that you need: \n```\n&lt;!DOCTYPE html>\n&lt;html>\n    &lt;head>\n        &lt;meta charset=\"utf-8\">\n        &lt;title>New webpage&lt;/title>\n        &lt;script src = \"*I CAN*'*T SEND LINKS BECAUSE OF THE SPAM FILTER*\">&lt;/script>\n    &lt;/head>\n    &lt;body>\n        &lt;p id = \"demo\">&lt;/p>\n        &lt;script>\n            function cb(data) {\n                document.getElementById(\"demo\").innerHTML = data.voteCount;\n            }\n            SketchAPIMain(5234045946740736, cb);\n        &lt;/script>\n    &lt;/body>\n&lt;/html>\n```\nReplace 5234045946740736 with your program ID.","author":{"nickname":"Infinite coder","link":"https://www.khanacademy.org/profile/kaid_643015938786727315236008","avatar":"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"},"posted":"2023-03-26T19:07:15.603387Z","expandKey":"ag5zfmtoYW4tYWNhZGVteXJACxIIVXNlckRhdGEiHWthaWRfNjQzMDE1OTM4Nzg2NzI3MzE1MjM2MDA4DAsSCEZlZWRiYWNrGICA09i1tYMLDA","flags":{"flags":null,"flaggedBy":null},"voteCount":1}},{"content":"I noticed that you have this in your code:\n```script.src = \"https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@main/logs/feedbacks/log-\" + String(programID) + \"-\" + year + month + day + hours + minutes + \".js\";```\nHow exactly does the `year + month + day + hours + minutes` work? I tried it by manually entering the date and time, but it didn't show anything.","author":{"nickname":"Electric Dolphin ⚡️🐬","link":"https://www.khanacademy.org/profile/kaid_1188776231699286995947997","avatar":"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"},"posted":"2023-03-27T12:03:57.559667Z","expandKey":"ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfMTE4ODc3NjIzMTY5OTI4Njk5NTk0Nzk5NwwLEghGZWVkYmFjaxiAgNP4uvaBCww","flags":{"flags":null,"flaggedBy":null},"voteCount":1}];
}