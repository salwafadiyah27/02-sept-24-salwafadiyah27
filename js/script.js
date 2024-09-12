// Ini Javascript

// Fungsi untuk menghitung Luas Segitiga
function hitungLuasSegitiga() {
    const alas = document.getElementById("panjang-alas").value;
    const tinggi = document.getElementById("tinggi").value;

    if (alas === '' || tinggi === '') {
        alert("Masukkan nilai untuk alas dan tinggi segitiga.");
        return;
    }

    const luas = 0.5 * alas * tinggi;
    document.getElementById("result-luas-segitiga").innerText = "Luas Segitiga: " + luas;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
    const sisiA = document.getElementById("panjang-sisi-A").value;
    const sisiB = document.getElementById("panjang-sisi-B").value;
    const sisiC = document.getElementById("panjang-sisi-C").value;

    // Validasi input
    if (sisiA === '' || sisiB === '' || sisiC === '') {
        alert("Masukkan semua nilai sisi segitiga.");
        return;
    }

    const keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
    document.getElementById("result-keliling-segitiga").innerText = "Keliling Segitiga: " + keliling;
}

// Fungsi untuk menghitung Luas Jajar Genjang
function hitungLuasJajarGenjang() {
    const alas = document.getElementById("panjang-alas-jg").value;
    const tinggi = document.getElementById("tinggi-jg").value;

    // Validasi input
    if (alas === '' || tinggi === '') {
        alert("Masukkan nilai untuk alas dan tinggi jajar genjang.");
        return;
    }

    const luas = alas * tinggi;
    document.getElementById("result-luas-jajar-genjang").innerText = "Luas Jajar Genjang: " + luas;
}

// Fungsi untuk menghitung Keliling Jajar Genjang
function hitungKelilingJajarGenjang() {
    const alas = document.getElementById("panjang-alas-keliling-jg").value;
    const sisiMiring = document.getElementById("sisi-miring-jg").value;

    // Validasi input
    if (alas === '' || sisiMiring === '') {
        alert("Masukkan nilai untuk alas dan sisi miring jajar genjang.");
        return;
    }

    const keliling = 2 * (parseFloat(alas) + parseFloat(sisiMiring));
    document.getElementById("result-keliling-jajar-genjang").innerText = "Keliling Jajar Genjang: " + keliling;
}

// Event Listener untuk tombol hitung
document.querySelectorAll('.hitung-btn').forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        // Cek button mana yang diklik, segitiga atau jajar genjang
        const form = event.target.closest('aside');
        const header = form.querySelector('header h1').innerText;

        if (header.includes("Luas Segitiga")) {
            hitungLuasSegitiga();
        } else if (header.includes("Keliling Segitiga")) {
            hitungKelilingSegitiga();
        } else if (header.includes("Luas Jajar Genjang")) {
            hitungLuasJajarGenjang();
        } else if (header.includes("Keliling Jajar Genjang")) {
            hitungKelilingJajarGenjang();
        }
    });
});

// function validateLuas () {
//     let panjangAlas = document.getElementById('panjang-alas').value;
//     let tinggi = document.getElementById('tinggi').value;

//     if (panjangAlas == '' && tinggi == "") {
//         alert('form masih kosong');
//     }
//     console.log(panjangAlas);
//     console.log(tinggi);
// }