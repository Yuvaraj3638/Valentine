const yesBtn = document.getElementById("btn-yes");
const noBtn = document.getElementById("btn-no");

const begSticker = document.getElementById("beg-sticker");
const begText = document.getElementById("beg-text");

const sadAudio = document.getElementById("audio-sad");
const happyAudio = document.getElementById("audio-happy");

const screenQuestion = document.getElementById("screen-question");
const screenEnvelopes = document.getElementById("screen-envelopes");
const screenContent = document.getElementById("screen-content");
const contentArea = document.getElementById("content-area");

const backBtn = document.getElementById("btn-back");
const emojiLayer = document.getElementById("emoji-layer");

/* ---------------- STATE ---------------- */
let noCount = 0;
const MAX_NO_CLICKS = 6;

let yesPaddingX = 36;
let yesPaddingY = 16;
let yesFontSize = 1.2;

let emojiInterval = null;
let dateIdeaSelected = false;

/* ---------------- BEGGING STAGES ---------------- */
const beggingStages = [
    { text: "Are you sure babyy? 🥺", gif: "assets/gifs/beg1.webp" },
    { text: "Think again loviee😭", gif: "assets/gifs/cry.webp" },
    { text: "My heart is breaking… 😭", gif: "assets/gifs/beg2.webp" },
    { text: "You're love of my life please choose Yes ❤️", gif: "assets/gifs/please.webp" },
    { text: "Do you still want another man in your life, Press Yes 😏", gif: "assets/gifs/kill.webp" },
    { text: "Click Yes, No Other options, You're Stuck 💀", gif: "assets/gifs/last.webp" }
];

/* ---------------- DATE IDEAS ---------------- */
const dateIdeas = [
    {
        title: "A long evening walk together 🌙",
        message: "Heyyy babyyy… We are going for a long walk together 💕",
        sticker: "assets/gifs/dateGifs/eve-walk.webp"
    },
    {
        title: "Street food + random talks 🍜",
        message: "Holaaaa… we’re going to eat street food and laugh nonstop 😋",
        sticker: "assets/gifs/dateGifs/street-food.webp"
    },
    {
        title: "Watching a movie cuddled up 🎬",
        message: "Heyy lovee… movie night, cuddles, and falling asleep together 🥰",
        sticker: "assets/gifs/dateGifs/watching-movie.webp"
    },
    {
        title: "Long Drive 🏍️",
        message: "Ayeee… long drive, wind in our faces, just us 🖤",
        sticker: "assets/gifs/dateGifs/long-drive.webp"
    },
    {
        title: "Stay Home and chill up 🏠",
        message: "Staying home, chilling, being annoying together 😘",
        sticker: "assets/gifs/dateGifs/kill.webp"
    }
];

/* ---------------- EMOJI RAIN ---------------- */
function startEmojiRain(emojis) {
    stopEmojiRain();
    emojiInterval = setInterval(() => {
        const e = document.createElement("span");
        e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        e.style.left = Math.random() * 100 + "vw";
        e.style.animationDuration = 4 + Math.random() * 4 + "s";
        emojiLayer.appendChild(e);
        setTimeout(() => e.remove(), 9000);
    }, 120);
}

function stopEmojiRain() {
    if (emojiInterval) clearInterval(emojiInterval);
}

/* ---------------- NO CLICK ---------------- */
noBtn.addEventListener("click", () => {
    if (noCount >= MAX_NO_CLICKS) return;

    noCount++;

    happyAudio.pause();
    sadAudio.play();

    yesPaddingX += 12;
    yesPaddingY += 6;
    yesFontSize += 0.12;

    yesBtn.style.padding = `${yesPaddingY}px ${yesPaddingX}px`;
    yesBtn.style.fontSize = `${yesFontSize}rem`;

    const stage = beggingStages[noCount - 1];
    begSticker.src = stage.gif;
    begSticker.style.display = "block";
    begText.textContent = stage.text;

    startEmojiRain(["💔","😢","😭","🥀","😞","🖤"]);

    if (noCount === MAX_NO_CLICKS) {
        noBtn.style.display = "none";
    }
});

/* ---------------- YES CLICK ---------------- */
yesBtn.addEventListener("click", () => {
    sadAudio.pause();
    happyAudio.play();

    stopEmojiRain();
    startEmojiRain(["❤️","💕","💖","😘","🤍","😊","🤗"]);

    screenQuestion.classList.remove("active");
    screenEnvelopes.classList.add("active");
});

/* ---------------- ENVELOPES ---------------- */
document.querySelectorAll(".envelope").forEach(env => {
    env.addEventListener("click", () => {
        const type = env.dataset.type;
        env.src = env.dataset.open;

        setTimeout(() => {
            screenEnvelopes.classList.remove("active");
            screenContent.classList.add("active");
            loadContent(type);
        }, 1200);
    });
});

/* ---------------- MAIN BACK (TO ENVELOPES) ---------------- */
backBtn.addEventListener("click", () => {
    screenContent.classList.remove("active");
    screenEnvelopes.classList.add("active");
    contentArea.innerHTML = "";
    dateIdeaSelected = false;

    document.querySelectorAll(".envelope").forEach(env => {
        env.src = env.dataset.closed;
    });
});

/* ---------------- CONTENT LOADER ---------------- */
function loadContent(type) {

    /* -------- FLOWERS + DATE IDEAS -------- */
    if (type === "flowers") {
        dateIdeaSelected = false;

        contentArea.innerHTML = `
      <h2 style="margin-bottom:20px;">🌸 Our Date Ideas 🌸</h2>

      <div class="date-ideas"></div>

      <div class="date-popup" id="date-popup">
        <button id="btn-back-dates">← Back to date ideas</button>
        <img id="date-sticker">
        <p id="date-text"></p>
      </div>
    `;

        const ideasContainer = document.querySelector(".date-ideas");
        const popup = document.getElementById("date-popup");
        const popupText = document.getElementById("date-text");
        const popupSticker = document.getElementById("date-sticker");
        const backToDatesBtn = document.getElementById("btn-back-dates");

        dateIdeas.forEach((idea) => {
            const card = document.createElement("div");
            card.className = "date-card";
            card.textContent = idea.title;

            card.addEventListener("click", () => {
                dateIdeaSelected = true;
                ideasContainer.style.display = "none";

                popupSticker.src = idea.sticker;
                popupText.textContent = idea.message;
                popup.classList.add("show");
            });

            ideasContainer.appendChild(card);
        });

        backToDatesBtn.addEventListener("click", () => {
            dateIdeaSelected = false;
            popup.classList.remove("show");
            ideasContainer.style.display = "grid";
        });

        /* Flower shower */
        const flowers = ["1.gif","2.webp","3.webp","4.webp","5.webp"];
        setInterval(() => {
            const flower = document.createElement("img");
            flower.src = `assets/images/flowers/${flowers[
                Math.floor(Math.random() * flowers.length)
                ]}`;
            flower.style.position = "fixed";
            flower.style.left = Math.random() * 100 + "vw";
            flower.style.top = "-60px";
            flower.style.width = "70px";
            document.body.appendChild(flower);

            flower.animate(
                [{ transform: "translateY(0)" }, { transform: "translateY(120vh)" }],
                { duration: 6500, easing: "linear" }
            );

            setTimeout(() => flower.remove(), 6500);
        }, 260);
    }

    /* -------- MEMORIES -------- */
    if (type === "memories") {
        const TOTAL_MEMORIES = 11;
        let html = `<div class="gallery masonry">`;

        for (let i = 1; i <= TOTAL_MEMORIES; i++) {
            html += `
        <d${i}v class="gallery-item">
          <img src="../assets/images/memories/i.jpeg">
          <p>One of my favorite memories ❤️</p>
        </div>`;
        }

        html += `</div>`;
        contentArea.innerHTML = html;

        document.querySelectorAll(".gallery-item").forEach(item => {
            item.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });
    }

    /* -------- LETTER -------- */
    if (type === "letter") {
        contentArea.innerHTML = `
      <img src="assets/images/Letter/Letter.jpg" class="letter-img">
      <p>Every word comes straight from my heart 💌</p>
    `;
    }
}
