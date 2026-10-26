const listBelanja = [
  { id: 1, barang: "Buku Tulis", harga: 5000, qty: 10, kategori: "buku" },
  { id: 2, barang: "Pulpen Gel", harga: 3500, qty: 5, kategori: "pena" },
  { id: 3, barang: "Pensil 2B", harga: 2000, qty: 3, kategori: "pena" },
  { id: 4, barang: "Buku Gambar A4", harga: 8000, qty: 2, kategori: "buku" },
  { id: 5, barang: "Penghapus", harga: 1500, qty: 4, kategori: "aksesoris" },
  { id: 6, barang: "Penggaris 30cm", harga: 3000, qty: 2, kategori: "aksesoris" }
];

console.log("--- DATA TRANSAKSI AWAL ---");
console.log(listBelanja);
console.log("\n");


const cekKategoriPena = listBelanja.filter((item) => item.kategori === "pena");

console.log("--- HASIL FILTER KATEGORI PENA ---");
console.log(cekKategoriPena);
console.log("\n");


const hitungSubtotal = listBelanja.map(({ barang, harga, qty }) => {
  return {
    namaBarang: barang,
    totalHargaBarang: harga * qty
  };
});

console.log("--- HASIL MAP (SUBTOTAL TIAP BARANG) ---");
console.log(hitungSubtotal);
console.log("\n");


const totalKeseluruhan = listBelanja.reduce((total, { harga, qty }) => {
  return total + (harga * qty);
}, 0);

console.log("--- HASIL REDUCE (TOTAL KESELURUHAN) ---");
console.log(`Total yang harus dibayar: Rp ${totalKeseluruhan}`);