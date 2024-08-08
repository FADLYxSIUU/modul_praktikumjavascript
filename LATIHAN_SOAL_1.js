// Ukuran tanah dalam meter persegi
let panjangTanah = 20.5;
let lebarTanah = 30.0;

// Harga per meter persegi
let hargaPerMeter = 1500000;

// Menghitung luas tanah
let luasTanah = panjangTanah * lebarTanah;

// Menghitung harga tanah tanpa PPN
let hargaTanpaPPN = luasTanah * hargaPerMeter;

// Persentase PPN
let persentasePPN = 15;

// Menghitung nominal PPN
let nominalPPN = hargaTanpaPPN * (persentasePPN / 100);

// Menghitung total harga termasuk PPN
let totalHarga = hargaTanpaPPN + nominalPPN;

// Menampilkan hasil
console.log("Luas Tanah: " + luasTanah.toFixed(2) + " m2");
console.log("Harga Tanah tanpa PPN: Rp " + hargaTanpaPPN.toLocaleString('id-ID'));
console.log("PPN (" + persentasePPN + "%): Rp " + nominalPPN.toLocaleString('id-ID'));
console.log("Total Harga yang harus dibayar: Rp " + totalHarga.toLocaleString('id-ID'));