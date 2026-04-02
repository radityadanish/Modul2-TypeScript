let nama: string = "Budi"; 
let umur: number = 17; 
let aktif: boolean = true; 
console.log(nama, umur, aktif);

function login(username: string, password: string): 
boolean { 
return username === "admin" && password === "admin"; 
} 
console.log(login("admin", "admin"));

interface User { 
id: number; 
nama: string; 
role: string; 
}
const user: User = { 
id: 1, 
nama: "Sinta", 
role: "admin" 
}; 
console.log(user); 
interface Buku { 
id: number; 
judul: string; 
penulis?: string; 
} 
const buku1: Buku = { 
id: 1, 
judul: "Belajar Backend" 
}; 
console.log(buku1); 



