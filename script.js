// ==========================================
// LATIHAN 1: Menampilkan Output
// ==========================================
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


// ==========================================
// LATIHAN 2: Alert dan Prompt Nama
// ==========================================
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}


// ==========================================
// LATIHAN 3: Function dan Operasi Aritmetika
// ==========================================
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);


// ==========================================
// LATIHAN 4: Seleksi Kondisi if-else (Input Nilai)
// ==========================================
const inputNilai = prompt("Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}


// ==========================================
// LATIHAN 5: Seleksi Kondisi switch (Input Angka 1-5)
// ==========================================
const inputPilihan = prompt("Masukkan angka 1-5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}


// ==========================================
// LATIHAN 6: Form Bilangan Genap atau Ganjil
// ==========================================
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");
    
    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


// ==========================================
// LATIHAN 7: Mengubah Warna Halaman
// ==========================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}


// ==========================================
// LATIHAN 8 & EKSPERIMEN 10: DOM & Checkbox Menu
// ==========================================
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}


// ==========================================
// MINI PROJECT: Kalkulator Nilai Mahasiswa
// ==========================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function jalankanMiniProject() {
    const inputTugas = document.getElementById("inputTugas").value;
    const inputUts = document.getElementById("inputUts").value;
    const inputUas = document.getElementById("inputUas").value;
    const divHasil = document.getElementById("hasilMiniProject");

    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        divHasil.innerHTML = "<span style='color: red;'>Semua komponen nilai harus diisi!</span>";
        return;
    }

    const t = Number(inputTugas);
    const u = Number(inputUts);
    const s = Number(inputUas);

    if (t < 0 || t > 100 || u < 0 || u > 100 || s < 0 || s > 100 || Number.isNaN(t) || Number.isNaN(u) || Number.isNaN(s)) {
        divHasil.innerHTML = "<span style='color: red;'>Nilai harus berupa angka pada rentang 0 sampai 100!</span>";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(t, u, s);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    divHasil.innerHTML = `
        <b>Hasil Perhitungan:</b><br>
        - Nilai Akhir: ${nilaiAkhir.toFixed(2)}<br>
        - Predikat: ${predikat}<br>
        - Status: ${status}
    `;
}


// ==========================================
// EKSPERIMEN MANDIRI 7: Tabel Perkalian 7
// ==========================================
console.log("--- Eksperimen Mandiri 7: Tabel Perkalian 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// ==========================================
// EKSPERIMEN MANDIRI 8: Function cekGenap
// ==========================================
function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log("--- Eksperimen Mandiri 8: Cek Bilangan Genap ---");
console.log("Apakah angka 8 genap?", cekGenap(8));
console.log("Apakah angka 5 genap?", cekGenap(5));


// ==========================================
// EKSPERIMEN MANDIRI 9: Validasi Form Kosong
// ==========================================
function validasiFormKosong() {
    const inputData = document.getElementById("inputEksperimen9").value;
    const pesanValidasi = document.getElementById("pesanValidasi9");

    if (inputData.trim() === "") {
        pesanValidasi.textContent = "Peringatan: Kolom input tidak boleh kosong!";
        pesanValidasi.style.color = "red";
    } else {
        pesanValidasi.textContent = "Validasi berhasil! Data diterima: " + inputData;
        pesanValidasi.style.color = "green";
    }
}


// ==========================================
// EKSPERIMEN MANDIRI 11: Toggle Elemen HTML
// ==========================================
function toggleElemen() {
    const elemen = document.getElementById("teksRahasia");
    if (elemen.style.display === "none") {
        elemen.style.display = "block";
    } else {
        elemen.style.display = "none";
    }
}