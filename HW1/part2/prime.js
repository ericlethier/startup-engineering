#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

var out = [2];

for (i=2; out.length<100; i++)
    for (j=2; j<i; j++)
    {
        if (i % j == 0) {
            break;
		}
        else if (i == j+1) {
			out.push(i);
		}
                
    }

fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);
