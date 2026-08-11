/* =========================
   NAVIGATION
========================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   SERVICE
========================= */

function showFeature(feature) {

    showNotification(
        "Fitur " + feature +
        " sedang dikembangkan."
    );

}


/* =========================
   LOGIN
========================= */

function openLogin() {

    showNotification(
        "Halaman login LEGAL SUPPORT akan segera tersedia."
    );

}


/* =========================
   ARTICLE
========================= */

function readArticle(title) {

    showNotification(
        "Artikel \"" +
        title +
        "\" berhasil dibuka."
    );

}


/* =========================
   PRICING
========================= */

function choosePlan(plan) {

    if (plan === "FREE") {

        showNotification(
            "Kamu memilih paket FREE."
        );

    }

    else if (plan === "STUDENT") {

        showNotification(
            "Kamu memilih paket STUDENT — Rp19.000/bulan."
        );

    }

    else if (plan === "PREMIUM") {

        showNotification(
            "Kamu memilih paket PREMIUM — Rp49.000/bulan."
        );

    }

}


/* =========================
   QUIZ
========================= */

let score = 0;

let questionNumber = 1;


function startQuiz() {

    scrollToSection("quiz");

}


/* Jawaban quiz */

function answer(choice) {

    const result =
        document.getElementById(
            "quiz-result"
        );

    const quizBox =
        document.getElementById(
            "quiz-box"
        );


    if (questionNumber === 1) {

        if (choice === 0) {

            score++;

            result.innerHTML =
                "✓ Benar!";

        }

        else {

            result.innerHTML =
                "✗ Jawaban kurang tepat.";

        }


        setTimeout(() => {

            nextQuestion();

        }, 1000);

    }

}


/* Pertanyaan berikutnya */

function nextQuestion() {

    questionNumber++;

    const question =
        document.getElementById(
            "question"
        );

    const quizBox =
        document.getElementById(
            "quiz-box"
        );

    const result =
        document.getElementById(
            "quiz-result"
        );


    result.innerHTML = "";


    if (questionNumber === 2) {

        document.querySelector(
            ".quiz-number"
        ).innerText =
            "Pertanyaan 2 dari 3";


        question.innerText =
            "Apa yang dimaksud dengan hak?";


        quizBox.innerHTML += `

            <button onclick="answerSecond(0)">
                Sesuatu yang dapat dimiliki
                atau diperoleh seseorang
            </button>

            <button onclick="answerSecond(1)">
                Hukuman bagi seseorang
            </button>

            <button onclick="answerSecond(2)">
                Larangan untuk semua orang
            </button>

        `;

    }

}


/* Jawaban pertanyaan kedua */

function answerSecond(choice) {

    const result =
        document.getElementById(
            "quiz-result"
        );


    if (choice === 0) {

        score++;

        result.innerHTML =
            "✓ Benar!";

    }

    else {

        result.innerHTML =
            "✗ Kurang tepat.";

    }


    setTimeout(() => {

        finishQuiz();

    }, 1000);

}


/* Hasil quiz */

function finishQuiz() {

    const quizBox =
        document.getElementById(
            "quiz-box"
        );

    const result =
        document.getElementById(
            "quiz-result"
        );


    quizBox.style.display =
        "none";


    if (score === 2) {

        result.innerHTML =
            "🎉 Hebat! Kamu mendapatkan " +
            score +
            "/2. Pemahaman hukummu sangat baik!";

    }

    else if (score === 1) {

        result.innerHTML =
            "👍 Lumayan! Kamu mendapatkan " +
            score +
            "/2. Yuk belajar hukum lebih banyak.";

    }

    else {

        result.innerHTML =
            "📚 Kamu mendapatkan 0/2. " +
            "Jangan menyerah, terus belajar bersama LEGAL SUPPORT!";

    }

}


/* =========================
   NOTIFICATION
========================= */

function showNotification(message) {

    const notification =
        document.getElementById(
            "notification"
        );

    const text =
        document.getElementById(
            "notification-text"
        );


    text.innerText =
        message;


    notification.style.display =
        "block";


    setTimeout(() => {

        notification.style.display =
            "none";

    }, 3000);

}