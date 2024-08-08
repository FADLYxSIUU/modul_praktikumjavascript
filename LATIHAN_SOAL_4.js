// Mendefinisikan suku pertama dan rasio
const sukuPertama = 4;
const rasio = 3;
const jumlahSuku = 10;

// Inisialisasi variabel untuk menyimpan jumlah total
let totalJumlah = 0;

// Menggunakan perulangan untuk menghitung jumlah dari 10 suku pertama
for (let i = 0; i < jumlahSuku; i++) {
    // Menghitung suku ke-i dari deret geometri
    const sukuKeI = sukuPertama * Math.pow(rasio, i);
    // Menambahkan suku ke-i ke total jumlah
    totalJumlah += sukuKeI;
}

// Menampilkan hasil
console.log("Total jumlah 10 suku  pertama dari deret geometri yaitu:", totalJumlah);