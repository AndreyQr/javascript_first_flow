'use strict';

for (let i = 0; i < 11; i++) {
    if (i===0) {
        alert(i + " -это ноль");
        continue;
    }
    if (i % 2 === 0) {
        alert(i + " -четное");
    }
    else {
        alert(i + " -нечетное");
    }
 }