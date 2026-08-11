// ==========================================
// LEGAL SUPPORT - LAYANAN
// ==========================================


// ================================
// KAMUS HUKUM
// ================================

const dictionaryData = [

    {
        term: "Wanprestasi",
        definition:
            "Keadaan ketika salah satu pihak dalam suatu perjanjian tidak memenuhi kewajiban sebagaimana yang telah disepakati."
    },

    {
        term: "Perbuatan Melawan Hukum",
        definition:
            "Perbuatan yang menimbulkan kerugian kepada pihak lain dan memenuhi unsur tertentu dalam hukum perdata."
    },

    {
        term: "Subjek Hukum",
        definition:
            "Pihak yang dapat mempunyai hak dan kewajiban menurut hukum."
    },

    {
        term: "Objek Hukum",
        definition:
            "Segala sesuatu yang dapat menjadi objek hubungan atau perbuatan hukum."
    },

    {
        term: "Perjanjian",
        definition:
            "Kesepakatan antara dua pihak atau lebih yang menimbulkan hubungan hukum tertentu."
    },

    {
        term: "Legal Standing",
        definition:
            "Kedudukan hukum seseorang atau pihak untuk melakukan tindakan hukum tertentu."
    }

];


function searchDictionary() {

    const input =
        document.getElementById("dictionarySearch");

    const result =
        document.getElementById("dictionaryResult");

    if (!input || !result) return;

    const keyword =
        input.value.trim().toLowerCase();

    if (!keyword) {

        renderDictionary(dictionaryData);

        return;
    }

    const filtered =
        dictionaryData.filter(item =>
            item.term.toLowerCase().includes(keyword) ||
            item.definition.toLowerCase().includes(keyword)
        );

    renderDictionary(filtered);

}


function renderDictionary(data) {

    const result =
        document.getElementById("dictionaryResult");

    if (!result) return;

    if (data.length === 0) {

        result.innerHTML = `
            <div class="notice">
                Tidak ditemukan istilah yang sesuai.
            </div>
        `;

        return;
    }

    result.innerHTML = data.map(item => `

        <div class="dictionary-card">

            <h3>
                ${item.term}
            </h3>

            <p>
                ${item.definition}
            </p>

        </div>

    `).join("");

}


// ================================
// TEMPLATE DOKUMEN
// ================================

let currentTemplate = "";


const templates = {

    "Surat Kuasa": `
SURAT KUASA

Yang bertanda tangan di bawah ini:

Nama        : ______________________
Alamat      : ______________________
NIK         : ______________________

Selanjutnya disebut sebagai PEMBERI KUASA.

Dengan ini memberikan kuasa kepada:

Nama        : ______________________
Alamat      : ______________________
NIK         : ______________________

Selanjutnya disebut sebagai PENERIMA KUASA.

Untuk melakukan:
____________________________________
____________________________________

Demikian surat kuasa ini dibuat dengan sebenarnya
untuk dipergunakan sebagaimana mestinya.

Tempat, tanggal: ___________________

Pemberi Kuasa,

(____________________)
    `,


    "Surat Perjanjian": `
SURAT PERJANJIAN

Pada hari ini, __________ tanggal __________,
telah dibuat perjanjian antara:

PIHAK PERTAMA
Nama    : ______________________
Alamat  : ______________________

DAN

PIHAK KEDUA
Nama    : ______________________
Alamat  : ______________________

Kedua belah pihak sepakat untuk membuat
perjanjian dengan ketentuan:

Pasal 1
OBJEK PERJANJIAN

____________________________________

Pasal 2
HAK DAN KEWAJIBAN

____________________________________

Pasal 3
PENYELESAIAN PERSELISIHAN

____________________________________

Demikian perjanjian ini dibuat dan disepakati
oleh kedua belah pihak.

PIHAK PERTAMA              PIHAK KEDUA

(______________)            (______________)
    `,


    "Surat Pernyataan": `
SURAT PERNYATAAN

Saya yang bertanda tangan di bawah ini:

Nama        : ______________________
Tempat/Tgl  : ______________________
Alamat      : ______________________

Dengan ini menyatakan bahwa:

____________________________________
____________________________________
____________________________________

Demikian surat pernyataan ini dibuat dengan
sebenarnya dan tanpa paksaan dari pihak mana pun.

Tempat, tanggal: ___________________

Yang membuat pernyataan,

Materai

(____________________)
    `

};


function showTemplate(name) {

    const modal =
        document.getElementById("templateModal");

    const title =
        document.getElementById("templateTitle");

    const text =
        document.getElementById("templateText");

    if (!modal || !title || !text) return;

    currentTemplate = templates[name] || "";

    title.textContent = name;

    text.textContent = currentTemplate;

    modal.classList.add("show");

}


function closeTemplate() {

    const modal =
        document.getElementById("templateModal");

    if (modal) {
        modal.classList.remove("show");
    }

}


function copyTemplate() {

    if (!currentTemplate) return;

    navigator.clipboard.writeText(currentTemplate)
        .then(function () {

            alert("Template berhasil disalin.");

        })
        .catch(function () {

            alert("Template tidak dapat disalin otomatis.");

        });

}


window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("templateModal");

    if (event.target === modal) {
        closeTemplate();
    }

});


// ================================
// KONSULTASI
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("consultationForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("consultName").value;

        alert(
            `Terima kasih, ${name}. Permintaan konsultasi awal Anda berhasil dicatat pada prototype.`
        );

        form.reset();

    });

});


// ================================
// PAKET LAYANAN
// ================================

function selectPackage(packageName) {

    const message =
        document.getElementById("packageMessage");

    if (!message) return;

    message.innerHTML = `

        <div class="notice">

            Paket <strong>${packageName}</strong>
            telah dipilih.

            <br><br>

            Untuk prototype ini, silakan lanjutkan ke
            halaman <a href="masuk.html"
            style="color:#0d3b66;font-weight:700;">
            Masuk/Daftar</a>
            untuk melanjutkan.

        </div>

    `;

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}