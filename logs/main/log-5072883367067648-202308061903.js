function LoadSketchAPIMain() {
    return {"title":"Big Guy Phoenix by S.M.V.","author":{"nickname":"Velvet","link":"https://www.khanacademy.org/profile/velvaltfaith/"},"size":{"width":400,"height":400},"link":"https://www.khanacademy.org/computer-programming/big-guy-phoenix-by-smv/5072883367067648","img":"https://www.khanacademy.org/computer-programming/big-guy-phoenix-by-smv/5072883367067648/5623704093769728.png","created":"2023-04-03T10:15:39.256634Z","flags":{"flags":null,"flaggedBy":null},"type":"pjs","code":"\nvar shading = function (col, num) {\n    return color (red(col) - num, green(col) - num, blue(col) - num);\n};\n\nvar c6 = color(255, 142, 94);\n\nvar phoenix5 = function (tx, ty, s) {\n    pushMatrix();\n    translate (tx, ty);\n    scale (s);\n        //leg\n        noStroke();\n        fill (shading(c6, 40));\n        ellipse (341, 352, 30, 30);\n        \n        //shape\n        fill (c6);\n        beginShape();\n        vertex (300, 144);\n        bezierVertex (355, 153, 326, 201, 331, 225);\n        bezierVertex (370, 256, 356, 322, 331, 399);\n        bezierVertex (326, 417, 367, 565, 312, 427);\n        bezierVertex (322, 454, 304, 538, 283, 476);\n        bezierVertex (275, 461, 271, 519, 241, 490);\n        bezierVertex (267, 439, 268, 418, 258, 384);\n        bezierVertex (208, 269, 234, 144, 300, 144);\n        endShape(CLOSE);\n        \n        //wings\n        beginShape();\n        vertex (349, 249);\n        bezierVertex (391, 218, 326, 201, 456, 164);\n        vertex (445, 200);\n        bezierVertex (511, 188, 401, 244, 461, 241);\n        bezierVertex (518, 249, 422, 254, 433, 297);\n        bezierVertex (392, 292, 372, 279, 351, 309);\n        endShape(CLOSE);\n        \n        beginShape();\n        vertex (236, 249);\n        bezierVertex (190, 235, 157, 223, 126, 164);\n        bezierVertex (126, 229, 157, 223, 120, 237);\n        bezierVertex (106, 258, 178, 273, 140, 293);\n        bezierVertex (127, 328, 203, 272, 233, 283);\n        endShape();\n        \n        //top quail feather thing\n        beginShape();\n        vertex (287, 145);\n        bezierVertex (265, 125, 237, 114, 255, 77);\n        bezierVertex (303, 96, 267, 114, 292, 146);\n        endShape(CLOSE);\n        \n        //eye\n        fill (shading(c6, 70));\n        ellipse (300, 179, 8, 8);\n        fill (230);\n        ellipse (302, 179, 4, 4);\n        \n        //shading\n        fill (shading(c6, 40));\n        beginShape();\n        vertex (300, 144);\n        bezierVertex (355, 153, 326, 201, 331, 225);\n        bezierVertex (370, 256, 356, 322, 331, 399);\n        bezierVertex (326, 417, 367, 565, 312, 427);\n        bezierVertex (322, 454, 304, 538, 283, 476);\n        bezierVertex (275, 461, 271, 519, 241, 490);\n        bezierVertex (267, 459, 275, 421, 273, 384);\n        bezierVertex (262, 249, 362, 211, 300, 144);\n        endShape(CLOSE);\n        \n        beginShape();\n        vertex (349, 261);\n        bezierVertex (406, 242, 326, 201, 446, 179);\n        vertex (440, 200);\n        bezierVertex (493, 205, 406, 244, 461, 241);\n        bezierVertex (518, 249, 422, 254, 433, 297);\n        bezierVertex (392, 292, 372, 279, 351, 309);\n        endShape(CLOSE);\n        \n        beginShape();\n        vertex (231, 259);\n        bezierVertex (190, 253, 144, 223, 132, 188);\n        bezierVertex (126, 229, 157, 223, 131, 237);\n        bezierVertex (106, 258, 178, 273, 140, 293);\n        bezierVertex (127, 328, 203, 272, 233, 283);\n        endShape();\n        \n        beginShape();\n        vertex (287, 145);\n        bezierVertex (265, 125, 237, 114, 255, 77);\n        bezierVertex (293, 107, 260, 114, 289, 146);\n        endShape(CLOSE);\n        \n        //beak\n        triangle (329, 160, 334, 184, 344, 176);\n    popMatrix();\n};\n\nbackground(0, 0);\nphoenix5(-5, -42, 0.7);\n\ntextSize(75);\nfill(0);\ntextFont(\"Georgia\");\ntext(\"Cinis\", 115, 375);","voteCount":2,"forkCount":0};
}