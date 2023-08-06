function LoadSketchAPIMain() {
    return {"title":"The History of KA","author":{"nickname":"21262","link":"https://www.khanacademy.org/profile/Dev21262/"},"size":{"width":400,"height":600},"link":"https://www.khanacademy.org/computer-programming/the-history-of-ka/6015879993671680","img":"https://www.khanacademy.org/computer-programming/the-history-of-ka/6015879993671680/6197940570341376.png","created":"2022-05-19T12:26:42.3594Z","flags":{"flags":null,"flaggedBy":null},"type":"ace_webpage","code":"&lt;!DOCTYPE html>\n&lt;!--\nThe History of Khan Academy\n\"Potential is everywhere. Access is not.\"  #HTMLForever\n\nCredits\n1.  Blue Bird for Historical Thumbnail Script\n\nColour Scheme Below If you need it :) -\n#0A2A66 - +2016 KA Blue Colour\n#FFFFFF - +2016 KA White Colour\n#14BF96 - +2016 KA Slate Green Colour\n#606060 - +2008 and -2016 Black Colour\n#fafafa - +2008 and -2016 White Colour\n#9EB63A - +2008 and -2016 Green Colour\n-->\n&lt;html>\n    &lt;head>\n        &lt;meta charset=\"utf-8\">\n        &lt;title>The History of KA&lt;/title>\n        &lt;link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n        &lt;link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n        &lt;link href=\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap\" rel=\"stylesheet\">\n       &lt;link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n&lt;link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n&lt;link href=\"https://fonts.googleapis.com/css2?family=Lobster&display=swap\" rel=\"stylesheet\">\n        &lt;style>\n            * {\n                margin: 0;\n                padding: 0;\n                transition: all 0.35s;\n                box-sizing: border-box;\n            }\n            \n            body {\n                width: 100vw;\n                height: 100vh;\n                overflow-x: hidden;\n                font-family: 'Lato', sans-serif;\n            }\n            \n            button {\n                border: none;\n                padding: 10px;\n                width: 150px;\n                color: white;\n                font-size: 20px;\n                font-weight: 600;\n                background: #BDD239;\n                border:3px solid #BDD239;\n            }\n            \n            button:hover {\n                color: #BDD239;\n                cursor: pointer;\n                background: white;\n                border: 3px solid #BDD239;\n            }\n        &lt;/style>\n        &lt;style>\n            #year {\n                color: white;\n                width: 100vw;\n                height: 100vh;\n                display: flex;\n                font-size: 40px;\n                align-items: center;\n                justify-content: center;\n                background-color: #9EB63A;\n                text-shadow: 0px 0px 15px white;\n            }\n            \n            #yearNo {\n                animation: yearlyAnim 0.4s linear;\n                -webkit-animation: yearlyAnim 0.4s linear; \n                animation-fill-mode: forwards;\n                animation-delay: 0.5s;\n            }\n            \n            #continue {\n                width: 100vw;\n                height: 100vh;\n                display: flex;\n                color: white;\n                font-size: 25px;\n                text-align: center;\n                align-items: center;\n                flex-direction: column;\n                justify-content: center;\n                text-shadow: -2px 2px 3px black;\n                background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Khan_Academy_Logo_Old_version_2015.jpg/600px-Khan_Academy_Logo_Old_version_2015.jpg?20150703221049\");\n            }\n        &lt;/style>\n        &lt;style>\n            .curtain {\n                top: 0;\n                left: 0;\n                z-index: 2;\n                width: 100vw;\n                display: none;\n                background: white;\n                position: absolute;\n                animation: heightE 1s ease;\n                -webkit-animation: heightE 1s ease;\n                animation-fill-mode: forwards;\n            }\n        \n            .slideshow {\n                width: 100vw;\n                height: 100vh;\n                display: none;\n                padding: 50px;\n                color:#606060;\n                background-color: #fafafa;\n                animation: opacer 1s ease;\n                -webkit-animation: opacer 0.6s ease;\n            }\n            \n            .opacA {\n                animation: opacerR 1.4s linear;\n                -webkit-animation: opacerR 1.4s linear;\n            }\n            \n            .textUpA {\n                opacity: 0;\n                animation: upTxtAnim 0.5s ease;\n                -webkit-animation: upTxtAnim 0.5s ease;\n                animation-fill-mode: forwards;\n                animation-delay: 0.25s;\n            }\n            \n            .textLeftA {\n                opacity: 0;\n                animation: upTxtAnim 0.5s ease;\n                -webkit-animation: leftTxtAnim 0.5s ease;\n                animation-fill-mode: forwards;\n                animation-delay: 0.5s;                \n            }\n            \n            .yearMoveA {\n                 animation: broWhatsThisYear 2s linear infinite alternate;\n                 -webkit-animation: broWhatsThisYear 2s linear infinite alternate;\n            }\n            \n            .scalerA {\n                animation: scalerGOBOOM 0.6s linear;\n                -webkit-animation: scalerGOBOOM 0.6s linear;\n                animation-fill-mode: forwards;\n                animation-delay: 0.25s;  \n            }\n            \n            .textRightA {\n                opacity: 0;\n                animation: rightTxtAnim 0.5s ease;\n                -webkit-animation: rightTxtAnim 0.5s ease;\n                animation-fill-mode: forwards;\n                animation-delay: 0.5s;                     \n            }\n            \n            .rotaterLA {\n                opacity: 0;\n                animation: rtTxtAnim 0.4s linear;\n                -webkit-animation: rtTxtAnim 0.4s linear;\n                animation-fill-mode: forwards;\n                animation-delay: 0.35s;                 \n            }\n            \n            .rotaterRA {\n                opacity: 0;\n                animation: ltTxtAnim 0.4s linear;\n                -webkit-animation: ltTxtAnim 0.4s linear;\n                animation-fill-mode: forwards;\n                animation-delay: 0.35s;                  \n            }\n            \n            .cursive {\n                font-family: 'Lobster', cursive;\n            }\n        &lt;/style>\n        &lt;style>\n            @keyframes yearlyAnim {\n                0% {\n                    opacity: 0.5;\n                    transform: translateY(30px) rotate(180deg);\n                }\n                \n                50% {\n                    opacity: 1;\n                    transform: translateY(10px);                    \n                }\n                \n                100% {\n                    opacity: 1;\n                    transform: scale(1.2) rotate(-3deg);   \n                }\n            }\n            \n            @keyframes heightE {\n                0% {\n                    height: 0%;\n                }\n                \n                100% {\n                    height: 100vh;\n                }\n            }\n            \n            @keyframes opacer {\n                0% {\n                    opacity: 0;\n                }\n                100% {\n                    opacity: 1;\n                }\n            }\n            \n            @keyframes opacerR {\n                0% {\n                    opacity: 0;\n                }\n                \n                50% {\n                    opacity: 0.5;\n                    transform: rotate(5deg);\n                }\n                \n                100% {\n                    transform: rotate(6deg);\n                }\n            }\n            \n            @keyframes upTxtAnim {\n                0% {\n                    opacity: 0;\n                    transform: translateY(30px);\n                }\n                \n                100% {\n                    opacity: 1;\n                    transform: translateY(0px);\n                }\n            }\n\n            @keyframes leftTxtAnim {\n                0% {\n                    opacity: 0;\n                    transform: translateX(-100px);\n                }\n                \n                100% {\n                    opacity: 1;\n                    transform: translateX(0px);\n                }\n            }\n            \n            @keyframes broWhatsThisYear {\n                0% {\n                    transform: translateX(-30px);\n                }\n                \n                50% {\n                    transform: translateX(0px);\n                }\n                \n                100% {\n                    transform: translateX(30px);\n                }\n            }\n            \n            @keyframes scalerGOBOOM {\n                50% {\n                    transform: scale(1) rotate(2deg);\n                }\n                \n                100% {\n                    transform: scale(1) rotate(10deg);\n                }\n            }\n            \n            @keyframes rightTxtAnim {\n                0% {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n                \n                100% {\n                    opacity: 1;\n                    transform: translateX(0px);\n                }               \n            }\n            \n            @keyframes rtTxtAnim {\n                0% {\n                    opacity: 0;\n                    transform: translateX(-100px) rotate(-30deg);\n                }\n                \n                50% {\n                    opacity: 0.3;\n                    transform: translateX(-50px) rotate(-10deg);                    \n                }\n                \n                100% {\n                    opacity: 1;\n                    transform: translateX(0px) rotate(0deg);\n                }\n            }\n            \n            @keyframes ltTxtAnim {\n                0% {\n                    opacity: 0;\n                    transform: translateX(100px) rotate(30deg);\n                }\n                \n                50% {\n                    opacity: 0.3;\n                    transform: translateX(50px) rotate(10deg);                    \n                }\n                \n                100% {\n                    opacity: 1;\n                    transform: translateX(0px) rotate(0deg);\n                }                \n            }\n        &lt;/style>\n    &lt;/head>\n    &lt;body>\n       &lt;div id=\"continue\">\n           &lt;h1>The History&lt;br> of Khan Academy&lt;/h1>&lt;br>\n           &lt;button id=\"cont-btn\">Continue&lt;/button>\n       &lt;/div>\n       &lt;div id=\"year\" style=\"display: none;\">\n           &lt;div class=\"curtain\">&lt;/div>\n           &lt;h1 id=\"yearNo\" >2008&lt;/h1>\n       &lt;/div>\n     \n       &lt;div class=\"slideshow\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #9EB63A;\" class=\"yearMoveA\">2008&lt;/h1>&lt;br>\n          &lt;div style=\"display: flex; justify-content: space-around; align-items: center;\">\n           &lt;img class=\"opacA\" style=\"box-shadow:0px 2px 4px #121212;animation-fill-mode: forwards;\"src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Salman_Khan_TED_2011.jpg/220px-Salman_Khan_TED_2011.jpg\" >\n              &lt;div class=\"textUpA\" style=\"margin-left: 20px; color:#606060\">\n                  &lt;h1 style=\"color: #9EB63A\">Sal Khan&lt;/h1>&lt;br>\n                  &lt;h3>Sal Khan became the founder and CEO of the website which you are using currently; Khan Academy.&lt;/h3>\n              &lt;/div>\n          &lt;/div>&lt;br>&lt;br>\n          &lt;div class=\"textLeftA\">\n            &lt;div style=\"flex-direction: column;\">\n              &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Khan_Academy_logo.svg/340px-Khan_Academy_logo.svg.png?20200716180444\">&lt;br>&lt;br>\n                &lt;h3>Khan Academy, a non-profit website to educate children, was started by Sal to teach his own cousins Math. Now, he teaches millions of cousins across the world.&lt;/h3>\n            &lt;/div>\n          &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #9EB63A;\" class=\"yearMoveA\">2010&lt;/h1>&lt;br>\n          &lt;div style=\"display: flex;flex-direction: row; height: 200px; align-items: center;\">\n          &lt;img class=\"textLeftA\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/800px-Googleplex_HQ_%28cropped%29.jpg\" width=\"200\" height=\"180\">\n           &lt;div style=\"flex-direction: column; margin-left: 20px;\">\n              &lt;h2 style=\" color: #9EB63A\">Donations&lt;/h2>&lt;br>\n              &lt;h3 class=\"textUpA\">In 2010, Google contributed a total of $2 million. To aid Khan Academy create new courses and translating content into other languages.&lt;/h3>\n           &lt;/div>\n          &lt;/div>&lt;br>&lt;br>\n          &lt;div style=\"display: flex;flex-direction: row-reverse; height: 200px; align-items: center;\">\n          &lt;img class=\"scalerA\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bill_and_Melinda_Gates_Foundation_front.JPG/250px-Bill_and_Melinda_Gates_Foundation_front.JPG\" width=\"200\" height=\"180\">\n           &lt;div style=\"flex-direction: column; margin-left: 20px;\">\n              &lt;h2 style=\" color: #9EB63A\" class=\"textUpA\">Fund for Organization&lt;/h2>&lt;br>\n              &lt;h3 class=\"textUpA\">The Bill & Melinda Gates Foundation donated $1.5 million to Khan Academy to&lt;br> build out an organization.&lt;/h3>\n           &lt;/div>\n          &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #9EB63A;\" class=\"yearMoveA\">2012&lt;/h1>&lt;br>&lt;br>\n          &lt;h2 style=\"text-align: center;\">&lt;q>$1 Trillion Opportunity.&lt;/q>&lt;/h2>&lt;br>\n          &lt;div style=\"display: flex\">\n          &lt;h3 style=\"width: 75%;\" class=\"textUpA\">&lt;span  style=\"color: #9EB63A;\">Khan Academy&lt;/span> reached 10 million students. The front page of one the Forbe's magazine had the title &lt;br>&lt;span style=\"color: #9EB63A;\">\"One Man, One Computer, 10 Million Students\"&lt;/span> ~ Forbes.&lt;/h3>\n               &lt;img class=\"textRightA\" style=\"box-shadow:0px 2px 4px #121212;animation-fill-mode: forwards; margin-left: 10px\"src=\"https://upload.wikimedia.org/wikipedia/commons/8/8e/Khan_Academy_Metro_app_%28main_screen%29.png?20150507230057\" width='200' height=\"150\">\n          &lt;/div>&lt;br>&lt;br>\n          &lt;div style=\"display: flex; align-items: center;\" class=\"textUpA\">\n                &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sal_khan.jpg/800px-Sal_khan.jpg?20160306001329\" width=\"200\" height=\"150\" style=\"box-shadow:0px 2px 4px #121212;animation-fill-mode: forwards; margin-left: 10px\" class=\"textRightA\">\n             &lt;h3 style=\"margin-left: 20px\">&lt;span style=\"color: #9EB63A;\">Sal Khan&lt;/span> noted on the list of, 100 most influential people in the world.&lt;/h3>\n          &lt;/div>&lt;br>&lt;br>\n          \n       &lt;/div>\n       &lt;div class=\"slideshow\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #9EB63A;\" class=\"yearMoveA\">2013&lt;/h1>&lt;br>&lt;br>\n          &lt;div style=\"display: flex;\">\n                &lt;div style=\"width: 50%; text-align: center; display:flex; flex-direction: column;\" class=\"rotaterLA\">\n           &lt;div style=\"text-align: center;\">\n                &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg/220px-Carlos_Slim_%2845680472234%29_%28cropped%29.jpg\" width=\"150\" height=\"200\">&lt;br>&lt;br>\n           &lt;/div>          \n           &lt;h2 style=\"color: #9EB63A\">Carlos Slim's donation&lt;/h2>&lt;br>\n           &lt;h3>In 2013, Carlos Slim from the Luis Alcazar Foundation in Mexico, made a donation for creating Spanish versions of videos.&lt;/h3>\n          &lt;/div>\n                &lt;hr style=\"margin-left: 10px\">\n                &lt;div style=\"margin-left: 20px; text-align: center;  width:50%;\" class=\"rotaterRA\">\n                    &lt;img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Heinz_Award_Medal.png/220px-Heinz_Award_Medal.png\">&lt;br>\n                    &lt;h2 style=\"color: #9EB63A\">Heinz Award to Khan&lt;/h2>&lt;br>\n                    &lt;h3>Khan was one of five winners of the 2013 Heinz Award. The Award was in the area of \"Human Condition.\"\n&lt;/h3>\n                &lt;/div>\n          &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\">\n           &lt;div class=\"curtain\">&lt;/div>\n           &lt;h1 style=\"font-size: 45px; text-align: center;color: #9EB63A;\" class=\"yearMoveA\">2015&lt;/h1>\n           &lt;div style=\"display: flex; align-items: center;\" class=\"rotaterLA\">\n               &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/AT%26THQDallas.jpg/250px-AT%26THQDallas.jpg\" width=\"250\" height=\"150\">\n               &lt;div style=\"display: flex; flex-direction: column; margin-left: 20px\">\n                    &lt;h2 style=\"color: #9EB63A;\">Mobile version of KA&lt;/h2>&lt;br>\n               &lt;h3 style=\"font-size: 16px;\">American Telephone and Telegraph Company, donated $2.25 million to Khan Academy for mobile versions of the content accessible through apps.&lt;/h3>\n               &lt;/div>\n           &lt;/div>&lt;br>\n           &lt;div style=\"display: flex;\" class=\"textRightA\">\n               &lt;div stye=\"flex-direction: column; width: 65%;\">\n                   &lt;h2 style=\"color:#9EB63A\">Pixar Collaboration&lt;/h2>&lt;br>\n                   &lt;h3 style=\"font-size: 16px;\">In 2015, Khan Academy teamed up with Pixar to create a new course named Pixar in a Box, which teaches skills of Pixar creators.&lt;/h3>\n               &lt;/div>\n               &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pixaranimationstudios.jpg/800px-Pixaranimationstudios.jpg\" width=\"150\" height=\"140\">\n           &lt;/div>\n           &lt;div style=\"display: flex;\" class=\"textLeftA\">\n               &lt;div stlye=\"flex-direction: column;\">\n                   &lt;h2 style=\"color:#9EB63A\">Official SAT Preparation&lt;/h2>&lt;br>\n                   &lt;h3 style=\"font-size: 16px;\">Since 2015, Khan Academy has been the official SAT preparation website. According to stats, studying for the SAT for 20 hours at Khan Academy is associated with a 115-point average score increase. Many book exercises select questions from the Khan Academy site to be published.&lt;/h3>\n               &lt;/div>\n           &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\" style=\"background: #fafafa; color:#0A2A66\">\n           &lt;div class=\"curtain\">&lt;/div>\n              &lt;h1 style=\"font-size: 45px; text-align: center;color: #14BF96;\" class=\"yearMoveA\">2016&lt;/h1>&lt;br>\n              &lt;h3 style=\"text-align: center;\">\"The most influential year of Khan Academy.\"&lt;/h3>&lt;br>\n                &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/220px-Khan_Academy_logo_%282018%29.svg.png\" class=\"textLeftA\">\n                &lt;div style=\"display: flex; align-items: center;\" class=\"textUpA\">\n                    &lt;div style=\"width: 65%; flex-direction: column;\">\n                        &lt;h3>&lt;span style=\"color: #14BF96;\">Khan Academy&lt;/span>'s new redesign, colour scheme, new courses, and new logo.&lt;/h3>  \n                    &lt;/div>\n                    &lt;div>\n                        &lt;img src=\"https://cdn.kastatic.org/images/mastery/UnitTestNotStarted.svg\" width=\"250\" height=\"100\" class=\"scalerA\">\n                    &lt;/div>\n                &lt;/div>&lt;br>\n                &lt;div style=\"display: flex\" class=\"textRightA\">\n                   &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Shorty-badge.svg/149px-Shorty-badge.svg.png\" width=\"150\" height=\"100\">\n                   &lt;div style=\"flex-direction: column; margin-left: 20px\">\n                        &lt;h2 style=\"color:#14BF96\">Shorty Award&lt;/h2>\n                        &lt;h3>In 2016, Khan Academy won a Shorty Award for Best in Education.&lt;/h3>\n                   &lt;/div>\n                &lt;/div>&lt;br>\n                &lt;div style=\"display: flex\" class=\"textLeftA\" style=\"animation-delay: 0.45s;\">\n                       &lt;div style=\"flex-direction: column;\">\n                           &lt;h2 style=\"color: #14BF96\">KA's Operations in India&lt;/h2>&lt;br>\n                           &lt;h3> Khan Academy started operations in India in 2016. Khan Academy platform has an estimated total 1 million monthly active learners from India&lt;/h3>\n                       &lt;/div>\n                       &lt;div style=\"margin-left: 20px\">\n                           &lt;img src=\"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png\" width=\"100\" height=\"100\">\n                       &lt;/div>\n                      \n                &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\" style=\"background: #fafafa; color:#0A2A66\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #14BF96;\" class=\"yearMoveA\">2018&lt;/h1>&lt;br>\n           &lt;div style=\"width: 100%; align-items: center; display :flex;\">\n              &lt;div style=\"flex-direction: column;\"  class=\"textUpA\">\n                   &lt;img src=\"https://www.khanacademy.org/computer-programming/welcome-to-contests/5745407636209664/5832697994330112.png\">\n              &lt;/div>\n              &lt;div style=\"flex-direction: column;\"class=\"textUpA\">\n                 &lt;h2 style=\"color:#14BF96\">Contests are Back!&lt;/h2>&lt;br>\n                 &lt;h3>&lt;span style=\"color:#14BF96\">\"CONTESTS ARE BACK! YEAH!\"&lt;/span> After Pamela left. The contests were no longer held but in 2018 a council called KACP started the Contests again!&lt;/h3>\n              &lt;/div>\n           &lt;/div>&lt;br>\n           &lt;div style=\"width: 100%;  display: flex; align-items: center;\" class=\"textLeftA\">\n           &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/leaf-blue.svg\" width=\"150\" height=\"100\">\n           &lt;div style=\"flex-direction: column;\">\n               &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Khan_Academy_Kids_logo.svg/512px-Khan_Academy_Kids_logo.svg.png?20180726163149\" width=\"250\">&lt;br>\n               &lt;h1 style=\"color: #14BF96\">New Application&lt;/h1>&lt;br>\n               &lt;h3>In 2018, Khan Academy created an application called Khan Academy Kids. It is used by two to six-year-old children to learn basic skills before progressing to grade school.&lt;/h3>\n           &lt;/div>\n           &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\" style=\"background: #fafafa; color:#0A2A66\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #14BF96;\" class=\"yearMoveA\">2021&lt;/h1>\n          &lt;div style=\"display: flex; align-items: center;\">\n                &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/boggle-blue.svg\" width=\"200\" height=\"150\" class=\"rotaterLA\">\n                &lt;div style=\"flex-direction: column;\" class=\"textLeftA\">\n                    &lt;h2 style=\"color: #14BF96;\">I joined Khan Academy&lt;/h2>&lt;br>\n                    &lt;h3>I &lt;i style=\"color: #14BF96\" >(21262)&lt;/i> joined Khan Academy.&lt;/h3>\n                &lt;/div>\n          &lt;/div>\n          &lt;div>\n             &lt;div style=\"display: flex; justify-content: space-around; animation-delay: 1s\" class=\"yearMoveA\">\n                &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/sneak-peak-green.svg\" style=\"transform: rotate(10deg)\" width=\"100\" height=\"100\">\n                 &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/boggle-blue.svg\" style=\"transform: rotate(10deg)\" width=\"100\" height=\"100\">\n                 &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/scuttlebug-blue.svg\" style=\"transform: rotate(10deg)\" width=\"100\" height=\"100\">\n                 &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/eggleston-blue.svg\" style=\"transform: rotate(10deg)\" width=\"100\" height=\"100\">\n                 &lt;img src=\"https://cdn.kastatic.org/images/avatars/svg/area-52-yellow.svg\" style=\"transform: rotate(10deg)\" width=\"100\" height=\"100\">\n\n             &lt;/div>\n              &lt;h2 style=\"color: #14BF96\" class=\"textLeftA\">32 new avatars&lt;/h2>&lt;br>\n              &lt;h3 class=\"textRightA\">Khan Academy added 32 new avatars as possible choices for your profile (8 different characters, each with 4 styles).&lt;/h3>\n          &lt;/div>&lt;br>\n          &lt;div style=\"display: flex\" class=\"textLeftA\">\n              &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg\" width=\"100\" height=\"120\">\n              &lt;div style=\"flex-direction: column; margin-left: 20px;\">\n                  &lt;h2 style=\"color: #14BF96\">Elon Musk's Donation  (AKA Leaf)&lt;/h2>&lt;br>\n                  &lt;h3>On January 11, 2021, Elon Musk donated $5 million through his Musk foundation.&lt;/h3>\n              &lt;/div>\n          &lt;/div>\n       &lt;/div>\n       &lt;div class=\"slideshow\" style=\"background: #fafafa; color:#0A2A66\">\n          &lt;div class=\"curtain\">&lt;/div>\n          &lt;h1 style=\"font-size: 45px; text-align: center;color: #14BF96;\" class=\"yearMoveA\">2022&lt;/h1>&lt;br>\n          &lt;h2 style=\"color: #606060; text-align: center;\">Currently going on...&lt;/h2>\n          &lt;div style=\"display: flex; justify-content: center; align-items: center; height:60%; flex-direction: column;\">\n            &lt;img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/1920px-Khan_Academy_logo_%282018%29.svg.png\" width=\"150\">\n            &lt;h1 class=\"cursive\" style=\"text-align: center; font-size: 40px\">&lt;span style=\"color: #14BF96\">Thank&lt;/span>&lt;span style=\"color: #9EB63A\"> you&lt;/span>, Khan Academy! :)&lt;/h1>&lt;br>\n            &lt;h2 style=\"color: dodgerBlue;\">We are grateful for your leadership.&lt;/h2>&lt;br>\n            &lt;h3 style=\"position: absolute; bottom: 0; margin-bottom: 20px;\">Made by &lt;span style=\"color:#14BF96\">21262&lt;/span>&lt;/h3>\n          &lt;/div>\n\n       &lt;/div>\n        \n       &lt;script type=\"module\">\n           let ear = 2008;\n           const yearPg = document.getElementById(\"year\");\n           const yearElem = document.getElementById(\"yearNo\");\n           const curtain = document.querySelectorAll(\".curtain\");\n           \n           let slideShows = document.querySelectorAll(\".slideshow\");\n          \n           let changePage = (disp,year,time = 15000) => {\n               setTimeout(() => {\n\n                    if (year == 2009) {\n                        year = 2010;\n                        ear = 2010;\n                    }\n                    \n                    if (year == 2014) {\n                        year = 2015;\n                        ear = 2015;                        \n                    }\n                    \n                    if (year === 2017) {\n                        year = 2016;\n                        ear = 2016;\n                        document.getElementById(\"year\").style.backgroundColor = \"#0A2A66\";\n                    }\n                    \n                    if (year === 2019) {\n                        year = 2021;\n                        ear = 2021;                        \n                    }\n                    \n                    if (year === 2023) {\n                        year = 2022;\n                        ear = 2022;                        \n                    }\n                    \n                   curtain[disp].style.display = \"block\";\n                   setTimeout(() => {\n                       yearPg.style.display = \"flex\";\n                       yearElem.textContent = year;\n                       ear += 1;\n                       year = ear;\n                       setYear(disp,ear);\n                       yearPg.style.animation = \"opacer 0.5s ease\"\n                       for (let c = 0; c &lt; curtain.length; c++) {\n                            curtain[c].style.display = \"none\";\n                       }\n                       slideShows[disp - 1].style.display = \"none\"\n                   },1050)\n               },time);\n           };\n           let setYear = (disp,year = 2008) => {\n               setTimeout(() => {\n                   curtain[0].style.display = \"block\";\n                   setTimeout(() => {\n                       changePage(disp + 1,ear + 1);\n                       yearPg.style.display = \"none\";\n                       slideShows[disp].style.display = \"block\";\n                   },1050)\n               },1100)\n           };\n           \n          \n           document.getElementById(\"cont-btn\").addEventListener(\"click\",() => {\n               \n               document.getElementById(\"continue\").style.display \n               = \"none\";\n               \n                document.getElementById(\"year\").style.opacity \n               = 0;\n               \n               window.setTimeout(function(){\n                   document.getElementById(\"year\").style.opacity \n               = 1;\n               },500)\n               \n               document.getElementById(\"year\").style.display \n               = \"flex\";\n               \n               setYear(0);\n           }) \n           \n       &lt;/script>\n\n       &lt;script src=\"https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.3/dist/html2canvas.min.js\">&lt;/script>\n       &lt;!-- Save function by BlueBird@BirdWatcher03 -->\n       &lt;script type=\"application/javascript\">\n      var save = function () {\n        html2canvas(document.body, {\n          allowTaint: false,\n          useCORS: true,\n          width: 579,\n          height: 566,\n        }).then(function (canvas) {\n          b64Img = canvas.toDataURL();\n          window.top.postMessage(b64Img, \"https://www.khanacademy.org/\");\n        });\n      };\n      var handleSave = function (e) {\n        if (JSON.parse(e.data).screenshot) {\n          setTimeout(function () {\n            console.log(\"Saving...\");\n            save();\n          }, 1000);\n        }\n      };\n      window.parent.savers = window.parent.savers || 0;\n      window.parent.addEventListener(\"message\", handleSave);\n      window.parent.savers += 1;\n      for (\n        window.parent.savers;\n        window.parent.savers > 1;\n        window.parent.savers -= 1\n      ) {\n        window.parent.removeEventListener(\"message\", handleSave);\n      }\n    &lt;/script>\n    &lt;/body>\n&lt;/html>\n","voteCount":181,"forkCount":7};
}