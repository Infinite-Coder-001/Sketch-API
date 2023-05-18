# Sketch API
This repository downloads data from **sketches** on **Khan Academy** (votes, forks, code, comments, ...). The data **can be simply accessed from any KA program**. 

## Versions
| **Version** |                                             **Description**                                             | **Still works** |
|:-----------:|:-------------------------------------------------------------------------------------------------------:|:---------------:|
|1            |First version, can load main, forks, feedbacks (without comments) and questions of a program.            |YES              |

## Setup
To setup this API for your project, go here: https://www.khanacademy.org/computer-programming/sketch-api/5783330047180800 <br>
Find a thread, that says `>>> Here send your program IDs <<<`. Send there this comment: 
```
<YOUR_PROGRAM_ID>
```
*Note*: Replace `YOUR_PROGRAM_ID` with your program id :) <br><br><br>
After doing that, the API will start logging data of your program. <br>
*Note*: It might take up to 10 minutes. 

## First steps
Let's begin using the API! 
 1. Create a new webpage on Khan Academy. 
 2. Add `<script src = "https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@[VERSION]/main.js"></script>` to the `<head>`. <br>
    *Note*: Replace `[VERSION]` with the version, that you want to use. 
 3. Add an empty paragraph to `<body>` with id `demo`. 
 4. Add a `<script>` to the `<body>` and use the API! 
 
**Example**: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sketch API example</title>
        <script src = "https://cdn.jsdelivr.net/gh/Infinite-Coder-001/Sketch-API@1/main.js"></script>
    </head>
    <body>
        <p id = "demo"></p>
        <script>
            function callback(data) {
                var element = document.getElementById("demo").innerHTML = data.code;
            }
            SketchAPIMain(5234045946740736, callback);
        </script>
    </body>
</html>
```
## Functions
This library contains these functions: 
 - `SketchAPIMain(id, callback);` - loads author, code, creation date, flags, sum of votes and sum of forks of a program
 - `SketchAPIForks(id, callback);` - loads forks names, authors, sums of votes and sums of forks of a program
 - `SketchAPIFeedbacks(id, callback);` - loads feedbacks of a program (limited to 300, without comments)
 - `SketchAPIQuestions(id, callback);` - loads questions and 1 best answer about a program (limited to 300 questions) 

To see full documentation, please go to wiki. 

## Questions
If you have any questions, please: 
 - Look into wiki
 - Look into discussions, if somebody didn't answer the question already
 - If you still can't find the answer, go to discussions and ask me
 
## Bugs
If you found a vulnerelabity, please report it as soon as possible in Issues. 
If something isn't working, check, if: 
 - you setup the API correctly (see setup)
 - you didn't forget to import the library
 - you don't have a mistake in your code
 - you don't have restricted access to Jsdelivr (schools often have that)
 - somebody didn't report the bug yet
Otherwise, please report the bug in Issues. 
 
## Credits
**Sprout** - help with Github Action setup <br>
**Infinite coder** - everything else

---

**Copyright (c) 2023 Infinite coder** <br>
See LICENSE
