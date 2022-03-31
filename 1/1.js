"use strict";
function a(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == str[i]) {
            console.log(str[i], i);
        }
    }
}

a("12345", [1, 2, "3", "4", "6"]);
