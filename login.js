// ==========================================
// LEGAL SUPPORT - DAILY LEGAL QUIZ
// ==========================================


// ==========================================
// DATA PERTANYAAN
// ==========================================

const quizQuestions = [

    {
        question:
            "Apa yang dimaksud dengan subjek hukum?",

        options: [
            "Sesuatu yang menjadi objek perjanjian",
            "Pihak yang dapat memiliki hak dan kewajiban hukum",
            "Peraturan yang dibuat pemerintah",
            "Sanksi yang diberikan kepada pelanggar"
        ],

        answer: 1
    },


    {
        question:
            "Hukum yang mengatur hubungan antara individu dengan individu pada umumnya disebut?",

        options: [
            "Hukum pidana",
            "Hukum tata negara",
            "Hukum perdata",
            "Hukum internasional"
        ],

        answer: 2
    },


    {
        question:
            "Apa yang dimaksud dengan wanprestasi?",

        options: [
            "Pelaksanaan kewajiban tepat waktu",
            "Tidak terpenuhinya kewajiban dalam suatu perjanjian",
            "Pembuatan undang-undang",
            "Penyelesaian perkara pidana"
        ],

        answer: 1
    },


    {
        question:
            "Apa fungsi utama hukum dalam kehidupan masyarakat?",

        options: [
            "Menciptakan ketertiban",
            "Menghapus seluruh perbedaan",
            "Membatasi seluruh aktivitas masyarakat",
            "Menggantikan norma sosial"
        ],

        answer: 0
    },


    {
        question:
            "Perjanjian pada dasarnya berkaitan dengan?",

        options: [
            "Kesepakatan para pihak",
            "Hukuman pidana",
            "Pemilihan umum",
            "Struktur pemerintahan"
        ],

        answer: 0
    },


    {
        question:
            "Hukum pidana pada umumnya berkaitan dengan?",

        options: [
            "Hubungan jual beli saja",
            "Perbuatan yang dilarang dan memiliki ancaman pidana",
            "Administrasi kampus",
            "Hubungan keluarga saja"
        ],

        answer: 1
    },


    {
        question:
            "Apa yang dimaksud dengan objek hukum?",

        options: [
            "Pihak yang memiliki kewajiban",
            "Sesuatu yang dapat menjadi objek hubungan hukum",
            "Hakim yang memutus perkara",
            "Peraturan pemerintah"
        ],

        answer: 1
    },


    {
        question:
            "Legal standing berkaitan dengan?",

        options: [
            "Kedudukan hukum seseorang atau pihak",
            "Jenis hukuman pidana",
            "Besarnya denda",
            "Tempat tinggal seseorang"
        ],

        answer: 0
    },


    {
        question:
            "Apa tujuan mempelajari hukum bagi masyarakat?",

        options: [
            "Menghafalkan seluruh undang-undang",
            "Memahami hak, kewajiban, dan aturan yang berlaku",
            "Menghindari seluruh aktivitas sosial",
            "Menggantikan peran aparat penegak hukum"
        ],

        answer: 1
    },


    {
        question:
            "Sebelum menggunakan sebuah dokumen hukum, sebaiknya?",

        options: [
            "Menggunakannya tanpa membaca",
            "Menyesuaikannya dengan kebutuhan dan memeriksa ketentuannya",
            "Menghapus seluruh identitas",
            "Mengubah isi sesuka hati"
        ],

        answer: 1
    }

];


// ==========================================
// VARIABLE QUIZ
// ==========================================

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;


// ==========================================
// CEK APAKAH SUDAH QUIZ HARI INI
// ==========================================

function getToday() {

    const date = new Date();

    return date.toISOString().split("T")[0];

}


function hasPlayedToday() {

    const lastPlayed =
        localStorage.getItem("legalQuizLastPlayed");

    return lastPlayed === getToday();

}


// ==========================================
// ELEMENT
// ==========================================

const startButton =
    document.getElementById("startQuizBtn");


// ==========================================
// INIT QUIZ
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const intro =
        document.getElementById("quizIntro");

    const alreadyPlayed =
        document.getElementById("alreadyPlayed");

    if (!intro) return;


    if (hasPlayedToday()) {

        intro.classList.add("hidden");

        if (alreadyPlayed) {
            alreadyPlayed.classList.remove("hidden");
        }

    }


    if (startButton) {

        startButton.addEventListener(
            "click",
            startQuiz
        );

    }

});


// ==========================================
// MULAI QUIZ
// ==========================================

function startQuiz() {

    if (hasPlayedToday()) {

        alert(
            "Kamu sudah mengikuti Legal Quiz hari ini."
        );

        return;
    }


    currentQuestionIndex = 0;

    score = 0;

    selectedAnswer = null;


    const intro =
        document.getElementById("quizIntro");

    const quizContainer =
        document.getElementById("quizContainer");

    const result =
        document.getElementById("quizResult");


    if (intro)
        intro.classList.add("hidden");

    if (result)
        result.classList.add("hidden");

    if (quizContainer)
        quizContainer.classList.remove("hidden");


    showQuestion();

}


// ==========================================
// TAMPILKAN PERTANYAAN
// ==========================================

function showQuestion() {

    const question =
        quizQuestions[currentQuestionIndex];


    const questionText =
        document.getElementById("questionText");

    const optionsContainer =
        document.getElementById("answerOptions");

    const currentQuestion =
        document.getElementById("currentQuestion");

    const currentScore =
        document.getElementById("currentScore");

    const progressBar =
        document.getElementById("progressBar");

    const nextButton =
        document.getElementById("nextQuestionBtn");


    if (!question) return;


    selectedAnswer = null;


    questionText.textContent =
        question.question;


    currentQuestion.textContent =
        currentQuestionIndex + 1;


    currentScore.textContent =
        score;


    progressBar.style.width =
        `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;


    nextButton.disabled = true;


    nextButton.textContent =
        currentQuestionIndex === quizQuestions.length - 1
            ? "Selesaikan Quiz ✓"
            : "Jawaban Berikutnya →";


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.textContent =
                option;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            optionsContainer.appendChild(button);

        }
    );

}


// ==========================================
// PILIH JAWABAN
// ==========================================

function selectAnswer(index, button) {

    const allOptions =
        document.querySelectorAll(
            ".answer-option"
        );


    allOptions.forEach(
        option =>
            option.classList.remove("selected")
    );


    button.classList.add("selected");


    selectedAnswer = index;


    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );


    nextButton.disabled = false;

}


// ==========================================
// PERTANYAAN BERIKUTNYA
// ==========================================

const nextQuestionButton =
    document.getElementById(
        "nextQuestionBtn"
    );


if (nextQuestionButton) {

    nextQuestionButton.addEventListener(
        "click",
        nextQuestion
    );

}


function nextQuestion() {

    if (selectedAnswer === null) {

        alert(
            "Silakan pilih salah satu jawaban."
        );

        return;

    }


    const question =
        quizQuestions[currentQuestionIndex];


    if (selectedAnswer === question.answer) {

        score++;

    }


    currentQuestionIndex++;


    if (
        currentQuestionIndex >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

}


// ==========================================
// SELESAIKAN QUIZ
// ==========================================

function finishQuiz() {

    localStorage.setItem(
        "legalQuizLastPlayed",
        getToday()
    );


    localStorage.setItem(
        "legalQuizLastScore",
        score
    );


    const quizContainer =
        document.getElementById(
            "quizContainer"
        );

    const result =
        document.getElementById(
            "quizResult"
        );


    quizContainer.classList.add(
        "hidden"
    );

    result.classList.remove(
        "hidden"
    );


    const finalScore =
        document.getElementById(
            "finalScore"
        );

    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    finalScore.textContent =
        score;


    let message;


    if (score >= 9) {

        message =
            "Luar biasa! Pengetahuan hukum kamu sangat baik.";

    } else if (score >= 7) {

        message =
            "Bagus! Kamu memiliki pemahaman hukum yang cukup baik.";

    } else if (score >= 5) {

        message =
            "Cukup baik. Yuk, tingkatkan lagi pengetahuan hukummu.";

    } else {

        message =
            "Tetap semangat! Kamu bisa belajar lebih banyak melalui artikel dan edukasi Legal Support.";

    }


    resultMessage.textContent =
        message;


    // ======================================
    // VOUCHER
    // ======================================

    const voucherBox =
        document.getElementById(
            "voucherBox"
        );

    const voucherCode =
        document.getElementById(
            "voucherCode"
        );


    if (score >= 7) {

        const code =
            generateVoucherCode(score);


        localStorage.setItem(
            "legalSupportVoucher",
            code
        );


        voucherCode.textContent =
            code;


        voucherBox.classList.remove(
            "hidden"
        );

    } else {

        voucherBox.classList.add(
            "hidden"
        );

    }

}


// ==========================================
// GENERATE VOUCHER
// ==========================================

function generateVoucherCode(score) {

    const random =
        Math.random()
            .toString(36)
            .substring(2, 7)
            .toUpperCase();


    return `LEGAL${score}${random}`;

}


// ==========================================
// COPY VOUCHER
// ==========================================

function copyVoucher() {

    const voucher =
        localStorage.getItem(
            "legalSupportVoucher"
        );


    if (!voucher) {

        alert(
            "Voucher belum tersedia."
        );

        return;

    }


    navigator.clipboard
        .writeText(voucher)
        .then(function () {

            alert(
                "Voucher berhasil disalin: " +
                voucher
            );

        })
        .catch(function () {

            alert(
                "Voucher kamu: " +
                voucher
            );

        });

}