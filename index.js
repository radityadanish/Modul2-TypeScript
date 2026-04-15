"use strict";
let nama = "Budi";
let umur = 17;
let aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
// -- Tugas 1 --
const siswa1 = {
  id: 1,
  nama: "Budi Santoso",
  kelas: "XII RPL 1",
};

console.log(siswa1);

// -- Tugas 2 --
function hitungUmur(tahunLahir) {
  const tahunSekarang = new Date().getFullYear();
  return tahunSekarang - tahunLahir;
}

const umurSiswa1 = hitungUmur(2005);
console.log(`Umur ${siswa1.nama}: ${umurSiswa1} tahun`);
