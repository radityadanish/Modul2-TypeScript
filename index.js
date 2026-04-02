"use strict";
let nama = "Budi";
let umur = 17;
let aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
